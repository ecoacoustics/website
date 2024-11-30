---
title: Requirements
weight: 1
---

Requirements for the Make Your Own Call Recogniser 2024 Workshop

## Dataset

You will need a "search" dataset of unlabelled longer recordings totalling between 100 (if possible) 
and 1000 hours. **This must be uploaded to [Ecosounds](https://www.ecosounds.org) 
ahead of the workshop**. Instructions for this can be found here 
[Uploading Audio to Ecosounds]({{< ref "../../ecosounds/uploading" >}})

We will pre-process this audio for use in the workshop, so please ensure it's uploaded 
before November 28 2024. 

## Labelled examples

In the workshop you will build a call recogniser using just a few short labelled 
examples. If your search dataset is likely to have plenty of examples of your target 
species, then just having one or two labelled examples is enough. If your search 
dataset is likely to have very few or maybe no occurrences of the target species, 
then you should ideally bring a few more, say 10-20 labelled examples.

These labelled examples should be in short audio files, between 5 and around 20 seconds long. 

If your labelled examples are in longer files, you can use free software 
like [Audacity](https://www.audacityteam.org/) 
or [Raven Lite](https://www.ravensoundsoftware.com/software/raven-lite/)

## Google account

We will be using [Google Colab](https://colab.research.google.com/) python notebook environment. 
For this you will need a google account. You can create a free account for the workshop. 

## Open-sourcing your recogniser

We hope that if you are successful in creating a working recogniser you will make 
your recogniser available under an open-source licence (Apache 2.0 
https://opensource.org/licenses/Apache-2.0) so that others may use it, and for the 
recogniser to be published in our registry: https://openecoacoustics.org/resources/registry/


## FAQs

Q. Can I use ultrasonic data
A. There are some extra steps to make the process work for ultrasonic data, 
which are out of scope of the workshop. If you are are working with ultrasonic 
recordings, you can work with the demo data for the workshop and then adapt the 
process for ultrasonic data later.

Q. I don't have 100 hours of recordings, what can I do?
A. 100 hours minimum is not really important. If you don't have that much, 
just work with what you have!

Q. What if I am late uploading my recordings to Ecosounds. 
A. We will do our best to get the preprocessing done in time even if you miss
the deadline. Any doubts, contact the organisers. 
