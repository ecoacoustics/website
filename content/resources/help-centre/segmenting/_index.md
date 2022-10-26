---
title: Segmenting audio files
---

In this section we will cover the topic of segmenting audio files. Segmenting
audio files (also known as cutting, slicing, or splitting), is the process of
segmenting an audio file into two or more smaller pieces. 

## Why?

There are a few reasons you might wish to do this. If you are working with
Ecoacoustic data, the most common reason is that acoustic indices are calculated
using one minute intervals. Fortunately, the AP tool can handle segmentation
automatically, and return values for each minute of a supplied audio file.
However, if you are using another tool to calculate indices, such as the
seewave package in R, you may need to segment your file into one minute pieces.
Another reason you may need to segment your files is if they are particularly
large, as some programs are limited by the size of audio files they may open. If
you are using Raven, it will not be able to open sound files larger than 2 GB.
Segmentation is also useful if you are using passive acoustic monitoring but are
interested in a bioacoustic question. In which case, it may be easier to work
with smaller files. 

## How?
The pages listed below will cover the most common tools available to segment
your audio files. 
