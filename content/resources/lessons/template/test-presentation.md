---
title: Test Presentation
type: "resources"
layout: "presentation"
draft: true
---

{{% slide type=title data-transition="fade" %}}

## Test presentation

This presentation is for demonstration purposes.
{{% /slide %}}
{{% slide data-transition="slide" %}}

### Slide with an image

![Susan Fuller](/images/people/susan-fuller.jpg)

Susan Fuller

-   Project Leader at _QUT_
-   Researcher in ecology and conservation biology

> Notes:
>
> -   Shhh, these are your **private** notes 📝

{{% /slide %}}
{{% slide data-transition="fade"  data-background-color="wheat" %}}

### List

-   Creating
-   A list
-   Is easy

### Numbered list

1. I have so
2. much to say
3. here

{{% /slide %}}
{{% slide type="centered" data-background-color="yellow" %}}
This slide has code

```ruby
require 'redcarpet'
markdown = Redcarpet.new("Hello World!")
puts markdown.to_html
```

{{% /slide %}}
{{% slide slide-name="headings"%}}

This slide has many headings

## heading 2

### heading 3

#### heading 4

{{% /slide %}}
{{% slide %}}

This slide has a link to google: [Visit Google](https://www.google.com)

And a link to a previous slide (you will need to give a name to the slide you want to link to):
[Go back to the headings slide](#headings)

{{% /slide %}}
{{% slide %}}
This slide has a table

| Tables        |      Are      |  Cool |
| ------------- | :-----------: | ----: |
| col 3 is      | right-aligned | $1600 |
| col 2 is      |   centered    |   $12 |
| zebra stripes |   are neat    |    $1 |

{{% /slide %}}
{{% slide %}}

## Blockquotes

> Blockquotes are very handy...
> This line is part of the same quote.

Quote break.

> A new quote

{{% /slide %}}
{{% slide %}}

## Video

To add a video: go to YouTube, click Share, choose embed, and paste the code:

<iframe width="560" height="315" src="https://www.youtube.com/embed/-gOK_sv80uI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

{{% /slide %}}
{{% slide %}}

## math

Block display (using LaTeX syntax):

$$\int_{a}^{b} x^2 dx$$

And inline $\int_{a}^{b} x^2 dx$ display.

{{% /slide %}}
