---
title: Presentation
layout: "presentation"
draft: false
weight: 2
---

{{% slide type=title %}}

# Sound Basics

Dr Michael Towsey

{{% row %}}

![deployed sensor](./image3.jpeg)
{ .image-fill }

![spectrogram](./image2.png)
{.image-100-percent style="height:100%" }
{{% /row %}}

{{% /slide %}}
{{% slide %}}
<object type="image/svg+xml" style="width: 100%; margin-top: 1em; margin-bottom: -2em;" data="./flow.drawio.svg"></object>

## Five Key Concepts

1. Decibels
2. Clipping & gain
3. ADC: Sample rate & bit depth
4. Fast Fourier Transform (FFT)
5. Spectrograms: time/frequency trade-off

{{% /slide %}}
{{% slide %}}

## 1: Decibels

<object type="image/svg+xml" style="width: 100%;" data="./flow-decibels.drawio.svg"></object>

<div style="margin-left: 250px;display: inline-grid; grid-template-columns:390px 270px 1fr 400px 1fr;font-size: 80%;text-align: center;">
Sound pressure level (spl)  
(Pascals)

Volts  
(V)

Signed 16 bit integer  
(-32768 to +32767)

&nbsp;

Real value  
(-1.00 to +1.00)

</div>
<div style="display: inline-grid; grid-template-columns: 250px 390px 1010px 1fr;">
&nbsp;

$ dB(spl) = 30 dB$

$ db(V) = 35 dB$

$ db = -70dB $

</div>

> Notes:
> - We capture sound waves using a microphone. The microphone is plugged into a
>  receiver, which performs an analogue to digital conversion.
> - The digital signal is captured, which we typically store in a WAVE file.
> - We can then use audio software to display this waveform. The waveform will
>   have lots of values (samples) that quantize (measure) the amplitude of the
>   signal.
> - Amplitude of a sound wave corresponds to air pressure, and is measured in
>  Pascals (Pa)
> - We can represent these amplitudes (intensity) using decibels.

{{% /slide %}}
{{% slide %}}
## Decibels

**Decibels are always the log of a ratio**
{.align-center .emphasize}

$$
10 \log_{10}{\left( \frac{\text{Power}}{\text{Reference Power}}  \right)}
$$

$$
20 \log_{10}{\left( \frac{\text{Amplitude}}{\text{Reference Amplitude}}  \right)}
$$

{{% fragment class="" %}}

| dB(spl)                       | dB                             |
| ----------------------------- | ------------------------------ |
| reference = 0.00002 Pa = 0 dB | reference = 1.00 = 0 dB        |
| quiet room = 30 dB            | bird call ≈ -50 dB             |
| conversation = 60 dB          | cold morning ≈ -80 dB          |
| long-term damage = 85 dB      | least sound = 1/32767 = -90 dB |

{{% /fragment %}}

