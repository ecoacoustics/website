---
title: Presentation
layout: "presentation"
draft: true
weight: 2
---

{{% slide type=title %}}

# Acoustic Indices

Marina D. A. Scarpelli - PhD candidate at QUT

![FCS](./258_20201027__2Maps.png)

{{% /slide %}}
{{% slide %}}

## Bioacoustics vs ecoacoustics


-  Species-specific approach: consider the communication system exclusively between sender and receiver
    - Usually called **bioacoustics**

![Communication1to1](./communication-1-1.png)
{ style ="scale:50%" }


-  Communication structure is more similar to a network (Sueur, 2014)
    - **Ecoacoustics** or **soundscape** approach
        - Soundscape: all the sounds in the landscape
        - Biophony + Geophony + Technophony
    - Enables the detection not only of species calls, but also social, behavioural and ecological cues


![Communicationnetwork](./communication-network.png)
{ style ="scale:70%" }


{{% /slide %}}
{{% slide %}}

## Passive Acoustic Monitoring (PAM)
### Facilitating research on communication networks
{{% row %}} 
-   Passive acoustic recorders facilitated the investigation 
of more comprehensive questions, enabling research on:
    - Soundscapes
    - Multiple species
    - Upscaling bioacoustics questions: temporal and spatially

- However analytical tools still needed to be improved

![sensor2](./Pasted%20image%2020220916114126.png)
{ style ="scale:150%" }
{{% /row %}}


{{% /slide %}}
{{% slide %}}

## Approaches to analyse the data

{{% row %}} 
-   Manually listening/annotating
-   Species recognisers (automatic/semi-automatic)
-   Acoustic indices (AI): summarising information
    -   More than 69 existing indices (Alcocer et al., 2022)

![sugai-et-al-2019](./Pasted%20image%2020220915141421.png)
{{% /row %}}
Sugai LSM, Silva TSF, Ribeiro JW, Llusia D. 2019. Terrestrial Passive Acoustic Monitoring: Review and Perspectives. BioScience 69:5–11.

{{% /slide %}}
{{% slide %}}

## Acoustic indices

-   “Soundscape” or Ecoacoustics approach (Alcocer et al., 2022)
-   Mathematical function applied to waveform or spectrogram
    -   Can be derived from traditional ecological indices (i.e.: diversity, richness, etc)
-   Summarise the acoustic information with a community perspective – moving away from species-specific questions

{{% /slide %}}
{{% slide %}}

## Acoustic indices
![sueur-et-al-2014](./Pasted%20image%2020220915105916.png)
{.align-center}
Sueur, J., Farina, A., Gasc, A., Pieretti, N., & Pavoine, S. (2014). Acoustic Indices for Biodiversity Assessment and Landscape Investigation. ACTA Acustica United With Acustica, 100, 772–781. https://doi.org/10.3813/AAA.918757

> Notes:
> Alpha diversity: related to richness and relative abundance (evenness)
>
> Beta diversity: try to estimate similarity or dissimilarity between list of entities recorded at each site

{{% /slide %}}
{{% slide %}}

## Types of indices (Sueur et al., 2014)

- Intensity indices: measure sound intensity (in dB) with different frequency weighting and time averaging

- They usually miss information on frequency and temporal patterns of soundscapes

![towsey-et-al-2014](./towsey-et-al-2014.PNG)
{.align-center}

>Notes:
>In this paper we examine the problem of estimating avian species richness by sampling from very long acoustic recordings using intensity indices.

{{% /slide %}}
{{% slide %}}

## Types of indices (Sueur et al., 2014)

- Complexity indices: more species and individuals communicating will increase the complexity of the soundscape
- Heterogeneity would be a proxy of animal acoustic activity

![pieretti-et-al-2011](./pieretti-et-al-2011.PNG) 
{.align-center}

>Notes:
>This is the paper for the ACI, one of the oldest and most used Acoustic indices so far

{{% /slide %}}
{{% slide %}}

