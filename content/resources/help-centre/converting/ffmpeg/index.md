---
title: FFmpeg
---

Introduction to FFmpeg

[text](https://ffmpeg.org/) 

FFmpeg is a cross platform tool which runs in the command line to "convert
multimedia files between formats." Particularly for changing / converting audio
formats quickly, this tool is amazing. We will give a simple overview on how to
use this tool to do basic conversions between audio formats, but keep in mind
the features of FFmpeg are far more extensive, and covered in detail within
their documentation.

FFmpeg is a command line tool, which means we need to use a command line
interface (CLI), either the command prompt (cmd.exe) or PowerShell for Windows
operating systems, or terminal, if you are using macOS or Linux. If this is your
first time using FFmpeg, start by downloading and installing the appropriate
build from the FFmpeg website. You can then open your CLI, and type ffmpeg, to
check that your installation was successful. You should see some information
returned, such as the version number of FFmpeg you have installed. 

## Converting audio files
### Simple conversions 
### Batch conversions 

batch: 
```for i in *.wav; do ffmpeg -i "$i" -f mp3 "${i%.*}.mp3"; done```

## Output settings
specify output bit depth and sample rate

convert flac to wav. ffmpeg will not change sample rate unless you tell it to. 
ffmpeg -i input.flac output.wav

"ffmepg will however not preserve bit depth and default to 16-bit encoding, so
if your input is 24 bit, you have to use:"
ffmpeg -i input.flac -c:a pcm_s24le output.wav

## Compressing audio
wav to flac








