---
title: FLAC
---

## Description
FLAC stands for Free Lossless Audio Codec. This format allows your audio files
to be compressed to around half the size of a `.wav` file, without losing any
information (lossless compression). Storing audio files in a lossless format is
really important when ecoacoustics starts to be scaled up. This means storing
files is cheaper, and transferring them gets easier.

You can open and listen to `.flac` files in most commonly used audio software,
such as [Raven](https://ravensoundsoftware.com/)[^1] and
[Audacity](https://www.audacityteam.org).
[AnalysisPrograms.exe](https://ap.qut.ecoacoustics.info/basics/introduction.html)
(AP.exe) can run analysis (i.e.: calculate indices and segment) on `.flac`
files. However, some analysis tools may not support `.flac`, in which case you
will be required to convert your files to `.wav`. See [Converting]({{< ref
"converting" >}})

[^1]: Note: Raven can read `.flac` files, but can't export audio files as
    `.flac`. If you make changes to the audio file in Raven that you wish to
    save, you can save the file as `.wav`