> Notes:
> - Decibels are always the log of a ratio.
> - We typically scale based on a reference value of 0.00002 Pa = 0 dB, which is
>  considered to be the softest sound level a human ear can detect / near total
>  silence. For more information on sound and the decibel scale, see
>  [here](https://www.epd.gov.hk/epd/noise_education/web/text/ENG_EPD_HTML/m1/intro_5.html#:~:text=Human%20ear%20can%20perceive%20a,called%20the%20Threshold%20of%20Hearing).
> - Some examples of common dB levels include a quiet room at 30 dB, or a conversation at 60 dB.
> - Because dB uses a logarithmic scale, 60 dB is 1000 times more powerful than 30
>  dB. Every 10 dB increase increases the power of a signal by a factor of 10.

{{% /slide %}}
{{% slide %}}

## 2: Clipping and Gain

<object type="image/svg+xml" style="width: 70%;" data="./flow-decibels.drawio.svg"></object>
<object type="image/svg+xml" style="width: 70%;" data="./clipping-and-gain.drawio.svg"></object>
{.align-center}

{{% fragment class="" %}}

-   **Rule 1**: Do not increase gain if it clips sounds of interest!
-   **Rule 2**: Use the factory settings!!
    {{% /fragment %}}

> Notes:
> - Clipping occurs when a signal's amplitude is too high for your recording system
> - If you see a spectrogram that looks like this, then you have
>   clipping (you can see it in both the waveform view and in the spectrogram view).
> - We can adjust the gain (on our amplifier / recording device) to prevent
>   clipping.
> - High levels of gain might be important for quiet locations or environments, to
>   help detect softer sounds.
> - But in a noisier environment you risk clipping. For example due to
>   environmental noise (wind) or due to a cockatoo screaming next to your
>   recording device.
> - Do not increase the gain if it clips your sounds of interest!
> - Its also possible to do a gain trial, before you commit to placing all of your
>   sensors.

{{% /slide %}}
{{% slide %}}

## 3: Analogue to digital conversion

<object type="image/svg+xml" style="width: 70%;" data="./flow-decibels.drawio.svg"></object>
<object type="image/svg+xml" style="width: 100%;margin-top: -100px" data="./analogue-to-digital.drawio.svg"></object>
{.align-center}

{{% /slide %}}
{{% slide %}}

## 3: Analogue to digital conversion

<object type="image/svg+xml" style="width: 70%;" data="./flow-decibels.drawio.svg"></object>
{.align-center}

{{% row %}}
![diagram of sampling and quantization](./image12.PNG)
{.align-center}

-   **Sample rate** = samples/second
    = 22050
-   **Bit depth** = bits/samples
    = 16
-   [mobilebeat.com/audio-bit-depth-and-sample-rate](https://www.mobilebeat.com/audio-bit-depth-and-sample-rate)

{{% /row %}}

> Notes:
> - An analogue signal is a continuous line
> - We use sampling or quantization to capture various points along that signal
> - Can then transform the time-discrete signal with quantization, or a quantized
>   signal with sampling, into a digital signal.
> - The sample rate refers to how many samples are captured each second. For
>   example, a sampling rate of 22050 means that each second, 22050 samples are
>   captured.
> - The bit depth refers to how many bits of information are stored for each
>   sample. Lower bit depth means less accurate quantization, higher means more
>   accurate quantization. Or in other words: bit depth affects dynamic
>   range. Dynamic range refers to the difference between the loudest and
>   softest signal that can be recorded or reproduced from a recording.
> - Also see the help section on [sample rate and bit depth]({{% relref "sample-rate-bit-depth" %}})

{{% /slide %}}
{{% slide %}}

## 4: Fourier transform

<object type="image/svg+xml" style="width: 70%;" data="./flow-decibels.drawio.svg"></object>
{.align-center}

{{% row %}}

- An FFT converts a _waveform_ into a _spectrogram_
- A sound wave can be represented as the sum of a series of sine waves
- We can convert from time domain to frequency domain

![fourier transform](./image13.PNG)  
{ style="width: 50%" }

{{% /row %}}

{{% /slide %}}
{{% slide %}}

## 4: Fourier transform

<object type="image/svg+xml" style="width: 70%;" data="./flow-decibels.drawio.svg"></object>
{.align-center}

![maximum frequency in spectrograms](./image14.png)
{.align-center style="scale: 150%" }

Maximum frequency in spectrograms = sample rate / 2 = <mark>Nyquist</mark>

> Notes:
> - The Nyquist theorum is a fundamental principle in signal processing, which
>   states that a sampling rate must be at least twice the highest frequency of
>   a target signal, for that signal to be accurately reproduced. As a result,
>   the maximum effective frequency of an audio file will be half of the file's
>   sample rate.
> - There are other types of transformations besides FFT

{{% /slide %}}
{{% slide %}}

## 4: Fourier transform

{{% row %}}
```powershell
Function FFT($array){
    $Len = $array.Count
    If($Len -le 1){Return $array} 
    $Len_Over_2 = [Math]::Floor(($Len/2))
    $Output = New-Object Complex[] $Len

    $EvenArray = @()
    $OddArray  = @()

    For($i = 0; $i -lt $Len; $i++){
        If($i % 2){ $OddArray  += $array[$i] }
        Else      { $EvenArray += $array[$i] }
    }

    $Even = FFT($EvenArray)
    $Odd  = FFT($OddArray)

    For($i = 0; $i -lt $Len_Over_2; $i++){
        $Twiddle = [Complex]::Exp(
            [Complex]::ImaginaryOne*[Math]::Pi*($i*-2/$Len)
        ) * $Odd[$i]
        $Output[$i]             = $Even[$i] + $Twiddle
        $Output[$i+$Len_Over_2] = $Even[$i] - $Twiddle
    }

    Return $Output
}
```


-   20 lines of code that changed human civilization
-   Thanks to Cooley and Tukey in 1965 (or Gauss 1805)

{{% /row %}}
{{% /slide %}}
{{% slide %}}

## 5: Spectrograms: time/frequency trade-off

<object type="image/svg+xml" style="width: 70%;" data="./flow-decibels.drawio.svg"></object>
{.align-center}

{{% stack %}}

<div style="display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: auto 1fr; width: 100%">
Waveform

Spectrogram

![waveform](./image9.PNG)

![spectrogram](./image2.png)

</div>
<div style="position: absolute;text-align: center;left: 850px;top: 800px;  transform:translate(-50%,-50%)">STFT<br>➡️</div>
{{% fragment %}}
![audacity settings](./image15.PNG)
{ style="scale: 150%" }
{{% /fragment %}}
{{% /stack %}}

> Notes:
> - We can visualise a waveform as a spectrogram, by applying a STFT (Short-time
>   Fourier transform).
> - There are different settings, such as window size, and window type. It will be
>  important to become familiar with understanding these settings and adjusting
>  them where appropriate. 
> - When visualising sound waves as spectrograms, there exists a trade-off between
>   the temporal resolution and the frequency resolution.
> - We can have either a  high resolution in the time domain, but the frequency
>   resolution will be lower. Or a high frequency resolution, with a lower temporal
>   resoltuion. Or somewhere in between for both.
> - This trade-off is principally determined by setting the window
>   length. The window length is expressed in samples, and should be a power of 2.

{{% /slide %}}
{{% slide %}}

## 5: Spectrograms: time/frequency trade-off

<object type="image/svg+xml" style="width: 100%;" data="./spectrogram-tradeoffs.drawio.svg"></object>
{.align-center}

> Notes:
> - Consider a window size of 256, with a sample rate (SR) of 22050.
> - Lets check the temporal resolution:
>  $$ Temporal\\:resolution = \frac{Window\\:size}{Sampling\\:rate} $$
>  $$ \frac{256}{22050} = 0.01160997732 s $$
>   - Which is ~11 ms. That is a good
>   time resolution. This means that the spectrum is split into images
>   representing 11 ms each.
> - Now consider the frequency resolution:
>   - The frequency resolution is determined by the number of bins in the
>     analysis window.
>   - The number of samples of a window is divided into horizontal strips
>     (bins). The number of bins determines the frequency resolution.
>     Therefore, how accurate the analysis can be in terms of detecting /
>     distinguishing frequencies.
>   - The number of bins is equal to window size divided by 2. A window size
>     of 256 will have 128 frequency bins.
>   - Now, the frequency resolution, is the frequnecy band of a single
>     bin. Therefore, how many Hz within each bin. More Hz in each bin means
>     a lower frequency resolution.
>   - There are two ways to calculate the frequency resolution:
>   - The first way:
>     - Given a sampling rate of 22050, we get a maximum frequency
>         (remember the Nyquist frequency) of 11025. This value, is then divided by the total number of bins
>       (which is window size divided by two). In this example, that means
>       11025 / 128 = 86.1328125 Hz.
>   - The second way:
>     - Due to the relationships between frequency + Nyquist frequency, and window
>       length + bins, we can simply calculate the frequency resolution using
>       sample rate divided by window length/size:
>        $$ Frequency\\:resolution = \frac{Sampling\\:rate}{Window\\:size} $$
>        $$ 22050 / 256 = 86.1328125 Hz $$
>     - Remember: the more bins you have, the more slices of frequency ranges you get for
>       your given frequency range, and therefore, the more precise each of these
>       bins will be.
>     - In the above example, the spectrum would be split into 128 bins where each
>       bin represents around 86 Hz.
>     - If we increased this to a window length of 1024 (512 frequency bins), this
>       would result in a frequency resolution of:
> $$ 11025 / 512 = 21.533203125 Hz $$
>      which is a much higher frequency resolution.

{{% /slide %}}
{{% slide type="title" %}}

Finished. Next up: [practical](../practical).

{{% /slide %}}
