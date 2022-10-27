---
title: Converting audio files with R
---
In this section we will discuss some options for working with different audio
formats in R, and converting between those formats. When using R to work with
audio files, we typically use the tuneR package to import audio, which stores
the data as a wave class object. The packages and functions discussed below will
cover importing a range of audio formats (.wav, .mp3, .flac, .wac) as a wave
object. Once you have a wave object, you can export the audio as a `.wav` file
if you desire. It is also possible to convert between .wav and .flac within R,
which will be discussed. 

Throughout this guide, we will provide examples of how
to call the various R functions, based on the example R project working
directory shown below:  

``` markdown
.
├── my-project.Rmd
├── data
│   ├── a_wav_sound.wav
│   ├── a_flac_sound.flac
│   └── a_mp3_sound.mp3
├── output
│   └── converted.wav
└── my-project.Rproj

```
## Importing .wav files
If you already have `.wav` files, then no conversion is necessary. You can read
your files directly into R with the tuneR function `readWave`:

``` r
library(tuneR)
# Import .wav file
frog_BC03_1C102_WAV <- readWave(filename = "data/frog_BC03_1C102.wav")
```
Reading sound files with tuneR stores the data in a wave object:
``` r
frog_BC03_1C102_WAV
## Wave Object
##	Number of Samples:      18984000
##	Duration (seconds):     395.5
##	Samplingrate (Hertz):   48000
##	Channels (Mono/Stereo): Mono
##	PCM (integer format):   TRUE
##	Bit (8/16/24/32/64):    24 
```

## Importing and converting .mp3
If you have `.mp3` files, you can read those directly into R using the tuneR
package, with the function `readMP3`:

``` r
library(tuneR)
# Import .mp3 file
bird_XC_755944_mp3 <- readMP3(filename = "data/bird_XC_755944.mp3")
```
``` r
bird_XC_755944_mp3
##Wave Object
##	Number of Samples:      43352064
##	Duration (seconds):     903.17
##	Samplingrate (Hertz):   48000
##	Channels (Mono/Stereo): Stereo
##	PCM (integer format):   TRUE
##	Bit (8/16/24/32/64):    16 
```
A wave object can be exported as a `.wav` file at any point using the
`writeWave` function. See this example of exporting the audio which was imported
above with the `readMP3` function as a `.wav` file.  

``` r
# Export the wave object as a .wav sound file
writeWave(bird_XC_755944_mp3, filename = "output/bird_XC_755944.wav")
```
### Converting a directory from .mp3 to .wav

