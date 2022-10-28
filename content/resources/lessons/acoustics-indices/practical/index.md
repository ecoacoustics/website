---
title: Practical
draft: true
weight: 3
---
*Full disclosure: the person writing this (Marina Scarpelli) is an ecologist so I'll try to "translate" some of the computer language into everyday words. If you are used to programming language this might be a bit tedious, if you are a computer scientist or highly educated on the topic, you might not be very happy with this. I am sorry in advance if this is offensive to anyone, I am just trying to make it more accessible to people that have less contact with programming languages :)*

## Open the Windows Terminal in your computer

On the search tab you can type `Terminal` and one of the options should be Powershell 7

![finding-terminal](./finding-terminal.png)

## Changing the directory to where AP.exe is installed

Find where AP.exe is installed on your computer and copy the folder path (the full address of that folder in your computer). For example, for me it is in: `C:\AP`
![ap-path](./AP-path.PNG)

We copy this address:

![ap-copying-path](./AP-copying-path.png)

When I open my terminal, it is in one directory (folder) which os not where AP is installed. 

![open-terminal](./open-pwsh.PNG)

We want to work with AP and I have to inform my computer that, by telling it the "address" of the folder where AP is installed. We do this by using the command `cd` followed by the folder path 

![cd-ap](./cd-ap.PNG)

and pressing enter. The powershell screen should be like this now 

![cd-ap-done](./cd-ap-done.PNG)

