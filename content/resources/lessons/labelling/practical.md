---
title: Practical
draft: false
weight: 3
---

## Single Species Annotation
    
 1. Open Raven and import powerfulowl.wav 
     - Check if your laptop can handle a full hour
     - If not, page the file down into a more manageable size
 2. Overview of Spectrogram Settings 
	 - if your vocalisations aren't in focus, all your measurements will be off!
3. Annotation Tables + Efficient Tagging
4. Test Saving and Exporting Annotations

## Multi-species Annotation

 1. Load 20220421T120000+1000_SEQP-Samford-Wet-B_644366.flac (second file in the 'Shared Data Folder' in Raven
 2.  What is your question? What are you annotating for?
 3. Dealing with multiple species
      - Overlapping vocalisations
      - Noisy/faint vocalisations
      - Multiple vocalisations from the same species

## Combining Annotations and Generating Images 

 - Optional - Open R Studio
 - New Script - save in same directory as your audio files. 
 - For the (X, X) after flim = c, replace the X values with your desired spectrogram frequency
 - So for example, flim = c(0 , 2 ) will generate spectrograms showing from 0kHz to 2kHz 
 
 **This script will combine all Raven .txt files in a directory into a single csv file and list the .wav files that they came from. It will also generate .jpg files for all of your annotations.** 

> #load packages
> 
> library (warbleR) 
> library (Rraven)
> 
>  #copy script into folder of csv files and audio files, set wd to source file location
> 
> setwd(dirname(getActiveDocumentContext()$path)) 
> 
> #check if it worked
> 
> getwd()  
> 
> #Generate Spectrograms and Combine all Raven Annotations into one .csv file 
> 
> list.files (pattern = "\\.txt$")
> 
> data <- imp_raven(sound.file.col = "End.File", all.data = TRUE,
> name.from.file = TRUE, ext.case = "upper", warbler.format = TRUE)
> 
> str(data)
> 
> write.csv(data, "data.csv", row.names = FALSE)
> 
> spectrograms(data, wl = 2132, flim  = c( X, X ), it = "jpeg", res = 100,
> osci = FALSE, ovlp = 90, mar = 0.1, fast.spec = TRUE)