If you wish to convert all `.mp3` files within a directory to `.wav` prior to
analysis, you can do so with the `mp32wav` function in the
[warbleR](https://cran.r-project.org/web/packages/warbleR/index.html) package. 

``` r
library(warbleR)
mp32wav(path = "data/", dest.path = "output/")
```
{{% hint warning %}}
**Warning:**  
The mp32wav function relies on the tuneR package. Sometimes, this function does
not work, and RStudio may abort. Although this bug should be fixed in future
versions of tuneR, if this happens to you, alternative conversion methods are
available (see our [ffmpeg]({{% ref"ffmpeg"%}}) or Audacity (todo) help pages).   
{{% /hint %}}

## Importing and converting .wac files
The utility to read the Wildlife Acoustics proprietary compressed format
(`.wac`) is provided by the
[bioacoustics](https://cran.r-project.org/web/packages/bioacoustics/index.html)
package, with their `read_wac` function. See the example below on using the
`read_wac` function directly using the bioacoustics package. This function has
the useful option of converting your `.wac` files into `.wav` using the
`write_wav` setting. 

``` r
library(bioacoustics)
# writes wav files to output folder of your choosing
sound_wac <- read_wac(file = "data/recording_20170716_230503.wac", write_wav = "output/")
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
## Importing and converting .flac
tuneR does not read `.flac`, but there are packages which can help you to
work with `.flac`, and perform conversions between `.flac` and `.wav`

### seewave
The [seewave](https://cran.r-project.org/web/packages/seewave/index.html)
package provides an integration with a software called
[FLAC](https://xiph.org/flac/index.html) that converts `.flac` files into `wav`,
by using the function `wav2flac`. The function actually converts both ways
(`.flac` to `.wav`, `.wav` to `.flac`). Before seewave can convert `.flac`, you
will need to install the FLAC software. See our [FLAC]({{< ref"FLAC">}}) help
page for more information. Further details on the `wav2flac` function can be
found [here](https://rdrr.io/cran/seewave/man/wav2flac.html). 

Take note of the `exename` and `path2exe` settings in the examples below. If you
are using windows, path2exe should specify the folder which contains `flac.exe`.
If you are using MacOS, the directory that flac is installed should be listed in
your `$PATH` variable for the function to work. 

{{% tabs "seewave_flac" %}}
{{% tab "Windows" %}} 
``` r
library(seewave)
# reverse = TRUE covnerts a flac to a wav file
 wav2flac(
         file = "data/20200117T000000+1000.flac",
         reverse = TRUE,
         overwrite = FALSE,
         exename = "flac.exe",
         path2exe = "C:/ProgramData/chocolatey/bin")

# reverse = FALSE converts a wav to a flac file
 wav2flac(
         file = "data/20200117T000000+1000.wav",
         reverse = FALSE,
         overwrite = FALSE,
         exename = "flac.exe",
         path2exe = "C:/ProgramData/chocolatey/bin")
```
{{% /tab %}}
{{% tab "MacOS" %}} 
``` r
library(seewave)
# reverse = TRUE covnerts a flac to a wav file
wav2flac(
        file = "data/CanyonWren.flac",
        reverse = TRUE,
        overwrite = FALSE,
        exename = "flac")

# reverse = FALSE converts a wav to a flac file
wav2flac(
        file = "data/CanyonWren.wav",
        reverse = FALSE,
        overwrite = FALSE,
        exename = "flac")
```
{{% /tab %}}
{{% tab "Linux" %}} 
{{% /tab %}}
{{% /tabs %}}

### warbleR
The wableR package can read `.flac` files directly, using the function
`read_sound_file`. However, they point out in the
[documentation](https://cran.r-project.org/web/packages/warbleR/warbleR.pdf)
that to read `.flac` files the function is actually creating a temporary copy of
your sound file in `.wav` format and this can take a long time to process,
especially for long files. If the goal is opening and processing many long
duration files, this might be slow. Like the seewave function described
previously, this function also requires FLAC to be installed on your system. 

Besides reading `.flac` files, the `read_sound_file` function in the warbleR
package is also useful because it can read sound files in `.wav`, `.flac`,
`.mp3` and `.wac` format, and return a `wave` class object. See the examples
below that demonstrate importing different audio formats using the
`read_sound_files` function:

{{% tabs "read_sound_files" %}}
{{% tab ".wav" %}} 
``` r
library(warbleR)
frog_BC03_1C102_wave <- read_sound_file("data/frog_BC03_1C102.WAV")
```
``` r
frog_BC03_1C102_wave
## Wave Object
##  Number of Samples:      18984000
##  Duration (seconds):     395.5
##  Samplingrate (Hertz):   48000
##  Channels (Mono/Stereo): Mono
##  PCM (integer format):   TRUE
##  Bit (8/16/24/32/64):    24
```
{{% /tab %}}
{{% tab ".flac" %}} 

``` r
library(warbleR)
CanyonWren_wave <- read_sound_file("data/CanyonWren.flac")
``` 
``` r
CanyonWren_wave
## Wave Object
##  Number of Samples:      237697
##  Duration (seconds):     5.39
##  Samplingrate (Hertz):   44100
##  Channels (Mono/Stereo): Mono
##  PCM (integer format):   TRUE
##  Bit (8/16/24/32/64):    16
```
{{% /tab %}}
{{% tab ".mp3" %}} 

``` r
library(warbleR)
bird_XC_755944_wave <- read_sound_file("data/bird_XC_755944.mp3")
``` 
``` r 
bird_XC_755944_wave
## Wave Object
##  Number of Samples:      43352064
##  Duration (seconds):     903.17
##  Samplingrate (Hertz):   48000
##  Channels (Mono/Stereo): Stereo
##  PCM (integer format):   TRUE
##  Bit (8/16/24/32/64):    16
```
{{% /tab %}}
{{% tab ".wac" %}}
``` r
library(warbleR)
recording_20170716_230503_wave <- read_sound_file("data/recording_20170716_230503.wac")
```
``` r
recording_20170716_230503_wave
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
to convert your files using a different software. See our [ffmpeg]({{<
ref"ffmpeg">}}) help page for more information. 



