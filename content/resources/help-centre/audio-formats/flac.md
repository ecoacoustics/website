---
title: FLAC
---

## Description

`FLAC` stands for Free Lossless Audio Codec (file extension: `.flac`). This
format allows your audio files to be compressed to around half the size of a
`WAVE` file, without losing any information (lossless compression). Storing
audio files in a lossless format is really important when ecoacoustics starts to
be scaled up. This means storing files is cheaper, and transferring them gets
easier.

You can open and listen to `FLAC` files in most commonly used audio software,
such as [Raven](https://ravensoundsoftware.com/)[^1] and
[Audacity](https://www.audacityteam.org).
[AnalysisPrograms.exe](https://ap.qut.ecoacoustics.info/basics/introduction.html)
(AP.exe) can run analysis (i.e.: calculate indices and segment) on `FLAC` files.
However, some analysis tools may not support `FLAC`, in which case you will be
required to convert your files to `WAVE`. See the [Converting audio files]({{%
ref "converting" %}}) section for more information. 

[^1]: Note: Raven can read `FLAC` files, but can't export audio files as `FLAC`.
    If you make changes to the audio file in Raven that you wish to save, you
    can save the audio as a `WAVE` file. 