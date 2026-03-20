# Automation Script for MusicTunel APK Update

# Source and Destination paths
$sourceApk = "C:\Users\RMC\Documents\GitHub\SimpMusic\androidApp\release\musictunel.apk"
$destApk = "c:\Users\RMC\3app website\musictunel-aslii\public\musictunel.apk"

# Git executable path
$git = "C:\Program Files\Git\cmd\git.exe"

Write-Host "Updating APK..." -ForegroundColor Cyan

if (Test-Path $sourceApk) {
    Copy-Item $sourceApk -Destination $destApk -Force
    Write-Host "APK copied successfully." -ForegroundColor Green
    
    # Git operations
    Write-Host "Pushing changes to GitHub..." -ForegroundColor Cyan
    & $git add $destApk
    & $git commit -m "Update APK to latest version"
    & $git push
    Write-Host "Done! Website will update in 1-2 minutes." -ForegroundColor Green
} else {
    Write-Host "Error: Source APK not found at $sourceApk" -ForegroundColor Red
}
