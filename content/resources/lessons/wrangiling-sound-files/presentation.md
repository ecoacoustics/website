---
title: Presentation
type: "resources"
layout: "presentation"
draft: true
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
{ .r-fit-text }

{{% /slide %}}
{{% slide %}}

## Topics

1. Storing data
2. Repairing data
3. Extracting metadata
4. Segmenting files

{{% /slide %}}
{{% vertical-slides %}}

<!-- vertical slides -->

{{% slide %}}

## Scheduling

-   **DO**: what your experiment design needs
-   **PREFER**: longer recordings
-   **AVOID**: contiguous short recordings
    -   e.g. recording consecutive minute-long samples is bad

Many small files seriously affect the performance of file systems.

{{% /slide %}}
{{% slide %}}

## Storing data

-   **DO**: Use hard drives
-   **DO**: Have a backup
-   **DO**: Upload data to an external repository
-   **AVOID**: 'Box' like services
    -   (OneDrive, DropBox, Google Drive)
    -   Tend to be slow for very large sets of data
    -   Are optimised for documents, not audio
-   **DON'T**: Store data on SSDs without power

{{% /slide %}}
{{% slide %}}

## Storing data

> [Ecosounds](https://www.ecosounds.org/) now supports remote uploading for any approved user.

{{% /slide %}}
{{% slide %}}

## Directory Structure

-   **DO**: Be consistent
-   **DO**: Follow a pattern
    -   For example
        `{project}/{deployment}/{site}/[{memory_card}/]`
-   **DO NOT**: Mix files from sensors/memory cards into one directory

{{% /slide %}}
{{% slide %}}

## Formats

-   **DO**: keep your files in their original formats
    -   embedded metadata is often not kept during conversion
-   **DO**: keep all files produced by the sensor
    -   log files
    -   ancillary measurements
    -   schedules
-   **DO**: Embrace compression

{{% /slide %}}

{{% /vertical-slides %}}
{{% vertical-slides %}}

{{% slide %}}

## Repairing data

There are lot of problems with audio files produced by PAM.

Problems are documented in an open source knowledge base:

<https://github.com/ecoacoustics/known-problems>

{{% /slide %}}
{{% slide %}}

## Using EMU to repair files

{{% /slide %}}
{{% slide %}}

## Using EMU to rename files

{{% /slide %}}

{{% /vertical-slides %}}
{{% vertical-slides %}}

{{% slide %}}

## Using EMU to extract metadata

{{% /slide %}}
{{% slide %}}

## Using EMU from R

{{% /slide %}}
{{% slide %}}

## Using EMU from Python

{{% /slide %}}

{{% /vertical-slides %}}
{{% slide %}}

## Golden rules

1. There is one true date format: [ISO8601](https://en.wikipedia.org/wiki/ISO_8601)
2. Never delete your originals
3. Cut on demand
4. Embrace the shell

<small>_fin_</small>

{{% /slide %}}
