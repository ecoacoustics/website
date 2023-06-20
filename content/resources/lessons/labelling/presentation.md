---
title: Presentation
layout: "presentation"
draft: false
weight: 2
---

{{% slide type=title %}}

# Sound Recording and Labelling

Callan Alexander - PhD candidate at QUT

{{% /slide %}}
{{% slide %}}

## Recorder settings

### Sample Rates
 - If in doubt, use a higher sample rate. 
 - You can always downsample later. A higher sample rate will ensure greater compatibililty with more projects.
   - Main downside to higher sample rate is storage space, power draw is usually negligible 
  - **44/48kHz preferable and is becoming industry standard for most terrestrial fauna (apart from bats etc.)** 
 - *Ideally only use a lower sample rate if you have very specific requirements, e.g. Acoustic Observatory* 

### Batteries/SD Cards
 - Follow manufacturer guidelines
 - For AA - Energiser Pro Max or Eneloop Pro. Disposables unfortunately last longer than rechargable 
 -  **Always** check and format SD cards prior to deployment. 

{{% /slide %}}
{{% slide %}}

### Deployment Tips

 - [Gaia GPS](https://www.gaiagps.com/) is widely used by off-track hikers and really good for
   marking recorder GPS locations even with 0 mobile reception. Make sure to pre-download the map area if you anticpate having no signal. 
 - Taking photograph of each recorder highly reccomended (and keeping them as far away from paths as possible)
 - Using Gaia + photograph = no recorders lost yet in hundreds of deployments
 - Remember to always check weather and park alerts before **AND** during deployment - you don't want to lose equipment to floods and/or fire

{{% /slide %}}
{{% slide %}}

## Annotation Overview

 -   Why Annotate?
      - This will be mainly linked to your research question, but a few examples are: [call description](https://www.tandfonline.com/doi/full/10.1080/09524622.2021.1941257), [getting species list for an area](https://onlinelibrary.wiley.com/doi/full/10.1002/ece3.8797), and [building and improving models](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.12599)
 -  Important to consider how your annotations will be used prior to commencing
	  - How accurate do  your measurements need to be? For some questions you may need to tag multiple notes with high accuracy, but for other questions a loose box can be sufficient
 -  Multi-species vs single-species  
 -  Whole vocalisation or separate notes?
 - *This will be covered in more detail in the practical*

{{% /slide %}}
{{% slide %}}

## Using Raven

-   Why Raven?
    - **Raven Pro vs Lite** 
    - Biggest disadvantage of Lite is only one annotation column and less measurements
-   **Be careful of focus settings, many cases of people tagging vocalisations that are out of focus**
    - Hanning Window is most commonly used
    -  Focus can vary depending on the recorder but for an hour long file, 2132 is often a good starting point

{{% /slide %}}
{{% slide %}}

### Manual Scanning for Vocalisations of Interest
 -  Can drag multiple hours of data into Raven and page depending on computer specs, or just work with an hour at a time. 
      - ***Do not tag when you are working with multiple files, Raven does not separate the annotations. Rather find a file of interest and tag it seperately*** 
 -  WarbleR - Spectrogram to Pdf Tool useful in some scenarios 

{{% /slide %}}
{{% slide %}}

## Packages to use with Raven

-   WarbleR
-   RRaven
-   Tidyverse
-   AutoHotkey

E.g. Generate pdf spectrogram of multiple files for rapid scanning
Group multiple raven files into one csv file, generate spectrograms for all detections
*Will cover some of this in the practical!* 

{{% /slide %}}
{{% slide %}}

## Useful Autohotkey script

This scripts allows you to use your arrow keys to move left and right.

Note: You will need to download [Autohotkey](https://www.autohotkey.com/) and 
use their screen co-ordinate tool. Replace the click values after 'Right' and 
'Left'* *to correlate with the left and right scrollbar arrows in Raven 
depending on the size of your monitor.*

```text
#NoEnv  ; Recommended for performance and compatibility with future AutoHotkey releases. ; #Warn  ; Enable warnings to assist with
detecting common errors. SendMode Input  ; Recommended for new scripts
due to its superior speed and reliability. SetWorkingDir %A_ScriptDir%
; Ensures a consistent starting directory.

#IfWinActive ahk_class SunAwtFrame Right:: Click, 1824 790 Click, 1824 790 Return

Left:: Click, 235 791 Click, 235 791 Return
```

{{% /slide %}}
{{% slide %}}

## General Useful Resources

-   Apps: [Stewart Sounds App](https://play.google.com/store/apps/details?id=com.mydigitalearth.stewartaustralianbirdcalls&hl=en_AU&gl=US), [Morcome & Stewart App](https://apps.apple.com/au/app/morcombe-stewart-guide/id397979505), [Frog ID](https://www.frogid.net.au/)
-   Web Resources: [Xeno Canto](https://xeno-canto.org/), [eBird](https://ebird.org/home) [Australian Bird Calls Facebook Group](https://www.facebook.com/groups/356176485924043/) [Bioacoustics Stack Exchange](https://bioacoustics.stackexchange.com/)
-   A list of free and paid software available for bioacoustic analyses: https://github.com/rhine3/bioacoustics-software
-   Izotope RX8 - batch noise removal, pretty spectrograms, fine-scale sound editing 
-   Audacity - free noise removal + sound editing

&nbsp;

Go to the [practical](./practical).
{ .align-center }

{{% /slide %}}
