---
title: Presentation
layout: "presentation"
draft: true
weight: 2
---

{{% slide type=title %}}

# Wrangling Sound Files

Dr Anthony Truskinger, QUT Ecoacoustics

[@atruskie](https://twitter.com/atruskie)

{{% /slide %}}
{{% slide type=title  %}}

With enough data,
every possible thing that can go wrong,
will go wrong.
{ .emphasize }

{{% /slide %}}
{{% slide %}}

## Topics

1. Storing data
2. Repairing data
3. Segmenting files

{{% /slide %}}
{{% vertical-slides %}}

<!-- vertical slides -->

{{% slide %}}

## Storage

### Scheduling

-   **DO**: what your experiment design needs
-   **PREFER**: longer recordings
-   **AVOID**: contiguous short recordings
    -   e.g. recording consecutive minute-long samples is bad

Many small files seriously affect the performance of file systems.

{{% /slide %}}
{{% slide %}}

## Storage

### Storing data

-   **DO**: Use hard drives
    -   portable HDDs are a good choice
    -   **DO NOT**: unpowered SSD Drives - after some time data loss will occur
-   **DO**: Have a backup
    -   Try to have at least one backup off site
-   **DO**: Upload data to an external repository
-   **AVOID**: 'Box' like services for audio
    -   e.g. OneDrive, DropBox, Google Drive
    -   Tend to be slow for very large sets of data
    -   Also suffer performance penalties for many small files
    -   Are optimised for documents, not audio---the difference detection can slow down your computer

{{% /slide %}}
{{% slide %}}

## Storage

### Directory Structure

-   **DO**: Be consistent
-   **DO**: Follow a pattern
    -   For example[^1]
        `{project}/{deployment}/{site}/[{memory_card}/]`
-   **DO**: Keep all files produced by the sensor
-   **DO NOT**: Mix files from sensors/memory cards into one directory

[^1]: https://github.com/ecoacoustics/metadata-standard/blob/master/storage.md

{{% /slide %}}
{{% slide %}}

## Storage

### Formats

-   **DO**: keep your files in their original formats
    -   embedded metadata is often not kept during conversion
-   **DO**: keep all files produced by the sensor
    -   log files
    -   auxiliary support files
    -   schedules
-   **DO**: Embrace compression
    -   FLAC compression for the A2O sensors results in ≈50% reduction in file size

{{% /slide %}}
{{% slide %}}

## Storage

### Remote repositories

Several are available:

-   Arbimon
-   Wildlife Acoustics' Cloud Storage
-   Ecosounds

> <sl-icon name="info-circle"></sl-icon>[Ecosounds](https://www.ecosounds.org/) now supports remote uploading for any approved user.

{{% /slide %}}

{{% /vertical-slides %}}
{{% vertical-slides %}}

{{% slide %}}

## Repairing data

### Identifying problems

-   Sensors produce all sorts of faulty files.
-   Problems are documented in an open source _known-problems_ repository[^1]
-   Categorizing problems allows us to _describe_ them in a common language

Some Examples:

| ID    | Vendor             | Description                                                |
| ----- | ------------------ | ---------------------------------------------------------- |
| OE001 | N/A                | No date in filename                                        |
| FL008 | Frontier Labs      | Invalid datestamps in file names (space instead of a zero) |
| FL011 | Frontier Labs      | Partial files named `data`                                 |
| WA002 | Wildlife Acoustics | Generating files with no data                              |

[^1]: https://github.com/ecoacoustics/known-problems

{{% /slide %}}
{{% slide %}}

## Repairing data

### Introducing EMU

The _Ecoacoustics Metadata Utility_.

{{% row %}}

-   Renames files
-   Fixes problems
-   Extracts metadata
-   Open source
-   Cross platform
-   [QutEcoacoustics/emu](https://github.com/QutEcoacoustics/emu)
{ .align-left style="width:40%" }

![emu help page](./emu-help.png)
{{% /row %}}

{{% /slide %}}
{{% slide %}}

## Repairing data

### Using EMU to rename files

-   Can convert dates
    ```bash
    > emu rename **/*.WAV
    Looking for targets...
    -   Renamed 5B07FAC0.WAV
            to 20180525T120000Z.WAV
    1 files, 1 renamed, 0 unchanged, 0 failed
    ```
-   Can add timezone offsets[^2]
    ```bash
    > emu rename **/*.wav --offset "+11:00"
    Looking for targets...
    -   Renamed PILLIGA_20121204_234600.wav
            to PILLIGA_20121204T234600+1100.wav
    1 files, 1 renamed, 0 unchanged, 0 failed
    ```
-   Can read metadata from the files to use in rename
    ```bash
    $ emu rename --template "{StartDate}_{SampleRateHertz}{Extension}" --scan-metadata
    Looking for targets...
    -   Renamed /mnt/f/tmp/fixes/renames/20210621T205706-0300.wav
            to /mnt/f/tmp/fixes/renames/20210621T205706-0300_256000.wav
    -   Renamed /mnt/f/tmp/fixes/renames/20220331T094902-0300.flac
            to /mnt/f/tmp/fixes/renames/20220331T094902-0300_44100.flac
    ```

[^2]: There is one true date format: [ISO8601](https://en.wikipedia.org/wiki/ISO_8601)

> Notes:
> - timezone offsets are important for working with any dataset that occurs cross-timezone boundary
> - Add sample rate read from file into filename.... weird example but you can do it

{{% /slide %}}
{{% slide %}}

## Repairing data

### See what emu can fix

{{< asciinema id="fix-list.cast" rows=26 >}}

> Notes:
> More fixes added all the time

{{% /slide %}}
{{% slide %}}

## Repairing data

### Using EMU to fix problems

**FL010**: Repairing an invalid duration

{{< asciinema id="fix-FL010.cast" rows=20 >}}

> Notes:
>
> -   schedule is for one hour
> -   we check it with sox (`-d` for output duration) - it's wrong, 2 hours
> -   i remember i've seen this problem described before
> -   check if the file has a problem with `emu fix check` - it does nothing
> -   it does!
> -   now actually fix the problem
> -   and finally check the correct duration

{{% /slide %}}
{{% slide %}}

## Repairing data

### Using EMU to fix problems

**OE004**, **FL001**, **WA002**:Renaming empty (or near empty) files

{{< asciinema id="rename-empty.cast" rows=20 >}}

Command used: `~/emu/emu fix apply -f OE004 -f FL001 -f WA002 .`

> Notes:
>
> -   some problems can't be repaired
> -   have you ever done a ls.files in R and encountered bad files?
> -   process the files first with EMU

{{% /slide %}}

{{% slide %}}

## Repairing data

### Why EMU?

_"I could fix this myself"_

-   Can you do it for 10,000 files in a 1000 folders?
-   Is your fix destructive?
-   Does it destroy metadata?
-   Is it idempotent?

EMU is used to clean and repair files ingested into [Ecosounds](https://www.ecosounds.org/)
and the [A2O](https://data.acousticobservatory.org/).

It has scanned > 1 million files, and fixed ≈400,000 of them.

> Notes:
>
> idempotent: if you apply the operation twice to something (in this case a audio file)
> does it remain unchanged the second time around
>
> In other words, does accidental application of the fix make more problems?
>
> A firmware bug on sensors deployed for a year has a big effect!

{{% /slide %}}

{{% /vertical-slides %}}
{{% vertical-slides %}}

{{% slide %}}

## Segmenting

Tools to use:

-   `ffmpeg`: the best solution for most tasks
-   `sox`: high quality resampling and spectrogram generation
-   `AP`'s `audiocutter`: for simple tasks with good defaults
    -   useful if you already have AP installed
-   `<your favourite method>`: after all the tricky stuff is done
    -   e.g. `readWave`

Lots of ways to achieve the same outcome.

> Fun fact: _WAVE_ is the name of the audio format, `.wav` is the extension commonly
> used for WAVE files

> Notes:
> Many R/Python libraries have support for segmenting WAVE files.
> Once your data is in a WAVE format

{{% /slide %}}
{{% slide %}}

## Segmenting

### A note on CLI tools

-   Command line tools are often simpler to use (in the long run)
-   Easier to program against
    -   Graphical UIs are difficult to automate
-   Transferrable knowledge!
-   Can often be used within your language of choice
    -   Ecosounds and the A2O use `ffmpeg` and `sox` under the hood
    -   AP uses `ffmpeg` and `sox` under the hood
    -   R can do so through the `system` call
        -   The `av` package in R uses FFmpeg
    -   Python has `subprocess`

> <sl-icon name="info-circle"></sl-icon>
> Software Carpentry has a lesson for using the shell: <https://swcarpentry.github.io/shell-novice/>

> Notes:
> The fewer layers of abstraction you have between the tool and you, means greater
> opportunities for reuse/knowledge transfer

{{% /slide %}}
{{% slide %}}

## Segmenting

### Using `ffmpeg`

- General format: `ffmpeg -i <input_file> <arguments> <output_file>`
- `ffmpeg` infers the format you want from the extension on your output file

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

See our [ffmpeg](../../../help-centre/converting/ffmpeg/) guide for more examples.

{{% /slide %}}
{{% slide %}}

## Segmenting with `AP`

- Uses the same process as `audio2csv`
- Has useful defaults
  - mixes down channels
  - resamples to 22050 Hz
  - emits 1-minute WAVE blocks
- Can customize sample rate, segment size, start and end offsets, segment overlap, segment minimum durations

Example (2 hour flac file):

```bash
#                <input_file>                  <output_directory>
> AP audiocutter 20191026T000000+1000_REC.flac 20191026T000000+1000_REC_segments/
# <...snip...>
Took 00:01:31.0498711. Done.
> ls 20191026T000000+1000_REC_segments/
20191026T000000+1000_REC_0-60.wav       20191026T000000+1000_REC_3120-3180.wav  20191026T000000+1000_REC_5340-5400.wav
20191026T000000+1000_REC_1020-1080.wav  20191026T000000+1000_REC_3180-3240.wav  20191026T000000+1000_REC_540-600.wav
20191026T000000+1000_REC_1080-1140.wav  20191026T000000+1000_REC_3240-3300.wav  20191026T000000+1000_REC_5400-5460.wav
20191026T000000+1000_REC_1140-1200.wav  20191026T000000+1000_REC_3300-3360.wav  20191026T000000+1000_REC_5460-5520.wav
20191026T000000+1000_REC_120-180.wav    20191026T000000+1000_REC_3360-3420.wav  20191026T000000+1000_REC_5520-5580.wav
20191026T000000+1000_REC_1200-1260.wav  20191026T000000+1000_REC_3420-3480.wav  20191026T000000+1000_REC_5580-5640.wav
20191026T000000+1000_REC_1260-1320.wav  20191026T000000+1000_REC_3480-3540.wav  20191026T000000+1000_REC_5640-5700.wav
20191026T000000+1000_REC_1320-1380.wav  20191026T000000+1000_REC_3540-3600.wav  20191026T000000+1000_REC_5700-5760.wav
# <...snip...>
```

See our [AP cutting](../../../help-centre/segmenting/ap/) guide for more examples.

{{% /slide %}}

{{% /vertical-slides %}}
{{% slide %}}

## Golden rules

1. There is one true date format: [ISO8601](https://en.wikipedia.org/wiki/ISO_8601)
    - `YYYY-MM-DDTHH:MM:SS+ZZ`
    - Compact format is _valid_ and is very useful for filenames: `YYYYMMDDTHHMMSS+ZZ`
2. Never delete your originals
3. Cut on demand
4. Embrace the shell and the command line

&nbsp;

<small>_fin_</small>
{.align-center}

Go to the [practical](../practical/).
{.align-center}

{{% /slide %}}
