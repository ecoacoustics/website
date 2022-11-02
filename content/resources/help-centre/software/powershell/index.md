---
title: PowerShell (software)
---

PowerShell is a general purpose scripting language. Because it is designed to
manipulate your computer and files on your computer we call it a _shell_.

It is similar to Bash (the most common shell found on Linux and macOS) but
was originally designed for Windows computers.

There are two distinct PowerShell runtimes:

- Versions 1 through 5 were installed standard with different versions of Windows
- Versions 6 and up are _optional_ installs that need to be installed by themselves

{{< figure src="./powershell-versions-start-menu.png" caption="Always choose version 7." >}}

From version 6, PowerShell has become cross platform---it can run on Windows,
macOS, and Linux. If you need a script that runs cross-platform, PowerShell
is a good choice.

## Installing

### Windows

- Go to Installing [PowerShell on Windows](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-windows) guide
- Choose the MSI package, and choose the `x64` version
  {{< figure src="./msi-x64-package.png" caption="Choose the x64 verion" >}}
- Download the file and start the install
- When you reach the _Optional Actions_stage make your you select the following options:
  - ✅ _Add 'Open here' context menus to Explorer_
  - ✅ _Add 'Run with PowerShell 7' context menu for PowerShell files_
{{< figure src="./powershell-install-extra-options.png" caption="Make sure you select the highlighted options." >}}

{{% hint info %}}
**Running commands as _Administrator_**

If you need to run a command as an _Administrator_ (for example to 
install new software), the right-click on a PowerShell icon 
and choose the _Run as Administrator_ option.

![run as Administrator](./powershell-run-as-admin.png)

{{% /hint %}}

### macOS

Follow the guides for [Installing PowerShell on macOS](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-macOS) 
published by microsoft.

### Linux

Follow the guides for [Installing PowerShell on Linux](https://learn.microsoft.com/en-us/powershell/scripting/install/installing-powershell-on-linux) 
published by microsoft.
