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
recommend using [Chocolatey](https://chocolatey.org/) on Windows, and
[Homebrew](https://brew.sh/) on macOS. If you're using Linux, each variant will
have their own package manager, such as apt, yum, or snap. Once you're up and
running, it is easy to install packages with a command in your terminal. But
remember that each package manager has their own commands, which tells the
package manager to look for and install a piece of software. If you try to run
`choco install ffmpeg` on macOS, this will not work. Refer to the relevant
documentation pages for your package manager if you are ever unsure. 


## How to install


