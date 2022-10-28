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

Using the method you prefer (using command lines or manually) create folders to store our results. I like to have a folder named after the project I am working on (`EcoacousticsSymposium2022` for example) and put them directly in the `C:` drive in my computer. and have one folder called: `something-to-identify-the-data-data` and one `something-to-identify-the-results-output`. Like this


![folder-names](./folder-names.png)



Then, inside the `something-to-identify-the-results-output` I have folders that link back to my files, so I know exactly where each result came from, like this



![data-output-folder](./data-output-folders.png)

## Calculating AI in 2-hour recordings

So, AP runs in command line. This means we have tell the computer everything we want it to do by writing (instead of clicking how we usually do in programs that have a user interface). I'll give you the command line for the first recording example, we will run it and then you will do it for the second (and as many as you want after that).

The command is:

`.\AnalysisPrograms.exe audio2csv "C:\workshop-data\20220421T100000+1000_SEQP-Samford-Wet-B_644370.flac" ".\ConfigFiles\Towsey.Acoustic.yml" "C:\indices-output\20220421T100000+1000_SEQP-Samford-Wet-B_644370"`

Broken down into parts"

- hey, run this executable `.\AnalysisPrograms.exe` (hence `.exe`) 
- and the function `audio2csv` (This function means we are transforming an audio file in a csv with acoustic indices) 
- to analyse this recording `"C:\workshop-data\20220421T100000+1000_SEQP-Samford-Wet-B_644370.flac"` (remember that for the recording you have to tell exactly where it is located - copy the full path to the recording file) 
- using this configuration file `".\ConfigFiles\Towsey.Acoustic.yml"`
- and save the output here `"C:\indices-output\20220421T100000+1000_SEQP-Samford-Wet-B_644370"`

Now all the quotation marks, spaces, slashes, etc are important and should be there - if something went wrong double and triple check because probably there's something missing that you didn't even realise.



Now run this command in your computer and check if the results are there. If they are, 

## More resources
