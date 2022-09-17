---
title: Converting audio files with R
draft: true
---

Some info here should move to different sections. 

## tuneR
tuneR does not read `.flac`, you'll need to convert the files to `.wav`.

## seewave
seewave does not read `.flac` but they provide an integration with a software
called [FLAC](https://xiph.org/flac/index.html) that converts the flac files
into wave, by using the function `wav2flac`. The function actually converts both
ways (flac to wav, wav to flac). See (link to converting with flac) for more
information. 

### Example

```
library(seewave)

file <- "20200117T000000+1000.flac"

wav2flac(file = file, reverse = TRUE, overwrite = FALSE, 
         exename = "flac.exe", path2exe = "C:/ProgramData/chocolatey/bin")
```

![flac-converting-seewave](flac-converting-seewave.JPG) Details and help
on `wav2flac` can be found
[here](https://rdrr.io/cran/seewave/man/wav2flac.html)

## warbleR
This package can read `.flac` files using the function `read_sound_files`.
However, they point out in the
[help](https://cran.r-project.org/web/packages/warbleR/warbleR.pdf) that to read
`.flac` files it is necessary to create a temporary copy in wav format and this
can take a long time to process, especially for long files. If the goal is using
the files in some sort of loop, or opening and processing multiple files, this
might not be the best option. The package also has a function `wav_2_flac` that
converts `.wav` to `.flac` but it does not do the reverse operation. It is a
wrapper of the seewave function `wav2flac` with the addition of processing
multiple files at once.