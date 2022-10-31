---
title: AutoHotkey
---

[AutoHotkey](https://www.autohotkey.com/) (AHK) is a scripting language for the
automation of tasks with the use of hotkeys. It is available only on the
Windows operating system. From their home page, follow the download link
(Download Current Version), and then install the downloaded `.exe` file. The
full AHK [documentation](https://www.autohotkey.com/docs/AutoHotkey.htm) is also
available on their website.  

Please know, you do not need this program for ecoacoustic analysis or workflows.
However, if you are performing a repetitive task, such as annotating a large
number of sound files, AHK scripts might be able to make your life a little bit
easier. This help page is focused on a specific example of using AHK with the
Raven Pro software. Previous versions of Raven had few inbuilt shortcut keys,
and required a lot of clicking. This functionality has improved with recent
versions, so you may have no need for AHK. However, if you want to automate
button presses for which no shortcut key exists, or use your own custom shortcut
keys, then AHK is still a good choice. Familiarity with AHK could also help you
create shortcuts and hotkeys for other parts of your workflow.  

## Setup and example script

If you haven't already installed the AHK program, do so now. Then, you may
download the **example AHK script** available
[here](https://gist.github.com/andrew-1234/384ea4b716b4b0e8abb7012dbd600ae4), by
downloading the file as a zip with the `Download Zip` button, or copying the
script contents into a blank notepad file. After downloading or copying the
script contents, make sure your file has the `.ahk` extension.

### First use

Right click on the downloaded AHK file, and `Open with` a text editor such as
Notepad. Have a read through the information in the file.  In particular, check
to make sure that the following line of code correctly specifies your Raven
version number:

`#IfWinActive, Raven Pro 1.6.1`

If you are using a different version of Raven, you will have to change this
line. For example, if I wanted to use this script with Raven v1.5, then my file
would contain the following instead:

`#IfWinActive, Raven Pro 1.5.0`

Save your changes. Now, you can double click on the file to run the script, and
check your taskbar icons to make sure the script is successfully running. 

## Usage

With Raven open, and a sound file imported, you can test the hotkeys. Hold down
`ctrl` and scroll up and down with your mouse wheel to zoom in and out of a
sound. Press `F1` to show the entire sound file (zoom to all), or `F2` to zoom
to the active selection. `F3` will navigate to your next selection. 

With these hotkeys, working through a large number of annotations is easier.
Navigate to the next selection with `F3`, press `F2` to zoom into that
selection, make adjustments if necessary, and then move to the next selection
with `F3` again. Press `F1` at any time to zoom out for a big picture view of
the file, and then `F3` to zoom back in to the current selection. 

{{% hint info %}}
**Note:**  
This script works by moving your mouse to predefined positions, clicking a
button, and then returning your mouse. This has been tested this with raven
1.6.1, with the default window arrangement. If the hotkeys do not work as
expected, or click different things, or nothing at all, then perhaps your window
arrangement or arrangement of icons is different. In this case, you will need to
modify the `X` and `Y` settings in the `.ahk` file. You can find the values that
match your window setup, by using the Window Spy tool that comes with AHK.
Otherwise, check back here in the future for a ready made 1.6.4 version!
{{% /hint %}}

## Customisation

Feel free to customise the hotkeys in this file, and experiment with making your
own hotkeys!

It is simple to change a hotkey. For example, the default hotkey for move to
next selection is currently `F3::`. You can edit the content to the left of the
`::` to reflect your desired hotkey. If you change this line to `Right::`, then
the hotkey to move to next selection would be the right arrow key instead of
`F3`. For the full keylist, see this
[document](https://www.autohotkey.com/docs/KeyList.htm). 

{{% hint info %}}
**Note:**  
If you make changes to your AHK script (using a text editor), then you will have
to save the script, and re-run it, before the change take effect.
{{% /hint %}}
