---
title: Practical
weight: 3
---

This is a simple exercise to help you become familiar with changing the window
size of a sound file using Audacity. This will help you to understand how
changing the window size can alter the frequency and temporal resolution of your
spectrograms, and affect how your spectrograms will look visually.

1. Find `20220421T100000+1000_SEQP-Samford-Wet-B_644370.flac` in the 2022
   Ecoacoustics Symposium/SERF Data folder.
2. Open Audacity, and drag the sound file into Audacity to open it.
![](20221206111634.png)
1. We can view the spectrogram of our sound file by accessing the drop down arrow menu, and
   clicking _Spectrogram_.
![](20221206111806.png)
1. You should now see the spectrogram view. Going back to the same drop down menu, we can
   now select _Spectrogram Settings_, which brings up this window:
   ![](20221206112035.png)  
2. Take note of some important information that we should be familiar with by now:
   1. Max Frequency: 11025 Hz. Remember that Max Frequency is half of the sampling frequency. Therefore,
      this file was recorded with a sampling frequency of 22050 Hz. 
   2. Window size: 2048
3. Lets try to figure out what the temporal and frequency resolution is for this
   file, with these default settings. Refer back to the Presentation if you are
   unsure how to work these out.
   1. TR = Window size / SR
   2. FR = SR / window size
4. Now, lets change the window size to 256. Click on the _Window size_ input
   box, and select the new value.
   ![](20221206113827.png)  
5. Calculate the new temporal and frequency resolution values - did they
   increase or decrease?
6. What about the spectrogram, does it look different?

Feel free to keep playing around with the values, and understanding the effects.
If you are going to be using spectrograms in your research, it is a good idea to
start by adjusting the window length and determining the most appropriate
setting for your particular use. For example, if you are making measurements or
annotations based on a spectrogram, you could be missing temporal content or
spectral content of your signal of interest, if the window length is not
appropriate for your use case. And remember, the temporal and spectral
resolution is related to the sample rate of your audio file. So don't forget to
check and adjust the window length if necessary, when you are dealing with files
that have different sample rates.
