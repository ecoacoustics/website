---
title: Presentation
layout: "presentation"
draft: false
weight: 2
---

{{% slide type=title %}}

# Acoustic Indices

Marina D. A. Scarpelli - PhD candidate at QUT  
[@ScarpelliNina](https://twitter.com/ScarpelliNina)

![FCS](./258_20201027__2Maps.png)

{{% /slide %}}
{{% slide %}}

## Two approaches: Bioacoustics vs Ecoacoustics

<div class="quarter-grid">

-  Species-specific approach: consider the communication system exclusively between 
sender and receiver
    - Usually called **bioacoustics**

![Communication1to1](./communication-1-1.png)


-  Communication structure is more similar to a network (Sueur, 2014)
    - **Ecoacoustics** or **soundscape** approach
        - Soundscape: all the sounds in the landscape
        - Biophony + Geophony + Technophony
    - Enables the detection not only of species calls, but also social, behavioural 
    and ecological cues


![Communicationnetwork](./communication-network.png)

</div>

> Notes:
> The different components of the soundscape are usually described as:
> *Biophony:* sounds emitted by animals; *Geophony:* sounds emitted by geographical 
components of the landscape (e.g.: wind, rain, strems, etc); *Technophony:* sounds 
emitted by humans and its machines.

{{% /slide %}}
{{% slide %}}

## Passive Acoustic Monitoring (PAM)

{{% row %}} 
-   Passive acoustic recorders facilitated the investigation 
of more comprehensive questions, enabling research on:
    - Soundscapes
    - Multiple species
    - Upscaling bioacoustics questions: temporal and spatially
- However analytical tools still needed to be improved

![sensor2](./Pasted%20image%2020220916114126.png)  
{ .image-150-percent  }

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

<div class="footnotes">
Sugai LSM, Silva TSF, Ribeiro JW, Llusia D. 2019. Terrestrial Passive Acoustic Monitoring: 
Review and Perspectives. BioScience 69:5–11.
</div>

> Notes:
> In the graph presented from the review paper (Sugai et al., 2019) we can see that 
100% of studies looking at soundscapes (last row on the plot) used acoustic indices. 
The other analytical methods (manual tagging and recognisers) are very time-consuming 
to be used in large datasets, besides the need for expert knowledge to identify species. 
Moreover, the choice of which species to monitor can also be an issue, especially when 
considering recordings from different locations, where finding shared species of 
significance might be a problem.

{{% /slide %}}
{{% slide %}}

## Acoustic indices

-   Linked to the “Soundscape” or Ecoacoustics approach (Alcocer et al., 2022)
-   Mathematical function applied to waveform or spectrogram
    -   Can be derived from traditional ecological indices (i.e.: diversity, richness, etc)
-   Summarise the acoustic information with a community perspective
    -   Moving away from species-specific questions
{{% /slide %}}
{{% slide %}}

## Types of Indices

### Sueur et al., 2014

- Intensity indices: measure sound intensity (in dB) with different frequency weighting 
and time averaging
- They usually miss information on frequency and temporal patterns of soundscapes

![towsey-et-al-2014](./towsey-et-al-2014.PNG)
{.align-center}

> Notes:
> In this paper we examine the problem of estimating avian species richness by 
sampling from very long acoustic recordings using intensity indices.

{{% /slide %}}
{{% slide %}}

## Types of Indices

### Sueur et al., 2014
- Complexity indices: more species and individuals communicating will increase the 
complexity of the soundscape
- Heterogeneity would be a proxy of animal acoustic activity

![pieretti-et-al-2011](./pieretti-et-al-2011.PNG) 
{.align-center}

> Notes:
> This is the paper for the ACI, one of the oldest and most used Acoustic indices so far

{{% /slide %}}
{{% slide %}}

## Types of Indices

### Sueur et al., 2014

- Soundscape derived indices: estimates the relative contribution of biophony in 
relation to technophony and geophony
- Splits the spectrum into frequency bands:
  - 0.2 to 2 kHz = technophony
  - 2 to 8kHz = biophony
  - geophony: occupies the entire spectrum

![gage-and-axel-2014](./gage-and-axel-2014.PNG)
{.align-center}

> Notes:
> This is the paper for the NDSI - Normalised Difference Soundscape Index, which 
calculates the ratio between the anthrophony and biophony based on the frequency 
bands division

{{% /slide %}}
{{% slide %}}

## Soundscape indices

### Splitting frequency bands

Sometimes it works...

Technophony
![technophony-example](./technophony-example.PNG)
{.align-center}

{{% /slide %}}
{{% slide %}}

## Soundscape indices

### Splitting frequency bands

Sometimes it works...

Biophony
![biophony-example](./biophony-example.PNG)
{.align-center}

{{% /slide %}}
{{% slide %}}

## Soundscape indices

### Splitting frequency bands

Sometimes it works...

Geophony
![geophony-example](./geophony-example.PNG)
{.align-center}

{{% /slide %}}
{{% slide %}}

## Soundscape indices

### Splitting frequency bands

Sometimes it does not work...

Geophony
 ![rustling-example](./rustling-example.PNG)
 {.align-center}

{{% /slide %}}
{{% slide %}}

## Soundscape indices

### Splitting frequency bands

Sometimes it does not work...

Biophony
![boobook-example](./boobook-example.PNG)
{.align-center}

{{% /slide %}}
{{% slide %}}

## Soundscape indices

### Splitting frequency bands

Sometimes it does not work...

Biophony
![birds-example](./birds-example.PNG)
{.align-center}

{{% /slide %}}
{{% slide %}}

## Acoustic indices disadvantages

-   Sounds are multidimensional: frequency, time and amplitude
-   Environmental recordings have an additional constraint: 
    -   It is hard to determine the distance between sound source (e.g.: animal)
     to microphone
        -   Amplitude metrics depend on distance because of attenuation effects
-   Other factors might influence values: 
    -   E.g. background noise, intensity and repetition of calls by one individual, 
    overlaps between calls,etc
    -   Therefore the relationship between one index/one ecological metric is still
     unclear

> Notes:
> Transforming a multidimensional feature into one single number is not always 
straightforward and a lot of times it does not work the same in every situation;

{{% /slide %}}
{{% slide %}}

## Acoustic indices measuring biodiversity

![Pasted image 20220915145342.png](./Pasted%20image%2020220915145342.png)

> Notes:
> This is a meta-analysis that just came out this year and they did a very thorough 
investigation on acoustic indices and how effective they are in measuring biodiversity

{{% /slide %}}
{{% slide %}}

## Summary of meta-analysis
{{% row %}} 
![Pasted image 20220920125409.png](./Pasted%20image%2020220920125409.png)
{ .image-150-percent }

-   AI had an overall moderate positive correlation with biodiversity
-   Best biodiversity metric correlated with AI was abundance of sounds
-   There was no single best AI
{{% /row %}} 

{{% /slide %}}
{{% slide %}}

## Summary of meta-analysis
{{% row %}} 
![Pasted image 20220920125409.png](./Pasted%20image%2020220920125409.png)
{ .image-150-percent }

-   Majority of studies investigated terrestrial habitats and birds are the main 
group studied;
-   Species richness and abundance of sounds are the most explored metric to relate 
acoustic indices values to biodiversity measures
{{% /row %}} 

{{% /slide %}}
{{% slide type=title %}}

Now, let's do some practical exercises!


Go to the [practical](../practical/).


{{% /slide %}}

