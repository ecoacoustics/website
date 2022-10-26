---
title: Converting audio files with R
draft: true
---
## Working with .wav and .mp3

If you are using R and have `.wav` or `.mp3` files, you can read those
directly into R using the tuneR package, with the functions `readWave` and
`readMP3`. Reading sound files with tuneR stores the data in a wave object. A
wave object can be exported as a `.wav` file at any point using the `writeWave`
function.

If you wish to convert all `.mp3` files within a directory to `.wav` prior to
analysis, you can do so with the `mp32wav` function in the warbleR package. 

## Working with .flac
tuneR does not read `.flac`, but there are packages which can help you to
work with `.flac`. 

### seewave
seewave provides an integration with a software called
[FLAC](https://xiph.org/flac/index.html) that converts `.flac` files into `wav`,
by using the function `wav2flac`. The function actually converts both ways
(`.flac` to `.wav`, `.wav` to `.flac`). Before seewave can convert `.flac`, you
will need to install the FLAC software. See our [FLAC]({{< ref"FLAC">}}) help
page for more information. 

#### Example    
```
library(seewave)

file <- "20200117T000000+1000.flac"

wav2flac(file = file, reverse = TRUE, overwrite = FALSE, 
         exename = "flac.exe", path2exe = "C:/ProgramData/chocolatey/bin")
```

![flac-converting-seewave](flac-converting-seewave.JPG) 

Further details on the `wav2flac` function can be found
[here](https://rdrr.io/cran/seewave/man/wav2flac.html)

### warbleR
This package can also read `.flac` files using the function `read_sound_file`.
However, they point out in the
[documentation](https://cran.r-project.org/web/packages/warbleR/warbleR.pdf)
that to read `.flac` files the functions creates a temporary copy in `.wav`
format and this can take a long time to process, especially for long files. If
the goal is opening and processing many long duration files, this might be slow.
The package also has a function `wav_2_flac` that converts `.wav` to `.flac` but
it does not do the reverse operation. It is a wrapper of the seewave function
`wav2flac` with the addition of processing multiple files at once.

## Other sound formats
The `read_sound_file` function in the warbleR package is also useful because it
can read sound files in `.wav`, `.mp3`, `.flac` and `.wac` format, into a wave
class object. The utility to read the Wildlife Acoustics proprietary compressed
format (`.wac`) is provided by the
[bioacoustics](https://cran.r-project.org/web/packages/bioacoustics/index.html)
package, with their `read_wac` function.  

If you have a different sound format that was not discussed above, you may need
to convert your files before working in R. See our [ffmpeg]({{< ref"ffmpeg">}})
help page for more information. 