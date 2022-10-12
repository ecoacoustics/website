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
{{% slide %}}

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
-   **DON'T** Store data on SSDs without power

{{% /slide %}}
{{% slide %}}

## Storing data

> [Ecosounds](https://www.ecosounds.org/) now supports remote uploading for any approved user.

{{% /slide %}}
{{% slide %}}

## Directory Structure

-   **DO**: Be consistent
-

{{% /slide %}}

<!-- end vertical slides -->

{{% /slide %}}
{{% slide %}}

## Golden rules

1. There is one true date format: [ISO8601](https://en.wikipedia.org/wiki/ISO_8601)
2. Never delete your originals
3. Cut on demand
4. Embrace the shell

<small>_fin_</small>

{{% /slide %}}
