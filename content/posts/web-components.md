---
title: "Portable Spectrograms and Verification Interface"
date: 2025-04-04T12:00:00+10:00
image: "/images/frog.jpg"
imageCredit: "Professor Susan Fuller"
tags:
    - News
---

Open Ecoacoustics have recently published reusable ecoacoustic tools as web
components that can be embedded into any website.
<!--more-->

## What are Ecoacoustic web components

A web component is a standardised way to create a reusable part of a
website.

In the past, when someone wanted to add a spectrogram to their website, they
would have to recreate spectrogram rendering from scratch, and if the underlying
technology used to build the website changed, the work would have to be
repeated. This is an inefficient process and lead duplicated work that has been
repeated by many ecoacoustic groups.

By choosing to create these tools as web components, Open Ecoacoustics is
backing ecoacoustic tools with innovative new web standards.
Backing ecoacoustic tooling with web standards ensures their longevity,
reusability, and increases the accessability of high-quality; open source
ecoacoustic tooling.

The new web components provide Ecoacoustic tools such as spectrograms,
annotation viewers, and customizable verification grids.

You can tinker with a demonstration spectrogram components options using the
[spectrogram creator](https://oe-web-components.netlify.app/spectrogram-creator/)
available on the web components documentation website.
When changing the options the webpage will provide you with a code snippet that
you can copy and paste into your website.

{{%
    figure
    src="./spectrogram-creator.png"
    caption="A preview of the spectrogram creator webpage"
    width="50%"
%}}

The open source nature of these web components means that anyone can read the
underlying source code can be read and modified to meet your specific needs.
The open source nature of these components also allows anyone to contribute code
if you want to see a new feature, squash a bug, or provide documentation
contributions are welcome.

**Disclaimer**: These web components are still in their infancy. Bugs may exist,
and we appreciate early testers reporting any issues that may occur.

## Ecosounds and A2O integration

A "yes" or "no" verification grid has been deployed to all Ecosounds and
Australian Acoustic Observatory (A2O) projects, sites, and points.
You can use this verification grid to verify annotations that you have created
or uploaded through the new
[annotation import page](https://www.ecosounds.org/batch_annotations).

This verification grid is now available to all users and welcomes the
collaboration of experts and citizen scientists to verify annotations.

As an example, you can search and verify all annotations on the A2O
[here](https://data.acousticobservatory.org/projects/1/annotations).
Or refine your verification to a species of your expertise using the filter
settings provided.

## Spectrogram Variants

Great care has been given to the reusability of the web components.
Each component has several options that can be adapted to the theme of your
website or use case.

A complete list of options available for each web component can be found
[here](https://oe-web-components.netlify.app/components/).

{{%
    figure
    src="./spectrogram-variants.png"
    caption="Four variants of spectrograms with different colours, window sizes, and scales"
    width="50%"
%}}

[Stackblitz: Spectrogram Variants](https://stackblitz.com/edit/oe-web-components-basic?file=examples%2Fspectrogram-variants.html)

In the example above, I have rendered the same audio file with a variety of
options that can be easily modified with minimal programming knowledge.
In the image above, I have modified the each spectrograms color by simply using
the `color-map` keyword.
I have also demonstrated using a mel-scale in the bottom right spectrogram by
simply adding the `mel-scale` keyword.

## Event Annotations

Adding bounding boxes to label areas of interest is a common part of
Ecoacoustic workflows.
For this reason, an annotation viewer included in the Open Ecoacoustics web
components.

{{%
    figure
    src="./spectrogram-annotations.png"
    caption="Spectrogram variants"
    width="50%"
%}}

[Stackblitz: Annotation Example](https://stackblitz.com/edit/oe-web-components-basic?file=examples%2Fannotations.html)

## Verification Grids

The new web components come packaged with a verification grid component.
This component is used by ecologists to verify that existing tags in a dataset
are correct.

{{%
    figure
    src="./verification-grid.png"
    caption="A verification grid deployed on Ecosounds"
    width="90%"
%}}

> Annotations shown in the Verification above were sourced from the
> [Cooloola Ecosounds project](https://www.ecosounds.org/projects/1029)
> under the Creative Commons by Attribution 4.0 license.

> Phillips, Yvonne (2018): Environmental long-duration audio recordings: Gympie and Woondum National Park . Queensland University of Technology. (Sound) <https://doi.org/10.4225/09/5a7297ee4b893>

While it is recommended to use the Ecosounds or A2O verification workflow, the
nature of these web components being portable means that they are fully
customizable and can be embedded for any task outside of Ecosounds or the A2O
and supports a wide variety of data formats.

Creating your own verification grid also allows easy customization of the
verification task.
For example, if your dataset does not include labeled species, we support
tagging audio through the
[classification](https://oe-web-components.netlify.app/examples/verification/classification/)
variant of the `oe-verification-grid` web component.

[Verification Grid Example](https://stackblitz.com/edit/oe-web-components-basic?file=examples%2Fverification-grid.html)

## Technical Example

For demonstration purposes, I have created a small underpowered stackblitz
workspace so that you can experiment with the web components without worrying
about the technical details of setting up a server.

```html
<script
    type="module"
    src="https://cdn.jsdelivr.net/npm/@ecoacoustics/web-components/dist/components.js"
></script>

<oe-axes>
    <oe-indicator>
        <oe-spectrogram id="spectrogram" src="/example.flac"></oe-spectrogram>
    </oe-indicator>
</oe-axes>
<oe-media-controls for="spectrogram"></oe-media-controls>
```

<https://stackblitz.com/edit/oe-web-components-basic?file=index.html>

Using the demonstration above, you can experiment using the Open Ecoacoustics
web components in an isolated, pre-configured environment.

## Support

If you find any issues with the web components, or have and feedback please
report them via our
[GitHub issue tracker](https://github.com/ecoacoustics/web-components/issues),
or contact us through the [contact form](/contact).

## Learn More

- [Online documentation](https://oe-web-components.netlify.app/)
- [Web Component Source Code](https://github.com/ecoacoustics/web-components)
