---
title: FLAC (software)
---

If you want to convert audio files to or from FLAC, it is important to
first install the FLAC software. You'll have to download FLAC [here](https://xiph.org/flac/download.html)
and you can find documentation about the software [here](https://xiph.org/flac/documentation.html)
and [here](https://xiph.org/flac/documentation_tools.html). 

You can then use the software directly from the command line. Alternatively,
 installing the FLAC software will  allow you to use the `wav2flac` function in
the seewave package for R. See [Converting audio files with R]({{< ref
"convert-r" >}}). 

## Example

In Powershell, this command will convert the assigned `.flac` file to
`.wav` and save it with the same name, in the same folder as the original.
The original file will not be removed. 

```
flac -d "D:\Recording_Check\64\253\20200117T000000+1000.flac"
```
![flac-converting-flac](flac-converting-flac.JPG)