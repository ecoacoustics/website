---
title: "Portable Spectrograms and Verification Interface"
date: 2025-04-01T12:00:00+10:00
image: "/images/ecoacoustic-verification.jpg"
tags:
    - News
---

Open Ecoacoustics have recently published reusable web components that can be
embedded into any website.
<!--more-->

## What are Ecoacoustic web components

A web components is a standardised way to create a reusable part of a
website.

In the past, when someone wanted to add a spectrogram to their website, they
would have to recreate spectrogram rendering from scratch, and if the underlying
technology used to build the website changed, the work would have to be
repeated.
This is an inefficient process and lead duplicated work that has been repeated
by many ecoacoustic groups.

By choosing to create these tools as web components, Open Ecoacoustics is
backing ecoacoustic tools with innovative new web standards.
Backing ecoacoustic tooling with web standards ensures their longevity,
reusability, and increases the accessability of high-quality; open source
ecoacoustic tooling.

The web components provide Ecoacoustic tools such as spectrograms, annotation
viewers, and customizable verification grids.

You can tinker with a demonstration spectrogram components options using the
[spectrogram creator](https://oe-web-components.netlify.app/spectrogram-creator/)
available on the web components documentation website.
When changing the options the webpage will provide you with a code snippet that
you can copy and paste into your website.

The open source nature of these web components means that anyone can read the
underlying source code can be read and modified to meet your specific needs.
The open source nature of these components also allows anyone to contribute code
if you want to see a new feature, squash a bug, or provide documentation
contributions are welcome.

Disclaimer: These web components are still in their infancy. Bugs may exist,
and we appreciate early testers reporting any issues that may occur.

## Ecosounds and A2O integration

A "yes" or "no" verification grid has been deployed to all Ecosounds and
Australian Acoustic Observatory (A2O) project, sites, and points.
You can use this verification grid to verify annotations that you have created
or uploaded through the new
[annotation import page](https://www.ecosounds.org/batch_annotations)

This verification grid is now available to all users and welcomes the
collaboration of experts and citizen scientists to verify annotations.

As an example, you can search and verify all annotations on the A2O
[here](https://data.acousticobservatory.org/projects/1/annotations).
Or refine your verification to a species of your expertise using the filter
settings provided.

## Technical Information

### Spectrograms

For demonstration purposes, I have created a small underpowered stackblitz
workspace so that you can experiment with the web components without worrying
about the technical details of setting up a server.

<!--
    On mobile (or small) devices, an embedded stackblitz frame is not large
    enough to use effectively.
    Therefore, I remove the redundant space on mobile devices and only have the
    link to the stackblitz workspace.
-->
<iframe
    class="hide-on-mobile"
    src="https://stackblitz.com/edit/oe-web-components-basic?file=index.html"
    height="600"
    style="border-style: none;"
></iframe>

<https://stackblitz.com/edit/oe-web-components-basic?file=index.html>

As shown in the example, adding a spectrogram to your website can now be done
with minimal effort.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@ecoacoustics/web-components/dist/components.js"></script>
<oe-axes>
    <oe-indicator>
        <oe-spectrogram src="/example.flac"></oe-spectrogram>
    </oe-indicator>
</oe-axes>
```

### Verification Grids

The new web components come packaged with a verification grid component.
This component is used by ecologists to verify that existing tags in a dataset
are correct.

Creating a custom verification grid outside of Ecosounds or the A2O can now be
done through the following code.

```html
<oe-verification-grid id="verification-grid">
    <oe-verification verified="true" shortcut="Y"></oe-verification>
    <oe-verification verified="false" shortcut="N"></oe-verification>

    <oe-data-source slot="data-source" for="verification-grid" local></oe-data-source>
</oe-verification-grid>
```

## Support

If you find any issues with the web components, or have and feedback please
report them via our
[GitHub issue tracker](https://github.com/ecoacoustics/web-components/issues),
or contact us through the [contact form](/contact).

## Learn More

- [Online documentation](https://oe-web-components.netlify.app/)
- [Source Code](https://github.com/ecoacoustics/web-components)
