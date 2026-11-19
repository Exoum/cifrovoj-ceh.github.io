Add-Type -AssemblyName System.Drawing
$src = 'f:\Projects\Chatting_AI\cifrovoj_ceh\products'
$dst = 'f:\Projects\Chatting_AI\personal_site\assets\img\shop'
$map = @{
  '01_presentation'      = 'pres'
  '02_commercial_offer'  = 'kp'
  '03_resume'            = 'resume'
  '04_price_list'        = 'price'
  '05_business_card'     = 'card'
  '06_social_pack'       = 'social'
  '07_lead_magnet'       = 'checklist'
  '08_invoice'           = 'invoice'
  '09_scripts'           = 'scripts'
  '11_contract'          = 'contract'
  '12_onepager_site'     = 'site'
}
$jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }

function Save-Preview([string]$file, [string]$outDir, [int]$maxW) {
  $img = [System.Drawing.Image]::FromFile($file)
  $w = $img.Width; $h = $img.Height
  if ($w -gt $maxW) { $h = [int]($h * $maxW / $w); $w = $maxW }
  $bmp = New-Object System.Drawing.Bitmap($w, $h)
  $g = [System.Drawing.Graphics]::FromImage($bmp)
  $g.Clear([System.Drawing.Color]::White)
  $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
  $g.DrawImage($img, 0, 0, $w, $h)
  $g.Dispose(); $img.Dispose()
  $name = [IO.Path]::GetFileNameWithoutExtension($file) + '.jpg'
  $ep = New-Object System.Drawing.Imaging.EncoderParameters(1)
  $ep.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [long]85)
  $bmp.Save((Join-Path $outDir $name), $jpegCodec, $ep)
  $bmp.Dispose(); $ep.Dispose()
}

foreach ($k in $map.Keys) {
  $out = Join-Path $dst $map[$k]
  New-Item -ItemType Directory -Force -Path $out | Out-Null
  Get-ChildItem (Join-Path (Join-Path $src $k) 'preview') -Filter *.png | ForEach-Object {
    Save-Preview $_.FullName $out 1280
  }
}

# story backgrounds: 4 varied picks, downscaled to 720x1280
$bgOut = Join-Path $dst 'bg'
New-Item -ItemType Directory -Force -Path $bgOut | Out-Null
foreach ($n in @('bg_01', 'bg_02', 'bg_03', 'bg_12')) {
  Save-Preview (Join-Path (Join-Path $src '10_backgrounds\bg') ($n + '.png')) $bgOut 720
}

# report
$out2 = @()
Get-ChildItem $dst -Recurse -File | ForEach-Object {
  $out2 += ($_.Directory.Name + '/' + $_.Name + ' ' + [Math]::Round($_.Length / 1KB) + 'KB')
}
$out2 | Set-Content 'f:\Projects\Chatting_AI\personal_site\_conv.txt' -Encoding utf8
'DONE'