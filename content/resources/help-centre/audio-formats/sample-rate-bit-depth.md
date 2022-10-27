---
title: Sample rate and bit depth
---

This guide serves as a simple introduction to the terms sample rate and bit
depth. This can help you to understand the potential limitations of files you
are working with. See also (best practices section) for help on setting up your
recording devices. 

When we place acoustic monitoring devices in the field, the audio information we
capture is stored in a digital audio format. As a result, analog sound
characteristics such as frequency and amplitude are converted and stored in a
format that computers can understand. Put simply, sound waves are recorded by
taking a series of measurements, known as samples. Taking a large number of
these samples each second, and storing this information as binary data, allows
the original sound wave to be reconstructed. How accurately the sounds recorded
can be reconstructed depends primarily on two key concepts, known as sample rate
and bit depth.

## Sample rate
Sample rate is a measure of how many samples are collected per second, and is
described in Hz (cycles per second) or kHz (thousand cycles per second). A
sample rate of 22 050 Hz (or 22.05 kHz) represents 22 050 samples recorded per
second. It is important to check the sample rate of files you are dealing with,
as it affects the frequency spectrum that can be accurately represented. This is
known as the Nyquist-Shannon theorem, which states that the sample rate must
exceed the desired signals highest frequency by at least a factor of two. For
example, a sampling rate of 22.05 kHz will only be able to  reproduce
frequencies that are equal to or less than around 11 kHz. Typically, researchers
are interested in sounds with frequencies produced up to 20 kHz, which is the
limit of human hearing. In this case, a sample rate of 44.1 kHz or 48 kHz is
suitable, and the most commonly used sampling rates in ecoacoustics. However, if
you wish to also capture sounds in the ultrasonic range (>20 kHz), a higher
sample rate is required. 

## Bit depth
As previously mentioned, when a recording device takes samples, the information
is stored in binary data. This binary data is known as 'bits', and as a result,
bit depth refers to how much information can be stored. Higher bit depths result
in a greater number of possible amplitude values that can be recorded within
each sample. In other words, higher bit depths will provide better quality audio
recordings, by improving the dynamic range of a signal, and reducing the noise
floor (digital white noise). However, recordings with higher bit depths will
also have a larger file size, and the additional information stored may be
redundant depending on your use case. Files used in ecoacoustics will typically
be recorded in 16 bit or 24 bit, which is good for most use cases. Files that
are recorded in 8 bit represent a lower quality sound reproduction, and can
contain higher amounts of unwanted noise, which is something to consider if you
need to work with these files.  











