---
title: Presentation
layout: "presentation"
draft: true
weight: 2
---

{{% slide type=title %}}

# Cover: Acoustic Indices

Marina D. A. Scarpelli - PhD candidate at QUT

{{% /slide %}}
{{% slide %}}

## PAM enabling research on communication networks

-   With PAM recorders the investigation of questions related to soundscapes and all audible fauna was possible in terms of data - however analytical tools still needed to be improved
    -   It also enabled upscaling bioacoustics questions
-   ![[Pasted image 20220916114118.png]]
-   ![[Pasted image 20220916114126.png]]

{{% /slide %}}
{{% slide %}}

## Bioacoustics vs ecoacoustics

-   Species-specific approach: consider the communication system exclusively between sender and receiver
    -   Bioacoustics is more appropriate
-   ![[Communication1to1 1.tif]]
-   Communication structure is more like a network (Sueur, 2014)
    -   Ecoacoustics or soundscape approach
    -   Biophony + Geophony + Technophony
    -   Enables the detection not only of species calls, but social, behavioural and ecological cues
-   ![[Communication_network.tif]]

{{% /slide %}}
{{% slide %}}

## Approaches to analyse the data

-   Manually listening/annotating
-   Species recognisers (automatic/semi-automatic)
-   Acoustic indices (AI): summarising information
    -   More than 69 existing indices (Alcocer et al., 2022)
-   ![[Pasted image 20220915141421.png]]- Sugai LSM, Silva TSF, Ribeiro JW, Llusia D. 2019. Terrestrial Passive Acoustic Monitoring: Review and Perspectives. BioScience 69:5–11.

{{% /slide %}}
{{% slide %}}

## Acoustic indices

-   “Soundscape” or Ecoacoustics approach (Alcocer et al., 2022)
-   Mathematical function applied to waveform or spectrogram
    -   Can be derived from traditional ecological indices (i.e.: diversity, richness, etc)
-   Summarise the acoustic information with a community perspective – moving away from species-specific questions

-   ![[Pasted image 20220915105916.png]]

Sueur, J., Farina, A., Gasc, A., Pieretti, N., & Pavoine, S. (2014). Acoustic Indices for Biodiversity Assessment and Landscape Investigation. ACTA Acustica United With Acustica, 100, 772–781. https://doi.org/10.3813/AAA.918757

## Slide notes:

-   Alpha diversity: related to richness and relative abundance (evenness)
-   Beta diverity: try to estimate similarity or dissimilarity between list of entinties recorded at each site

{{% /slide %}}
{{% slide %}}

## Types of indices (Sueur et al., 2014)

-   Intensity indices: measure sound intensity (in dB) with different wheighting an time averaging
    -   They usually miss information on frequency and temporal patterns of soundscapes
    -   Towsey M, Wimmer J, Williamson I, Roe P. 2014. The use of acoustic indices to determine avian species richness in audio-recordings of the environment. Ecological Informatics 21:110–119. Elsevier B.V. Available from http://dx.doi.org/10.1016/j.ecoinf.2013.11.007.
-   Complexity indices: more species and individuals communicating will increase the complexity of the soundscape
    -   Index capturing heterogeneity would provide a proxy of animal acoustic activity
    -   ACI: Pieretti N, Farina A, Morri D. 2011. A new methodology to infer the singing activity of an avian community: The Acoustic Complexity Index (ACI). Ecological Indicators 11:868–873. Elsevier Ltd. Available from http://dx.doi.org/10.1016/j.ecolind.2010.11.005.
    -   Entropy (H): Sueur J, Pavoine S, Hamerlynck O, Duvail S. 2008. Rapid Acoustic Survey for Biodiversity Appraisal. PLoS ONE 3:e4065. Available from https://dx.plos.org/10.1371/journal.pone.0004065.
-   Soundscape derived indices: estimates the relative contribution of biophony in relation to technophony and geophony
    -   Splits the spectrum into frequency bands: 0.2 to 2 kHz = technophony; 2 to 8kHz = biophony; geophony: occupies the entire spectrum
    -   NDSI (Gage SH, Axel AC. 2014. Visualization of temporal change in soundscape power of a Michigan lake habitat over a 4-year period. Ecological Informatics 21:100–109. Elsevier B.V. Available from http://dx.doi.org/10.1016/j.ecoinf.2013.11.004.)

{{% /slide %}}
{{% slide %}}

## Soundscape indices and splitting the frequency bands (I'm gonna have spectrograms here to show these)

-   good examples
    -   ![[technophony-example.wav]]

![[biophony-example.wav]]

![[birds-example.wav]]

![[geophony-example.wav]]

-   Does not always work:
    -   rustling
    -   ![[rustling-example.wav]]

![[boobook-example.wav]] - boobook -

{{% /slide %}}
{{% slide %}}

## Acoustic indices disadvantages

-   Sounds are multidimensional: frequency, time and amplitude
-   Environmental recordings have an additional constraint: it is hard to determine the distance between sound source (e.g.: animal) to microphone
    -   Amplitude metrics depend on distance because of attenuation effects
-   Other factors might influence values: background noise, intensity and repetition of calls by one individual, overlaps between calls
-   Therefore the relationship between one index/one ecological metric are still unclear

{{% /slide %}}
{{% slide %}}

## Acoustic indices measuring biodiversity

-   ![[Pasted image 20220915145342.png]]

{{% /slide %}}
{{% slide %}}

## Summary of meta-analysis

![[Pasted image 20220920125409.png]]

-   AI had an overall moderate positive correlation with biodiversity
-   Best biodiversity metric correlated with AI was abundance of sounds
-   There was no single best AI

{{% /slide %}}
{{% slide %}}

-   Majority of studies investigated terrestrial habitats and birds are the main group studied;
-   Species richness and abundance of sounds are the most explored metric to relate acoustic indices values to biodiversity measures

{{% /slide %}}
{{% slide %}}

## False-colour spectrograms ?

-   \*\*Don't know if I'll talk about this if we won't do any - maybe I'll show the 2-hour blocks?
-   Frequency x time x acoustic indices (3): (Towsey et al, 2014)
    -   Visualisation tool
    -   Capture repetitive patterns of the soundscape
    -   Visual combination of AI
        -   Combination of indices is more successful to summarise soundscapes than single indices approach

## Exploring the results

Remaining time (if there's any)

-   .csv file
-   FCS

{{% /slide %}}
{{% slide %}}

# References

-   Alcocer I, Lima H, Sugai LSM, Llusia D. 2022. Acoustic indices as proxies for biodiversity: a meta‐analysis. Biological ReviewsDOI: 10.1111/brv.12890. Available from https://onlinelibrary.wiley.com/doi/10.1111/brv.12890.
-   Sueur J, Farina A, Gasc A, Pieretti N, Pavoine S. 2014. Acoustic Indices for Biodiversity Assessment and Landscape Investigation. Acta Acustica united with Acustica 100:772–781. Available from http://openurl.ingenta.com/content/xref?genre=article&issn=1610-1928&volume=100&issue=4&spage=772.

{{% /slide %}}
