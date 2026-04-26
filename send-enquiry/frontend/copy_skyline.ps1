# Copy Skyline Image Script
$source = "C:\Users\sakti\.gemini\antigravity\brain\754b5898-f1d4-4229-8c80-db0a8ccda85b\skyline_silhouette_1777197291666.png"
$dest = "c:\figma\send-enquiry\frontend\public\skyline.png"

if (Test-Path $source) {
    Copy-Item $source $dest -Force
    Write-Output "Successfully copied $source to $dest"
} else {
    Write-Error "Source file not found: $source"
}
