---
title: Package manager
---

## What is a package manager?

Much of the software that is mentioned on this website includes package manager
installation instructions, if they are available. But what is a package manager?
Essentially, it is a piece of software that lets us easily and conveniently
download and install applications (known as packages), and keep those packages
up to date. A package manager runs in the [command line]({{% ref
"command-line.md" %}}), so check out that help page first if you are unfamiliar
with using the command line. 

You might be asking, "why would I want to use a package manager?". The biggest
advantage of a package manager is the convenience. For example, installing
FFmpeg manually can be a difficult process. Especially when you have to repeat
the installation process on every computer you want to use. But with a package
manager, a single command can get you up and running in no time at all:

```ps 
> choco install ffmpeg
```

That means less time fussing around with installations, and more time for you to
focus on the things that matter. Besides FFmpeg, there are many useful software
packages that are commonly used for ecoacoustics which can be installed with
package managers.

The other great thing about package managers is that they take care of your
[PATH variable]({{% ref "path.md" %}}), ensuring that anything you
install will be available and ready to use directly from the [command line]({{%
ref "command-line.md" %}}).

## Get started

The type of package manager you use will depend on your operating system. We
recommend three main options: 

- [Chocolatey](https://chocolatey.org/) on Windows
- [Homebrew](https://brew.sh/) on macOS 
- [Snap](https://snapcraft.io/) on Linux

### How to install

{{% tabs install-pkg-manager %}}

{{% tab "Chocolatey" %}} 
**Install Chocolately for Windows:**
1. Visit the [installing chocolatey](https://community.chocolatey.org/courses/installation/installing?method=installing-chocolatey) 
page
2. If you have a preference, choose from the installation methods listed
3. If you are unsure, just click "Basic Chocolatey Install"
4. Open an administrative shell (Command Prompt)
    - Click the Start button, and search for "cmd" or "command prompt", 
    - right-click "command prompt" and select "Run as Administrator"
5. Paste the installation command listed on the `Install with cmd.exe` section
   of their website into your administrative command prompt
6. Wait for the installation to complete, then check that it was installed
   successfully by typing `choco` into your command prompt. 
7. You are now ready to install packages using the command `choco install` in
   your command line shell
{{% /tab %}}

{{% tab "Homebrew" %}} 
**Install Homebrew for macOS:**
1. Check your system meets the requirements:
    - A 64-bit Intel CPU or Apple Silicon CPU
    - macOS Big Sur (11) (or higher)
    - Install Command Line Tools (CLT) for xcode:
      - Run  `xcode-select --install` in a terminal window
      - Or download [here](https://apps.apple.com/us/app/xcode/id497799835)
2. Visit the [Hombrew](https://brew.sh/) website 
3. Paste the script listed on that page into a terminal window
4. After the installation finishes, check it was installed successfully by
   typing `brew` into a terminal window
5. You are now ready to install packages using the command `brew install` in
   the terminal
{{% /tab %}}

{{% tab "Snap" %}} 
**Install Snap for Linux:**
1. Visit the [installing snap](https://snapcraft.io/docs/installing-snapd) page
2. Snap is pre-installed and ready to use on some distributions of Linux, so
   check to see if your distributution is listed before continuing
3. If your distribution does not come pre-installed with snap, you should check
   the links on the installation page and select your distribution for specific
   instructions
4. Once you have successfully followed your distribution's installation
   instructions, you are now ready to install packages using the command `snap
   install` in the terminal

{{% /tab %}}
{{% /tabs %}} 

### Using your package manager

Now that you have a package manager, it is easy to install packages with a
command in your shell. But remember that each of the above package managers have
their own command, which tells the package manager to look for and install a
piece of software. If you try to run `choco install ffmpeg` on macOS, this will
not work. Refer to the relevant documentation pages for your package manager if
you are ever unsure. 
