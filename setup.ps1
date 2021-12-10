#!/usr/bin/env pwsh

git lfs install


git lfs pull

Write-Output "Installing Hugo..."
if ($IsWindows) {
    gsudo choco install hugo-extended
}
elseif ($IsLinux) {
    snap install hugo --channel=extended
}
elseif ($IsMac) {
    brew install hugo
}