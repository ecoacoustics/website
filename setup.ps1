#!/usr/bin/env pwsh

git lfs install


git lfs pull

Write-Output "Installing Hugo..."
if ($IsWindows) {
    Start-Process -FilePath pwsh.exe -Verb Runas  -Wait -ArgumentList "-nop -c 'choco install hugo-extended'" -NoNewWindow | wait-job | receive-job
}
elseif ($IsLinux) {
    snap install hugo --channel=extended
}
elseif ($IsMac) {
    brew install hugo
}


npm i -g prettier prettier-plugin-go-template
