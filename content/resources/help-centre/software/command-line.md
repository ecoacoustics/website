---
title: Terminal basics
---

This page provides a basic introduction to using and understanding the terminal.
If you are interested in using programs that run with a command line interface
(CLI), such as FFmpeg or AnalysisPrograms, then this page is for you.

## What is a terminal?

You are probably used to using programs which have a graphical user interface
(GUI). However, there are also programs that run in a text-based way, and these
programs are referred to as command line interface (CLI) programs. 

To run these text-based programs, and pass instructions to them, we use what is
called a terminal. This is a program which lets us input text, and view text
output. In reality, the terminal is just a middleman. The user input that we
type into a terminal is actually passed on to _another_ program, known as a
shell. The shell is the actual program that processes commands, generates the
output, and then passes it back into the terminal to display to the user. It is
possible to have different shells installed on the same device, and switch
between them when needed. Likewise, it is possible to use different terminal
programs, with different shells. Different shells use different types of syntax,
so it is good to be aware of this concept, and understand what shell you are
using, or suggested to use, when following instructions for interacting with a
terminal. 

## Recommendations

For Windows, the terminal we recommend using is called [Windows Terminal](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701?hl=en-au&gl=au).
The shell we recommend using on Windows is [PowerShell]({{% ref "powershell"
%}}). 

If you are using Linux or macOS, then you can use the inbuilt Terminal, which is
included by default for those systems. The default shell in Linux is typically
Bash. If you are using macOS, the default shell may be Bash for older systems, and
Zsh in newer systems. However, you can change the shell to be whatever you like
at any time. PowerShell 7 is also available for both
[Linux](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-linux?view=powershell-7.2)
and
[macOS](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-macos?view=powershell-7.2).

## How do I use it?

{{% include "resources/lessons/shared/basic-terminal-use.md" %}}

