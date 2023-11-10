---
title: Raven Quick Guide for Annotation
weight: 1
draft: true
---

By [Callan Alexander](mailto:callan.alexander@birdlife.org.au)

[Full (slightly out of date) user manual is available here (PDF)]( https://ravensoundsoftware.com/wp-content/uploads/2017/11/Raven14UsersManual.pdf).

## 1. Open Raven

{{% figure src="./raven1.png" caption="Figure 1: Screenshot of Raven Software" width="100%"%}}

Open Raven and import a .wav file (drag in or *file > open sound file*)

- You can leave the Window Preset on default for now. You can set up a preset later to make things quicker. ([See the user manual](https://ravensoundsoftware.com/wp-content/uploads/2017/11/Raven14UsersManual.pdf))

- If your computer struggles to handle a full-hour file, you can click *Page Sound* and this will break the file down into smaller segments of whichever time you specify

{{% figure src="./raven2.png" caption="Figure 2: Screenshot of Raven Software Break Sound" width="100%"%}}


## 2. Spectrogram Settings
- Zoom in on both the X and Y axis on the spectrogram. You will notice that the image is quite blurry. Note you can choose to view only the spectrogram rather than the waveform by deselecting the waveform in the *views* tab.

{{% figure src="./spectogram.png" caption="Figure 3: Raven Spectogram settings bar" width="100%"%}}

- If you are using an hour-long file (recommended) change the focus (spectrogram window size) to `2132` and adjust the brightness and contrast to taste. You can also select a different colour setting if desired. Shorter files will need different window sizes. 
- Move through the file using the horizontal axis until you find some vocalisations that you are interested in
- If you are using Raven Pro, right click on the blank space next to *High Freq* in your selection table and click Add Annotation Column. Name this column *Species*. In Raven Lite, this is not an option, but in Raven Pro you can create multiple columns with different naming conventions. *Species*, *Call Type*, and *Notes* are often useful inclusions. 

## 3. Add Annotations

{{% figure src="./raven3.png" caption="Figure 4: Add Annotation Column" width="100%"%}}

- When you find a sound of interest, draw a box around the vocalisation and hit enter. Type the species name in the annotation box. Click *use specified value as default*. Now every time you draw a box and hit enter it will use that species. This is useful for single species annotation. 

- For efficient tagging when you don’t need to be extremely accurate (for rapidly collecting annotations for deep learning or similar) you can *copy* and *paste* your annotation boundaries ([see the user manual](https://ravensoundsoftware.com/wp-content/uploads/2017/11/Raven14UsersManual.pdf))
- **IMPORTANT:** Make sure to save and back up your annotations. *File > Save Selection Table As*
- It is recommended to save the annotation file in the default Raven format (`powerfulowl.Table.1.selections.txt`) and to **save it alongside the original audio file**.



