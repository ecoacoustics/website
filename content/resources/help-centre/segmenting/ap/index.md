---
title: Segmenting with AP
draft: true
---
AP can segment audio files, to desired lengths etc. 

C:\AP\AnalysisPrograms.exe AudioCutter --help
~/AP/AnalysisPrograms AudioCutter --help
~/AP/AnalysisPrograms AudioCutter --help

## WAV

Segmenting `.wav` into smaller files using AP.exe. In Powershell:

```
C:\AP\AnalysisPrograms.exe AudioCutter "C:\AP\test\20200216T040000+1000.wav" "C:\AP\test_output"
```

![wav-audio-cutter-ap](wav-audio-cutter-ap.JPG)

## FLAC

Cutting `.flac` into smaller files using AP.exe. In Powershell:

```
C:\AP\AnalysisPrograms.exe AudioCutter "C:\AP\test\20200216T040000+1000.flac" "C:\AP\test_output"
```

![flac-audio-cutter-ap](../ap/flac-audio-cutter-ap.JPG)

## Note
If you only wish to calculate acoustic indices, AP can handle segmentation of
your audio files automatically. This saves storage space, as the one minute
segment files do not need to be kept alongside your original recording. 