---
title: FFmpeg
---

[FFmpeg](https://ffmpeg.org/)  is a cross platform tool which allows multimedia
files, such as audio recordings, to be converted between different formats. We
will give a simple overview on how to use this tool to do basic conversions
between audio formats, but keep in mind the features of FFmpeg are far more
extensive, and covered in detail within their documentation.

FFmpeg is a command line tool, which means we need to use a command line
interface (CLI), either the command prompt (`cmd.exe`) or PowerShell for Windows
operating systems, or terminal, if you are using macOS or Linux. If this is your
first time using FFmpeg, start by downloading and installing the appropriate
build from the FFmpeg website. You can then open your CLI, and type ffmpeg, to
check that your installation was successful. You should see some information
returned, such as the version number of FFmpeg you have installed. 

## Installing FFmpeg

You can download ffmpeg from [its website](https://ffmpeg.org/download.html).

You can also use a package amanger to install it:

- Windows
    - winget: `winget install ffmpeg`
    - Chocolately: `choco install ffmpeg`
- MacOS:
    - brew: `brew install ffmpeg`
- Linux:
    - apt: `apt install ffmpeg`
    - yum: `yum install ffmpeg`

## Converting audio files

FFmpeg is able to convert audio easily with smart default settings.

### Simple conversions

This is a simple conversion which takes your input file name and format, and
returns an output, in the format of the file extension you specify. For example,
the code below will take the input (`-i`) file, named `input.mp3`, and return a file
called `output.wav`. 

```
ffmpeg -i input.mp3 output.wav
``` 

### Batch conversions 

We can also convert all files within a directory with a batch conversion. The
code below will convert all `WAVE` files, into `MP3`. The original file names
are preserved for the output, and a `_converted` suffix is added (which you can
modify). 

In PowerShell (Windows, and Linux/Mac if you have PowerShell installed):

```powershell
# Converts .m4a files to .wav, for any .m4a files found in the current directory and all sub directories
Get-ChildItem *.m4a -Recurse | ForEach-Object { ffmpeg -i $_ ($_ -replace "\..*$", ".wav") }

# Bonus tip: add -parallel to the for each to convert multiple files at the same time
# (Requires version 7 or above of PowerShell)
Get-ChildItem *.m4a -Recurse | ForEach-Object -parallel { ffmpeg -i $_ ($_ -replace "\..*$", ".wav") }
```


In bash (for linux or Mac):

```bash
for i in *.wav; do ffmpeg -i "$i" "${i%.*}.mp3"; done
```

## Output settings

### Sample rate

FFmpeg will not change sample rate unless you tell it to. If you want to modify
the sample rate, first check the audio properties of your sound file by entering
the file without specifying an output: `ffmpeg -i input.wav`. Assuming that
input.wav has a sample rate 44100 Hz, but you want to down sample this file, the
sample rate of the output file can be specified using `-ar`. The example below
will return a `.wav` file with a sample rate of 22050 Hz. 

```
ffmpeg -i input.flac -ar 22050 output.wav
```

### Bit depth

However, FFmpeg defaults to 16-bit encoding when outputting `WAVE`, and will
therefore not preserve bit depth of your audio file, if it is greater than 16.
If you want to preserve a 24 bit encoded file, you can manually specify a 24-bit
encoder.

```
ffmpeg -i input.flac -c:a pcm_s24le output.wav
```








