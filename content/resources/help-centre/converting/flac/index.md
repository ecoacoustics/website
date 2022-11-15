---
title: FLAC (software)
---

If you want to convert audio files to or from `FLAC`, it is important to first
install the FLAC software. You'll have to download FLAC
[here](https://xiph.org/flac/download.html) and you can find documentation about
the software [here](https://xiph.org/flac/documentation.html) and
[here](https://xiph.org/flac/documentation_tools.html). 

You can then use the software directly from the command line. Alternatively,
installing the FLAC software will allow you to use the `wav2flac` function in
the seewave package for R. See [Converting audio files with R]({{< ref
"convert-r" >}}). 

## Installing FLAC

## Using FLAC with seewave

TODO
See ffmpeg/path/flac/ installation etc if this function doesn't work. wav2flac
has default settings for exe and path.)

Take note of the `exename` and `path2exe` settings in the examples below. If you
are using windows, path2exe should specify the folder which contains `flac.exe`.
If you are using macOS, the directory that flac is installed should be listed in
your `$PATH` variable for the function to work. 

## Using FLAC in the command line 

## Example

add tabs: 

In Powershell, this command will convert the assigned `FLAC` file to `WAVE` and
save it with the same name, in the same folder as the original. The original
file will not be removed. 

```
flac -d "D:\Recording_Check\64\253\20200117T000000+1000.flac"
```
![flac-converting-flac](flac-converting-flac.JPG)
