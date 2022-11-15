---
title: Practical
draft: false
weight: 3
---

{{% hint info %}}
Difficulty: suitable for beginners
{{% /hint %}}


## Setup

Follow the instructions in the [Requirements](./../requirements) document.

## Open a Terminal

{{% include "../../shared/open-terminal-Symposium.md" %}}

## Terminal use

{{% include "../../shared/basic-terminal-use.md" %}}

## Check where Analysis Programs (AP.exe) is installed

If you followed the install instructions for installing AP, you should be 
able to type `AP` and press <kbd>Enter</kbd> in the Terminal.

If successful it should look like this:

![check-ap-installed](./check-ap-installed.png)

If successful, move to the next section. Otherwise, we'll need to find where
AP is installed and copy the path to the program.

To do this: 

 - Find where `AnalysisPrograms.exe is installed on your computer
 - Copy the folder path (the full address of that folder in your computer) by 
   **holding <kbd>Shift</kbd> and** right clicking on `AnalysisPrograms.exe`, then
   choose _Copy as path_.

For example, AP is normally installed to  `C:\Users\%USERNAME%\AP`.

![ap-path](./ap-copy-path.png)

You should end up with a path like `"C:\Users\Anthony\AP\AnalysisPrograms.exe"`.
Paste this somewhere for use later (like in Notepad).

Now, when we want to work with AP we can tell the computer the "address" 
of the program so it can run it.

## First, let's get organised

When dealing with lot's of data from different locations, it is very easy to get
lost---and lose data too. So I like to create folders and organise myself before starting.

Using the method you preferred, create folders to store our results. I like to
have a folder named after the project I am working on 
(`2022 Ecoacoustics Symposium` for example). Today we're working in a folder 
that is directly in the `C:` drive in my computer for simplicity.

Inside the symposium folder, we have our data which we downloaded. Then we'll
add one folder called with an identifying name like `indices-output`. Like this:


![folder-names](./folder-names.png)


Inside my `indices-output` folder, I'll always make sure each recording has it's own folder 
for its results. This makes it easy to link results back to the original files.

For example, using the data for today's demo, I'd create folders like this:

| Audio file                                                    | Output folder                                          |
| ------------------------------------------------------------- | ------------------------------------------------------ |
| SERF Data\20220421T220000+1000_SEQP-Samford-Wet-B_644377.flac | indices\20220421T220000+1000_SEQP-Samford-Wet-B_644377 |
| SERF Data\20220421T100000+1000_SEQP-Samford-Wet-B_644370.flac | indices\20220421T100000+1000_SEQP-Samford-Wet-B_644370 |
| SERF Data\20220421T120000+1000_SEQP-Samford-Wet-B_644366.flac | indices\20220421T120000+1000_SEQP-Samford-Wet-B_644366 |
| SERF Data\20220421T140000+1000_SEQP-Samford-Wet-B_644351.flac | indices\20220421T140000+1000_SEQP-Samford-Wet-B_644351 |
| SERF Data\20220421T160000+1000_SEQP-Samford-Wet-B_644347.flac | indices\20220421T160000+1000_SEQP-Samford-Wet-B_644347 |
| SERF Data\20220421T180000+1000_SEQP-Samford-Wet-B_644363.flac | indices\20220421T180000+1000_SEQP-Samford-Wet-B_644363 |
| SERF Data\20220421T200000+1000_SEQP-Samford-Wet-B_644357.flac | indices\20220421T200000+1000_SEQP-Samford-Wet-B_644357 |


## Calculating Acoustic Indices for a recording

Now we will finally calculate acoustic indices!

So, AP is a _command line_ program. This means we have tell the computer everything we
want it to do by writing it (instead of clicking how we usually do in programs 
that have a graphical user interface). We'll give you the command line for the 
first recording example, we will run it and then you will do it for the second 
(and as many as you want after that).

The command is:

```powershell
> AP audio2csv "C:\2022 Ecoacoustics Symposium\SERF Data\20220421T100000+1000_SEQP-Samford-Wet-B_644370.flac" "Towsey.Acoustic.yml" "C:\2022 Ecoacoustics Symposium\indices-output\20220421T100000+1000_SEQP-Samford-Wet-B_644370"
```

{{% hint info %}}

If you had to do the _find where AP is installed_ step from above, now is the 
time to use that path you copied and saved. Change the above command to:

```powershell
# ⬇️--- YOUR PATH HERE -------------------⬇️
> . "C:\Users\Anthony\AP\AnalysisPrograms.exe" audio2csv "C:\2022 Ecoacoustics Symposium\20220421T100000+1000_SEQP-Samford-Wet-B_644370.flac" "Towsey.Acoustic.yml" "C:\2022 Ecoacoustics Symposium\indices-output\20220421T100000+1000_SEQP-Samford-Wet-B_644370"
```

{{% /hint %}}

We'll explain the above command by breaking it down:

- hey, run this executable program named `AP`
- and the sub-command `audio2csv`
  - This name `audio2csv` means we are transforming an audio file in a CSV with acoustic indices
- analyse this recording `"C:\2022 Ecoacoustics Symposium\SERF Data\20220421T100000+1000_SEQP-Samford-Wet-B_644370.flac"`
 (remember that for the recording you have to tell exactly where it is located - copy the full path to the recording file) 
- using this configuration file `"Towsey.Acoustic.yml"`
  (the one indicating the configuration for the acoustic indices: which ones should be calculated, the frequency bands, etc et)
- and save the output here `"C:\2022 Ecoacoustics Symposium\indices-output\20220421T100000+1000_SEQP-Samford-Wet-B_644370"`

Now **all** the quotation marks, spaces, slashes, etc **are important and should be
there**---if something went wrong double and triple check because there's
probably something missing that you didn't even realise.

Copy the command and paste it into the terminal. It will look like this in your terminal:

![terminal-command](./terminal-command.PNG)

{{% hint info %}}
You can paste a command with <kbd>Ctrl+Shift+V</kbd> or by right-clicking on the
terminal surface.
{{% /hint %}}

Now press <kbd>Enter</kbd> to run this command and it will look something like this:

![running-ap](./running-ap.PNG)


The command will take about two to three minutes to run. When it's done it will
look like this:

![ap-done](./ap-done.PNG)


Check if the results are in the output folder. It should look like this:

![output-folder](./output-folder.PNG)

The results should be in the `C:\2022 Ecoacoustics Symposium\indices-output\20220421T100000+1000_SEQP-Samford-Wet-B_644370\Towsey.Acoustic` folder.

AP calculates acoustic indices for each one-minute of the recording. The
recordings we provided are two hours (120 minutes) long and therefore we should
have 120 values for each acoustic index calculated. These results will be in
the  `.csv` files and `.png` files.

The CSV files have the actual data that you would use in statistical tests and 
any analysis. The CSV files that have a three letter capitalised code in them are
spectral index files. They have names like:

- <code>20220421T100000+1000_SEQP-Samford-Wet-B_644370__Towsey.Acoustic.<mark>EVN</mark>.csv</code>
- <code>20220421T100000+1000_SEQP-Samford-Wet-B_644370__Towsey.Acoustic.<mark>OSC</mark>.csv</code>
- <code>20220421T100000+1000_SEQP-Samford-Wet-B_644370__Towsey.Acoustic.<mark>PMN</mark>.csv</code>
- <code>20220421T100000+1000_SEQP-Samford-Wet-B_644370__Towsey.Acoustic.<mark>RHZ</mark>.csv</code>
- <code>20220421T100000+1000_SEQP-Samford-Wet-B_644370__Towsey.Acoustic.<mark>RNG</mark>.csv</code>
- <code>20220421T100000+1000_SEQP-Samford-Wet-B_644370__Towsey.Acoustic.<mark>RPS</mark>.csv</code>
- <code>20220421T100000+1000_SEQP-Samford-Wet-B_644370__Towsey.Acoustic.<mark>RVT</mark>.csv</code>
- <code>20220421T100000+1000_SEQP-Samford-Wet-B_644370__Towsey.Acoustic.<mark>SPT</mark>.csv</code>
- <code>20220421T100000+1000_SEQP-Samford-Wet-B_644370__Towsey.Acoustic.<mark>SUM</mark>.csv</code>
- <code>20220421T100000+1000_SEQP-Samford-Wet-B_644370__Towsey.Acoustic.<mark>ACI</mark>.csv</code>
- <code>20220421T100000+1000_SEQP-Samford-Wet-B_644370__Towsey.Acoustic.<mark>BGN</mark>.csv</code>
- <code>20220421T100000+1000_SEQP-Samford-Wet-B_644370__Towsey.Acoustic.<mark>CVR</mark>.csv</code>
- <code>20220421T100000+1000_SEQP-Samford-Wet-B_644370__Towsey.Acoustic.<mark>DIF</mark>.csv</code>
- <code>20220421T100000+1000_SEQP-Samford-Wet-B_644370__Towsey.Acoustic.<mark>ENT</mark>.csv</code>


They have the values for each one of the calculated indices per minutes in the
rows of the spreadsheet, and frequency bins in the columns of the spreadsheet.
The default from the configuration file (remember the `"Towsey.Acoustic.yml"`) 
is a window of 512 frames (we take 512 samples from the audio to generate our
Fourier transform), resulting in 256 elements (frequency bins). If you open your
file called `20220421T100000+1000_SEQP-Samford-Wet-B_644370__Towsey.Acoustic.ACI.csv`,
you'll see that the spreadsheet has 120 rows and 256 columns, representing the
full spectrum of the recording.

If you're not interested in the acoustic indices value for each frequency bin,
but you want a summary of the recording, with, let's say, one value of index pe
 minute (the most commonly used resolution) you'll find the results in the file
 
 - <code>20220421T100000+1000_SEQP-Samford-Wet-B_644370__Towsey.Acoustic.<mark>Indices</mark>.csv</code> 


This is what we call summary indices. Most other research groups just call these
_acoustic indices_, but since we have two types of acoustic indices (_spectral_
and _summary_) we need two different names.

 In this file you'll find all the acoustic indices values calculated for every
 minute. You'll also have a column called `FileName` indicating the name of the
 file used to calculate these indices (if you have thousands of files and you
 merge them, you'll always know where that value came from); and two columns
 indicating the minute within your recording that corresponds to that row:
 
- `ResultStartSeconds` tells you in which second that minute starts 
  (so, a value of `120` would be indicating that I can seek 120 seconds into my 
  recording and count 60 seconds from there and that corresponds to that result)
- and `ResultMinute` that indicates the corresponding minute for that row.

In this way, you can always know exactly how to localise the results in your
recording, so if you have something weird going on or something you need to check
it is very easy.

Lastly, we have the PNG (`.png`) image files. AP creates images for most the
individual indices as well as for the spectral indices, and combinations of spectral
indices. The combinations are known as false-colour spectrograms.

The individual spectral indices are black and white, but they can be very helpful
to identify features in the recording. So, if you know that ACI, for example,
is very good to detect the birds in the environment you're interested, you can
check the file with the `ACI.png` suffix and see if you have lot's of activity, like this

![ACI-active](./20220421T160000%2B1000_SEQP-Samford-Wet-B_644347__ACI.png)

or, a file with less activity, like this

![ACI-quiet](./20220421T140000%2B1000_SEQP-Samford-Wet-B_644351__ACI.png)

Alternatively, you might be interested in looking into the False-Colour Spetrograms
(FCS) and how the combination of indices is looking in your recordings, how well
they are representing biophony, geophony and/or technophony. The files with the 
FCS are the ones with the suffixes `_2Maps.png` or `_ACI-ENT-EVN.png`
(the indices usually used to represent biophony) and `_BGN-PMN-SPT.png`
(the indices that usually better represent noise).

Now, if you have the time, try to run the analysis on a different sound file
(or all of them) to practice your programming skills

Thank you and I hope this has been useful to start clarifying the world of
acoustic indices and soundscape analysis.

## More resources

- There is an extened demo for using AP at <https://ap.qut.ecoacoustics.info/tutorials/01-usingap/practical>
- If you want to know more about the different types of indices calculated by AP, the default configurations etc see [this](https://eprints.qut.edu.au/110634/) file.
- If you're interested in the code, issues and contributing to AP.exe, find out GitHub [here](https://github.com/QutEcoacoustics/audio-analysis)
- If you use AP (and want more information on the program, etc) please cite us as found [here](https://ap.qut.ecoacoustics.info/)
