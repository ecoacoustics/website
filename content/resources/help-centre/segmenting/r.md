---
title: Segmenting with R
---

The warbleR package in R provides a convenient function `split_sound_files`, to
split sound files into desired segment lengths. See the function documentation
[here](https://rdrr.io/cran/warbleR/man/split_sound_files.html). The example
code below will look for sound files in the data folder, and return 60 second
segmented files in `.wav` format. 

```
split_sound_files(path = "data", sgmt.dur = 60, sgmts = NULL, files = NULL,
parallel = 1, pb = TRUE, only.sels = FALSE, X = NULL)
```