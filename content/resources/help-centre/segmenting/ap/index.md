---
title: Segmenting with AP
---

AnalysisPrograms (AP) software can segment audio files into desired lengths.
For full details see the `--help` documentation. 

```
C:\AP\AnalysisPrograms.exe AudioCutter --help
~/AP/AnalysisPrograms AudioCutter --help
```

## WAVE

Segmenting a `WAVE` file into smaller files using AP.exe. In Powershell:

```
C:\AP\AnalysisPrograms.exe AudioCutter "C:\AP\test\20200216T040000+1000.wav" "C:\AP\test_output"
```

![wav-audio-cutter-ap](wav-audio-cutter-ap.JPG)

## FLAC

Segmenting a `FLAC` file into smaller files using AP.exe. In Powershell:

```
C:\AP\AnalysisPrograms.exe AudioCutter "C:\AP\test\20200216T040000+1000.flac" "C:\AP\test_output"
```

![flac-audio-cutter-ap](../ap/flac-audio-cutter-ap.JPG)

## Note

If you only wish to calculate acoustic indices, AP can handle segmentation of
your audio files automatically. This saves storage space, as the one minute
segment files do not need to be kept alongside your original recording. 