---
title: AutoHotkey
---

[AutoHotkey](https://www.autohotkey.com/) (AHK) is a scripting language for the
automation of tasks with the use of hotkeys. AHK can automate graphical
applications by simulating clicks and keystrokes, and uses a simple, flexible,
and easy to learn syntax. This makes it a great tool to automate all kinds of
tasks in any Windows application. It is available only on the Windows operating
system. From their home page, follow the download link (Download Current
Version), and then install the downloaded `.exe` file. The full AHK
[documentation](https://www.autohotkey.com/docs/AutoHotkey.htm) is also
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
script contents into a blank [Visual Studio Code](https://code.visualstudio.com/) file. The script is also embedded at the
bottom of this help page. After downloading or copying the
script contents, make sure your file is saved with the `.ahk` extension.

### First use

Right click on the downloaded AHK file, and `Open with` an editor such as Visual
Studio Code. Have a read through the information in the file, and make any
changes if you want to. Next, you can double click on the file in `File
Explorer` to run the script, and check your taskbar icons to make sure the
script is successfully running. 

## Usage
| hotkey                | action            |
| --------------------- | ----------------- |
| `ctrl` + `mouse up`   | zoom in           |
| `ctrl` + `mouse down` | zoom out          |
| `F1`                  | zoom to all       |
| `F2`                  | zoom to selection |
| `F3`                  | move to next selection |

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
to save the script, and re-run it, before the changes take effect.
{{% /hint %}}

## AHK script

{{% gist andrew-1234 384ea4b716b4b0e8abb7012dbd600ae4 %}}
