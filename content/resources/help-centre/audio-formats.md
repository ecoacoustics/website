# Audio formats

This document offers a simple guide through the different audio formats used in Ecoacoustics data collection. We will also present some solutions for dealing with each type of data in case you need to convert them. If you spot a mistake or would like to add and contribute to our document, please do! File an issue [here](https://github.com/ecoacoustics/website/issues)

## WAV
`.wav` or `.wave` is the most common audio format passive acoustic sensors collect. It is a Waveform Audio file, and that is why it is called `wav`. `.wav` is great because it does not apply any type of compression to the file, so we can use it in analysis in different types of software without any problems. However, not compressing the file comes with a trade-off: these files are usually very large in size, making it difficult to store and share. Compressing a file means to removing information from the file to make it smaller. MP3, for example, is one type of compression of audio files, and that is how you could store hundreds of songs in an MP3 device or in a CD (if you lived that age). MP3 works well for songs and there is no loss in quality for listening, but when it comes to analysing the data in terms of acoustic indices, running recognisers, etc, MP3 does not work, because of the compression.
All softwares and packages work fine in importing and exporting `.wav` files since it is the most common data format used for acoustic ecology.

### Segmenting

#### AP

```
C:\AP\AnalysisPrograms.exe AudioCutter "C:\AP\test\20200216T040000+1000.wav" "C:\AP\test_output"
```
[./media/wav-audio-cutter-ap.jpg]
#### R 


## FLAC
FLAC stands for Free Lossless Audio Codec, and it is one type of compressed audio files that does not loose information. Being able to store audio files in a lossless format is really important when ecoacoustics starts to be scale up. This means storing those files cheaper but also, transferring them gets easier. You can open and listen `.flac` files in most softwares, but to analyse them, some tools require for it to be transformed to `.wav` to be able to process it.

Most softwares, like [Raven](https://ravensoundsoftware.com/) and [Audacity](https://www.audacityteam.org/) can open `.flac` files, however, they do not allow you to export them as `.flac`. [AnalysisPrograms.exe](https://ap.qut.ecoacoustics.info/basics/introduction.html) (AP.exe) can run analysis (i.e.: calculate indices and segment) on `.flac` files.

### Segmenting
#### AP.exe - Example

Cutting `.flac` into smaller files using AP.exe. In Powershell:

```
C:\AP\AnalysisPrograms.exe AudioCutter "C:\AP\test\20200216T040000+1000.flac" "C:\AP\test_output"
```

[./media/flac-audio-cutter-ap.jpg]

### Converting

#### R
##### tuneR
tuneR does not reads `.flac`, you'll need to convert the files to `.wav`.

#### seewave
seewave does not read `.flac` but they provide an integration with a software called [FLAC](https://xiph.org/flac/index.html) that converts the flac files into wave, by using the function `wav2flac`. The function actually converts both ways (flac to wav, wav to flac).

##### Example

```
library(seewave)

file <- "20200117T000000+1000.flac"

wav2flac(file = file, reverse = TRUE, overwrite = FALSE, 
         exename = "flac.exe", path2exe = "C:/ProgramData/chocolatey/bin")
```

[./media/flac-converting-seewave.jpg]

Details and help on `wav2flac` can be found [here](https://rdrr.io/cran/seewave/man/wav2flac.html)

#### warbleR
This package can read `.flac` files using the function `read_sound_files`. However, they point out in the [help](https://cran.r-project.org/web/packages/warbleR/warbleR.pdf) that to read `.flac` files it is necessary to create a temporary copy in wav format and this can take a long time to process, especially for long files. If the goal is using the files in some sort of loop, or opening and processing multiple files, this might not be the best option.
The package also has a function `wav_2_flac` that converts `.wav` to `.flac` but it does not do the reverse operation. It is a wrapper of the seewave function `wav2flac` with the addition of processing multiple files at once.

#### FLAC (software)
The FLAC software is a command line tool that do several things with `.flac` files. You'll have to download FLAC [here](https://xiph.org/flac/download.html) and you can find instructions [here](https://xiph.org/flac/documentation.html) and  [here](https://xiph.org/flac/documentation_tools.html).

##### Example

In Powershell, this command line will transform the assigned `.flac` file to `.wav` and save it with the same name, in the same folder as the original one. The original file will not be removed:
```
flac -d "D:\Recording_Check\64\253\20200117T000000+1000.flac"
```

[./media/flac-converting-flac.jpg]

### Analysing

#### AP.exe - Example
```
C:\AP\AnalysisPrograms.exe audio2csv "C:\AP\test\20200216T040000+1000.flac" "C:\AP\ConfigFiles\Towsey.Acoustic.yml" "C:\AP\test_output"
```
[./media/flac-indices-ap.jpg]

## WAC
`.wac` files are a proprietary format used by Wildlife Acoustics.




