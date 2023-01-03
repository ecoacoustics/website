---
title: Practical
weight: 3
---

This is a simple exercise to help you become familiar with changing the window
size of a sound file using Audacity. This will help you to understand how
changing the window size can alter the frequency and temporal resolution of your
spectrograms, and affect how your spectrograms will look visually.

1. Find `20220421T100000+1000_SEQP-Samford-Wet-B_644370.flac` in the `2022
   Ecoacoustics Symposium/SERF Data` folder.
2. Open Audacity, and drag the sound file into Audacity to open it.
   ![Sound file in Audacity](20221206111634.png)
3. At the top-left of each track, there is a drop-down menu. It's represented by
   a ▼ icon. Click on it, and then click on _Spectrogram_ to switch the track view
   to the spectrogram mode.
   ![Drop down menu view of sound file](20221206111806.png)
4. You should now see the spectrogram view. Going back to the same drop down menu, we can
   now select _Spectrogram Settings_, which brings up the _spectrogram settings_ window:
   ![Spectrogram settings view](20221206112035.png)
5. Inside _Spectrogram Settings_, you can adjust the scale, colour, and
   algorithm settings for the spectrogram view. Take note of the scale settings,
   Min Frequency and Max Frequency (Hz). Adjusting these values will change the
   y axis of the spectrogram view, and is similar to the "vertical zoom" in
   Raven.
    1. We recommend starting with a Max Frequency that is equal to the Nyquist
       frequency of your recordings. Remember that the Nyquist Frequency is half
       of the sampling frequency. This file was recorded with a sampling
       frequency of 22050 Hz, and therefore has a Nyquist Frequency of 11025 Hz.
6. Moving on to the algorithm settings, take particular note of the window size.
   This is the number of samples that are used to calculate the spectrogram.
   Recall from the presentation that temporal and frequency resolution of the
   spectrogram is related to the window size, which results in a trade-off
   between frequency versus temporal resolution. The larger the window size, the
   more samples are used to calculate the spectrogram, and the more frequency
   resolution you will have. However, the smaller the window size, the more
   temporal resolution you will have.
7. Question: Set the window length value to 2048. What is the temporal
   and frequency resolution for this file at this setting? See the following
   formulas for help, or refer back to the [presentation]({{% relref
   "presentation" %}}) for more information.

{{% katex display %}} Temporal\:resolution = \frac{Window\:size}{Sampling\:rate} {{% /katex %}}
{{% katex display %}} Frequency\:resolution = \frac{Sampling\:rate}{Window\:size} {{% /katex %}}

<details>
    <summary>Answer:</summary>
Temporal resolution = 0.093 seconds, Frequency resolution = 10.767 Hz.
</details>

8. Now, change the window size to 256. Click on the _Window size_ input
   box, and select the new value.
   ![Changing window size in spectrogram settings view](20221206113827.png)
9. Question: Calculate the new temporal and frequency resolution values - did they
   increase or decrease?

<details>
    <summary>Answer:</summary>
Temporal resolution = 0.011 seconds, Frequency resolution = 86.133 Hz.

With the smaller window size, we have a higher temporal resolution (the
seconds value decreased), but a lower frequency resolution (the frequency
value for each bin has increased).

</details>

10. What about the spectrogram, does it look different?

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

<!--<script type="text/javascript"
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script> -->

{{% katex %}}
int\_{a}^{b} x^2 dx
{{% /katex %}}

hello

{{% katex %}}
f(x) = \int\_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
{{% /katex %}}