## Types of indices (Sueur et al., 2014)

- Soundscape derived indices: estimates the relative contribution of biophony in relation to technophony and geophony
- Splits the spectrum into frequency bands: 0.2 to 2 kHz = technophony; 2 to 8kHz = biophony; geophony: occupies the entire spectrum

![gage-and-axel-2014](./gage-and-axel-2014.PNG)
{.align-center}

>Notes:
>This is the paper for the NDSI - Normalised Difference Soundscape Index, which calculates the ratio between the anthrophony and biophony based on the frequency bands division

{{% /slide %}}
{{% slide %}}

## Soundscape indices and splitting
## frequency bands

-   Sometimes it works

Technophony
![technophony-example](./technophony-example.PNG)
{.align-center}

{{% /slide %}}
{{% slide %}}

## Soundscape indices and splitting
## frequency bands

-   Sometimes it works

Biophony
![biophony-example](./biophony-example.PNG)
{.align-center}

{{% /slide %}}
{{% slide %}}

## Soundscape indices and splitting
## frequency bands

-   Sometimes it works

Geophony
![geophony-example](./geophony-example.PNG)
{.align-center}

{{% /slide %}}
{{% slide %}}

## Soundscape indices and splitting
## frequency bands

-   Sometimes it doesn't

Geophony
 ![rustling-example](./rustling-example.PNG)
 {.align-center}

>Notes:
>rustling

{{% /slide %}}
{{% slide %}}

## Soundscape indices and splitting
## frequency bands

-   Sometimes it doesn't

Biophony
![boobook-example](./boobook-example.PNG)
{.align-center}

{{% /slide %}}
{{% slide %}}

## Soundscape indices and splitting
## frequency bands

-   Sometimes it doesn't

Biophony
![birds-example](./birds-example.PNG)
{.align-center}

>Notes:
>Birds going over the technophony 

{{% /slide %}}
{{% slide %}}

## Acoustic indices disadvantages

-   Sounds are multidimensional: frequency, time and amplitude
-   Environmental recordings have an additional constraint: it is hard to determine the distance between sound source (e.g.: animal) to microphone
    -   Amplitude metrics depend on distance because of attenuation effects
-   Other factors might influence values: background noise, intensity and repetition of calls by one individual, overlaps between calls,etc
    -   Therefore the relationship between one index/one ecological metric are still unclear

>Notes:
>Transforming a multidimensional feature into one single number is not always straightforward and a lot of times if does not work the same in every situation;
{{% /slide %}}
{{% slide %}}

## Acoustic indices measuring biodiversity

![Pasted image 20220915145342.png](./Pasted%20image%2020220915145342.png)

>Notes:
>This is a meta-analysis that just came out this year and they did a very thorough investigation on acoustic indices and how effective they are in measuring biodiversity
{{% /slide %}}
{{% slide %}}

## Summary of meta-analysis
{{% row %}} 
![Pasted image 20220920125409.png](./Pasted%20image%2020220920125409.png)
{ style ="scale:150%" }

-   AI had an overall moderate positive correlation with biodiversity
-   Best biodiversity metric correlated with AI was abundance of sounds
-   There was no single best AI
{{% /row %}} 

{{% /slide %}}
{{% slide %}}

## Summary of meta-analysis
{{% row %}} 
![Pasted image 20220920125409.png](./Pasted%20image%2020220920125409.png)
{ style ="scale:150%" }

-   Majority of studies investigated terrestrial habitats and birds are the main group studied;
-   Species richness and abundance of sounds are the most explored metric to relate acoustic indices values to biodiversity measures
{{% /row %}} 

{{% /slide %}}
{{% slide %}}

## Now, let's do some practical exercises!
- Get the files in [here](https://cloudstor.aarnet.edu.au/plus/s/Fsoi5Dm0AJ1JvYU)
- Go to the [practical tab](/resources/lessons/acoustic-indices/practical/)

{{% /slide %}}
{{% slide %}}

