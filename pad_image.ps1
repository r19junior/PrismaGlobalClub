Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("d:\2028\p2\p\public\favicon.png")
$width = $img.Width
$height = $img.Height
$newImg = New-Object System.Drawing.Bitmap($width, $height)
$g = [System.Drawing.Graphics]::FromImage($newImg)
$g.Clear([System.Drawing.Color]::White)
$scale = 0.65
$newW = [int]($width * $scale)
$newH = [int]($height * $scale)
$x = [int](($width - $newW) / 2)
$y = [int](($height - $newH) / 2)
$g.DrawImage($img, $x, $y, $newW, $newH)
$newImg.Save("d:\2028\p2\p\public\og-favicon.png", [System.Drawing.Imaging.ImageFormat]::Png)
$g.Dispose()
$img.Dispose()
$newImg.Dispose()