Now we are on the AP folder and we can run the analysis. If you want to explore more of what AP can do, get help, etc, [this](https://ap.qut.ecoacoustics.info/tutorials/01-usingap/practical?tabs=windows) is a great resource!

## First, let's get organised

When dealing with lot's of data, from different locations etc it is very easy to get lost - and lose data too. So I like to create folders and organise myself before starting.

Using the method you prefer (command lines or manually) create folders to store our results. I like to have a folder named after the project I am working on (`EcoacousticsSymposium2022` for example) and put them directly in the `C:` drive in my computer. Then I have the data inside this folder and have one folder called: `something-to-identify-the-results-output`. Like this


![folder-names](./folder-names.png)


Then, inside the `something-to-identify-the-results-output` I have folders that link back to my files, so I know exactly where each result came from, like this



![data-output-folder](./data-output-folders.png)

## Calculating AI in 2-hour recordings
Now we will finally calculate acoustic indices!

So, AP runs in command line. This means we have tell the computer everything we want it to do by writing (instead of clicking how we usually do in programs that have a user interface). I'll give you the command line for the first recording example, we will run it and then you will do it for the second (and as many as you want after that).

The command is:

`.\AnalysisPrograms.exe audio2csv "C:\EcoacousticsSymposium2022\20220421T100000+1000_SEQP-Samford-Wet-B_644370.flac" ".\ConfigFiles\Towsey.Acoustic.yml" "C:\EcoacousticsSymposium2022\indices-output\20220421T100000+1000_SEQP-Samford-Wet-B_644370"`

Broken down into parts"

- hey, run this executable `.\AnalysisPrograms.exe` (hence `.exe`) 
- and the function `audio2csv` (This function means we are transforming an audio file in a csv with acoustic indices) 
- to analyse this recording `"C:\workshop-data\20220421T100000+1000_SEQP-Samford-Wet-B_644370.flac"` (remember that for the recording you have to tell exactly where it is located - copy the full path to the recording file) 
- using this configuration file `".\ConfigFiles\Towsey.Acoustic.yml"` (the one indicating the configuration for the acoustic indices: which ones should be calculated, the frequency bands, etc et)
- and save the output here `"C:\indices-output\20220421T100000+1000_SEQP-Samford-Wet-B_644370"`

Now **all** the quotation marks, spaces, slashes, etc **are important and should be there** - if something went wrong double and triple check because there's probably something missing that you didn't even realise.

And it will look like this in your terminal

![terminal-command](./terminal-command.PNG)

Now run this command in your computer and it will look something like that

![running-ap](./running-ap.PNG)


and when it's done it will look like this

![ap-done](./ap-done.PNG)


check if the results are in the output folder. It should look like this

![output-folder](./output-folder.PNG)

AP calculates acoustic indices for each 1 minute of recording. So, the recordings we provided have 2 hours (120 minutes) and therefore we should have 120 values for each acoustic index calculated. These results will be in `.csv` files and `.png` files.

- `.csv` files are the ones with the actual data that you would use in statistical tests, analysis etc. The `.csv` files indicating individual indices in the filenames - like these

![spectral-indices](./spectral-indices.PNG)

are what we call spectral indices results. They have the values for each one of the calculated indices per minutes (in the rows of the spreadsheet) and frequency bins (the columns of the spreadsheet). The default from the configuration file (remember the `".\ConfigFiles\Towsey.Acoustic.yml"`) is a window of 512 frames (we split the recording in the frequency dimension in 512 parts), resulting in 256 elements (frequency bins). If you open your file called `20220421T100000+1000_SEQP-Samford-Wet-B_644370__Towsey.Acoustic.ACI.csv` for example, you'll see that the spreadsheet has 120 rows and 256 columns, representing the full spectrum of the recording.

If you're not interested in the acoustic indices value for each frequency bin, but you want a summary of the recording, with, let's say, one value of index per minute (the most commonly used resolution) you'll find the results in the file `20220421T100000+1000_SEQP-Samford-Wet-B_644370__Towsey.Acoustic.Indices.csv`. 

![summary-indices](./summary-indices.PNG)

This is what we call summary indices. In this file you'll find all the acoustic indices values calculated for every minute. Besides, you'll have a column called `FileName` indicating the name of the file used to calculate these indices (if you have thousands of files and you merge them, you'll always know where that value came from); and two columns indicating the minute within your recording that corresponds to that row: `ResultStartSeconds` tells you in which second that minute starts (so, 120 would be indicating that I can go to the second 120 in my recording and count 60 second from there and that corresponds to that result) and `ResultMinute` that indicates the corresponding minute for that row. In this way, you can always know exactly how to localise the results in your recording, so if you have something weird going on or something you need to check it is very easy.


Lastly, we have the `.png` files, which are images. AP creates images for most the individual indices + the famous False-Colour Spectrograms that are a combination of acoustic indices known to represent biodiversity and noise well in different environments.
The individual files are black and white, but they can be very helpful to identify features in the recording. So, if you know that ACI, for example, is very good to detect the birds in the environment you're interested, you can check the file `....ACI.png` and see if you have lot's of activity, like this

![ACI-active](./20220421T160000%2B1000_SEQP-Samford-Wet-B_644347__ACI.png)

or not, like this

![ACI-quiet](./20220421T140000%2B1000_SEQP-Samford-Wet-B_644351__ACI.png)

Alternatively, you might be interested in looking into the False-Colour Spetrograms (FCS) and how the combination of indices is looking in your recordings, how well they are representing biophony, geophony and/or technophony. The files with the FCS are the ones ending in `_2Maps.png` or `_ACI-ENT-EVN.png` (the indices usually used to represent biophony) and `_BGN-PMN-SPT.png` (the indices that usually better represent noise).

Now, if you have the time, try to run the analysis on a different sound file (or all of them) to practice your programming skills ;)

Thank you and I hope this has been useful to start clarifying the world of acoustic indices and soundscape analysis.

## More resources

- If you want to know more about the different types of indices calculated by AP, the default configurations etc see [this](https://eprints.qut.edu.au/110634/) file.
- If you're interested in the code, issues and contributing to AP.exe, find out GitHub [here](https://github.com/QutEcoacoustics/audio-analysis)
- If you use AP (and want more information on the program, etc) please cite us as found [here](https://ap.qut.ecoacoustics.info/)
