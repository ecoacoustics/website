---
title: Practical
draft: true
weight: 3
---

## Setup

Follow the instructions in the [Requirements](./../requirements) document.

Now open a terminal in the folder where you downloaded the files:

{{< tabs "test" >}}
{{< tab "Windows" >}}

- Open _Windows Explorer_ to the folder where you downloaded the data
- Right click on the folder and choose _Open in Terminal_

{{< /tab >}}
{{< tab "MacOS" >}} 

- Open _Terminal_
- `cd` to the directory of the downloaded workshop materials

{{< /tab >}}
{{< tab "Linux" >}}

- Open _Terminal_
- `cd` to the directory of the downloaded workshop materials

{{< /tab >}}
{{< /tabs >}}


## Try ffmpeg

```bash
# Convert a FLAC file to a WAVE file:
> ffmpeg -i 20191026T000000+1000_REC.flac 20191026T000000+1000_REC.wav

# Cut out the 10th minute:
> ffmpeg -i 20191026T000000+1000_REC.flac -ss 3600 -t 60 20191026T000000+1000_REC_10th_minute.wav

# mix down multiple channels into one single channel
> ffmpeg -i 20191026T000000+1000_REC.flac -ac 1 20191026T000000+1000_REC_mixdown.flac

# downsample to a different frequency (22050 Hz)
> ffmpeg -i 20191026T000000+1000_REC.flac -ar 22050 20191026T000000+1000_REC_mixdown.flac

# putting it all together:
> ffmpeg -i 20191026T000000+1000_REC.flac -ss 3600 -t 60 -ac 1 -ar 22050 20191026T000000+1000_REC_10th_minute.wav

```

## Try the AP audio cutter

```bash
AP audiocutter 20191026T000000+1000_REC.flac 20191026T000000+1000_REC_segments/
```

## Try EMU

### Rename some empty/blank files

### Get metadata for some A2O files
