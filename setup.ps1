#!/usr/bin/env pwsh

git lfs install


git lfs pull

Write-Output "Installing Hugo..."
if ($IsWindows) {
    gsudo choco install hugo
}
elseif ($IsLinux) {
    sudo apt-get install hugo
}
elseif ($IsMac) {
    brew install hugo
}