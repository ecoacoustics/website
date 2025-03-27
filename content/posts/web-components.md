---
title: "Portable Spectrograms and Verification Interface"
date: 2025-03-27:20:00+10:00
image: "/images/ecosounds-banner-image.jpg"
imageCredit: "QUT Ecoacoustics Staff"
tags:
    - News
    - Technical
---

Open Ecoacoustics have recently published portable web components that can be
embedded into any website.
<!--more-->

These web components provide audio visualization and verification tools such as
spectrograms, annotation viewers, and customizable verification grids.

You can play around with the spectrogram components options using the
[spectrogram creator](https://oe-web-components.netlify.app/spectrogram-creator/)
available on the web components documentation website.

## Ecosounds and A2O integration

A "yes", "no" verification grid has been deployed to both Ecosounds and the
Australian Acoustic Observatory (A2O).

You can use this verification grid to verify annotations that you have uploaded.

As an example, you can search and verify all annotations on the A2O
[https://data.acousticobservatory.org/projects/1/annotations](here).

## Technical Information

### Spectrograms

I have created a small underpowered stackblitz workspace so that you can
experiment with the web components without worrying about the technical details
of setting up a server.

<iframe
    src="https://stackblitz.com/edit/oe-web-components-basic?file=index.html"
    height="600"
    style="border-style: none;"
></iframe>

<https://stackblitz.com/edit/oe-web-components-basic?file=index.html>

Adding a spectrogram to your website is now as easy as.

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/@ecoacoustics/web-components/dist/components.js"></script>
<oe-axes>
    <oe-indicator>
        <oe-spectrogram src="/example.flac"></oe-spectrogram>
    </oe-indicator>
</oe-axes>
```

### Verification Grid

The new web components come packaged with a verification and classification
grid component.

Creating a custom verification grid outside of Ecosounds or the A2O can now be
done through the following code.

```html
<oe-verification-grid id="verification-grid">
    <oe-verification verified="true" shortcut="Y"></oe-verification>
    <oe-verification verified="false" shortcut="N"></oe-verification>

    <oe-data-source slot="data-source" for="verification-grid" local></oe-data-source>
</oe-verification-grid>
```

## Learn More

- [Online documentation](https://oe-web-components.netlify.app/)
- [Source Code](https://github.com/ecoacoustics/web-components)
