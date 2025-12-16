$content = Get-Content 'c:\Users\sheha\Desktop\TIP TOp\style.css' -Raw
$content = $content -replace '--color-gold: #F5C26B;', '--color-gold: #FFD700;'
$content = $content -replace '--color-accent: #FF6B6B;', '--color-accent: #FF006E;'
$content = $content -replace '--color-accent-2: #0B2545;', '--color-accent-2: #00D9D9;'
$content = $content -replace '--content-bg: #FBFBFA;', '--content-bg: #FFFFFF;'
$content = $content -replace '--header-bg: linear-gradient\(135deg, #0B2545 0%, #071b34 100%\);', '--header-bg: linear-gradient(135deg, #00D9D9 0%, #0099CC 100%);'
$content = $content -replace '--hero-bg: linear-gradient\(135deg, rgba\(11,37,69,0.9\) 0%, rgba\(7,27,52,0.85\) 100%\)', '--hero-bg: linear-gradient(135deg, rgba(0,217,217,0.95) 0%, rgba(0,153,204,0.9) 100%)'
$content = $content -replace '--btn-bg-hover: #e55a5a;', '--btn-bg-hover: #DD0055;'
$content = $content -replace '--fe-box-bg: #FFFFFF;', '--fe-box-bg: #F0FFFF;'
$content = $content -replace '--footer-bg: linear-gradient\(135deg, #071b34 0%, #021028 100%\);', '--footer-bg: linear-gradient(135deg, #0099CC 0%, #0066AA 100%);'
$content | Set-Content 'c:\Users\sheha\Desktop\TIP TOp\style.css'
Write-Host "Colors updated to kid-friendly toy store palette!"
