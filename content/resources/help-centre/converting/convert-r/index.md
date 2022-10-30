---
title: Converting with R
---

In this section we will discuss some options for working with different audio
formats in R, and converting between those formats. When using R to work with
audio files, we typically use the
[tuneR](https://cran.r-project.org/web/packages/tuneR/index.html) package to
import audio, which stores the data as a `Wave` class object. The packages and
functions discussed below will cover importing a range of audio formats (`WAVE`,
`MP3`, `FLAC`, `WAC`) as a `Wave` object. Once you have a `Wave` object, you can
export the audio as a `WAVE` file if you desire. It is also possible to convert
between `WAVE` and `FLAC` within R, which will be discussed. 

Throughout this guide, we will provide examples of how
to call the various R functions, based on the example R project working
directory shown below. Three audio files are provided to use in the examples,
and you can download those files
[here](https://cloudstor.aarnet.edu.au/plus/s/xlr924y4Ovu17Yr).

``` markdown
.
├── my-project.Rmd
├── data
│   ├── CC1_20171010_125500.wav
│   ├── CC1_20171011_053000.mp3
│   └── 20220421T100000+1000_SEQP-Samford-Wet-B_644370_0000_5857.flac
├── output
└── my-project.Rproj
```

## Importing WAVE files

If you already have `WAVE` files, then no conversion is necessary. You can read
your files directly into R with the tuneR function `readWave`:

``` r
library(tuneR)
# Import WAVE file
CC1_20171010_125500_Wave <- readWave(filename = "data/CC1_20171010_125500.wav")
```

Reading sound files with tuneR stores the data in a `Wave` class object:

``` r
CC1_20171010_125500_Wave
## Wave Object
##	Number of Samples:      1323008
##	Duration (seconds):     60
##	Samplingrate (Hertz):   22050
##	Channels (Mono/Stereo): Mono
##	PCM (integer format):   TRUE
##	Bit (8/16/24/32/64):    16 
```

## Importing and converting MP3

If you have `MP3` files, you can read those directly into R using the tuneR
package, with the function `readMP3`:

``` r
library(tuneR)
# Import MP3 file
CC1_20171011_053000_Wave <- readMP3(filename = "data/CC1_20171011_053000.mp3")
```

``` r
CC1_20171011_053000_Wave
## Wave Object
##	Number of Samples:      1324224
##	Duration (seconds):     60.06
##	Samplingrate (Hertz):   22050
##	Channels (Mono/Stereo): Mono
##	PCM (integer format):   TRUE
##	Bit (8/16/24/32/64):    16 
```

A `Wave` object can be exported as a `WAVE` audio file at any point using the
`writeWave` function. See this example of exporting the audio which was imported
above with the `readMP3` function as a `WAVE` file.  

``` r
# Export the wave object as a .wav sound file
writeWave(CC1_20171011_053000_Wave, filename = "output/CC1_20171011_053000.wav")
```

### Converting a directory from MP3 to WAVE

If you wish to convert all `MP3` files within a directory to `WAVE` prior to
analysis, you can do so with the `mp32wav` function in the
[warbleR](https://cran.r-project.org/web/packages/warbleR/index.html) package. 

``` r
library(warbleR)
mp32wav(path = "data/", dest.path = "output/")
```

{{% hint warning %}}
**Warning:**  
The `mp32wav` function relies on the tuneR package. Sometimes, this function
does not work, and RStudio may abort. Although this bug should be fixed in
future versions of tuneR, if this happens to you, alternative conversion methods
are available (see our [ffmpeg]({{% ref"ffmpeg"%}}) or Audacity (todo) help
pages).   
{{% /hint %}}

## Importing and converting WAC files

The utility to read the Wildlife Acoustics proprietary Compressed format (`WAC`,
file extension: `.wac`) is provided by the
[bioacoustics](https://cran.r-project.org/web/packages/bioacoustics/index.html)
package, with their `read_wac` function. See the example below on using the
`read_wac` function directly using the bioacoustics package. This function also
the useful option of converting your `WAC` files into `WAVE` using the
`write_wav` setting. The example code below is provided by the bioacoustics
package, which reads in a practice `WAC` file that is included with the
bioacoustics package. 

``` r
library(bioacoustics)
filepath <- system.file("extdata", "recording_20170716_230503.wac", package = "bioacoustics")
read_wac(file = filepath)
```

``` r
sound_wac
## Wave Object
##	Number of Samples:      230144
##	Duration (seconds):     0.6
##	Samplingrate (Hertz):   384000
##	Channels (Mono/Stereo): Mono
##	PCM (integer format):   TRUE
##	Bit (8/16/24/32/64):    16 
```

## Importing and converting FLAC

tuneR does not read `FLAC` files, but there are R packages which can help you to
work with `FLAC`, and perform conversions between `FLAC` and `WAVE`. 

{{% hint warning %}}
**Warning:**  
Sometimes, these R functions for reading or converting `FLAC` files may not work
for very large or long duration files (such as files greater than 1 hour in
duration). If you find this issue, we have guides for other converting methods
available. See the help pages in [Converting audio files]({{%
ref"converting"%}}). 
{{% /hint %}}

### seewave

The [seewave](https://cran.r-project.org/web/packages/seewave/index.html)
package provides an integration with a software called
[FLAC](https://xiph.org/flac/index.html) that converts `FLAC` files into `WAVE`,
by using the function `wav2flac`. The function actually converts both ways
(`FLAC` to `WAVE`, `WAVE` to `FLAC`). Before seewave can convert `FLAC`, you
will need to install the FLAC software. See our [FLAC]({{< ref"FLAC">}}) help
page for more information. Further details on the `wav2flac` function can be
found [here](https://rdrr.io/cran/seewave/man/wav2flac.html). 

``` r
library(seewave)
# reverse = TRUE covnerts a flac to a wav file
wav2flac(
        file = "data/20220421T100000+1000_SEQP-Samford-Wet-B_644370_0000_5857.flac",
        reverse = TRUE,
        overwrite = FALSE)

# reverse = FALSE converts a wav to a flac file
wav2flac(
        file = "data/CC1_20171010_125500.wav",
        reverse = FALSE,
        overwrite = FALSE)
```

### warbleR

The wableR package can read `FLAC` files directly, using the function
`read_sound_file`. However, they point out in the
[documentation](https://cran.r-project.org/web/packages/warbleR/warbleR.pdf)
that to read `FLAC` files the function is actually creating a temporary copy of
your sound file in `WAVE` format and this can take a long time to process,
especially for long files. If the goal is opening and processing many long
duration files, this might be slow. Like the seewave function described
previously, this function also requires the FLAC software to be installed on
your system. 

Besides reading `FLAC` files, the `read_sound_file` function in the warbleR
package is also useful because it can read sound files in `WAVE`, `FLAC`, `MP3`
and `WAC` format, and return a `Wave` class object. See the examples below that
demonstrate importing different audio formats using the `read_sound_files`
function:

{{% tabs "read_sound_files" %}}
{{% tab "WAVE" %}} 
``` r
library(warbleR)
CC1_20171010_125500_Wave <- read_sound_file("data/CC1_20171010_125500.wav")
```
``` r
CC1_20171010_125500_Wave
## Wave Object
##	Number of Samples:      1323008
##	Duration (seconds):     60
##	Samplingrate (Hertz):   22050
##	Channels (Mono/Stereo): Mono
##	PCM (integer format):   TRUE
##	Bit (8/16/24/32/64):    16 
```
{{% /tab %}}
{{% tab "FLAC" %}} 

``` r
library(warbleR)
Samford_Wet_B_644370_0000_5857_Wave <- read_sound_file("data/20220421T100000+1000_SEQP-Samford-Wet-B_644370_0000_5857.flac")
``` 
``` r
Samford_Wet_B_644370_0000_5857_Wave
## Wave Object
##	Number of Samples:      77985651
##	Duration (seconds):     3536.76
##	Samplingrate (Hertz):   22050
##	Channels (Mono/Stereo): Mono
##	PCM (integer format):   TRUE
##	Bit (8/16/24/32/64):    16 
```
{{% /tab %}}
{{% tab "MP3" %}} 

``` r
library(warbleR)
CC1_20171011_053000_Wave <- read_sound_file("data/CC1_20171011_053000.mp3")
``` 
``` r 
CC1_20171011_053000_Wave
## Wave Object
##	Number of Samples:      1324224
##	Duration (seconds):     60.06
##	Samplingrate (Hertz):   22050
##	Channels (Mono/Stereo): Mono
##	PCM (integer format):   TRUE
##	Bit (8/16/24/32/64):    16 
```
{{% /tab %}}
{{% tab "WAC" %}}
``` r
library(warbleR)
filepath <- system.file("extdata", "recording_20170716_230503.wac", package = "bioacoustics")
recording_20170716_230503_Wave <- read_sound_file(filepath)
```
``` r
recording_20170716_230503_Wave
## Wave Object
##  Number of Samples:      230144
##  Duration (seconds):     0.6
##  Samplingrate (Hertz):   384000
##  Channels (Mono/Stereo): Mono
##  PCM (integer format):   TRUE
##  Bit (8/16/24/32/64):    16
```
{{% /tab %}}
{{% /tabs %}}

{{% hint info %}}
**Note:**  
The warbleR package uses functions from various packages internally,
including seewave, monitoR, tuneR and dtw, to simplify the process of acoustic
analysis in R. These packages should also be given credit when using warbleR, by
including citations in publications as appropriate (e.g. `citation("seewave")`).  
{{% /hint %}}

## Help! I'm using a different audio format

If you have a different audio format that was not discussed above, you may need
to convert your files using a different software. See our [FFmpeg]({{%
ref"ffmpeg"%}}) help page for more information. 



