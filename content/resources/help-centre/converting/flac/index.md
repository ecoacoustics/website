---
title: FLAC (software)
---

The FLAC software is a command line tool that do several things with `.flac`
files. You'll have to download FLAC [here](https://xiph.org/flac/download.html)
and you can find instructions [here](https://xiph.org/flac/documentation.html)
and  [here](https://xiph.org/flac/documentation_tools.html).

## Example

In Powershell, this command line will transform the assigned `.flac` file to
`.wav` and save it with the same name, in the same folder as the original one.
The original file will not be removed:

```
flac -d "D:\Recording_Check\64\253\20200117T000000+1000.flac"
```
![flac-converting-flac](flac-converting-flac.JPG)