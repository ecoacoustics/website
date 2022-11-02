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
{{% /slide %}}
{{% slide %}}

## 4: Fourier transform

<object type="image/svg+xml" style="width: 70%;" data="./flow-decibels.drawio.svg"></object>
{.align-center}

{{% row %}}

-   An FFT converts a _waveform_ into a _spectrogram_
-   A sound wave can be represented as the sum of a series of sine waves
-   We can convert from time domain to frequency domain

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
{{% /slide %}}
{{% slide %}}

## 5: Spectrograms: time/frequency trade-off

<object type="image/svg+xml" style="width: 100%;" data="./spectrogram-tradeoffs.drawio.svg"></object>
{.align-center}

{{% /slide %}}
{{% slide type="title" %}}

Finished. Next up: [recording and labelling](../../labelling/presentation).

{{% /slide %}}
