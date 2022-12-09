---
title: The PATH variable
---

## What is the "PATH"?

If you have been following the lessons and help guides available on this
website, and installing software such as FFmpeg and AP (AnalysisPrograms) then
you have probably seen the term `PATH` by now. 

The `PATH` variable is an environment variable. Environment variables are values
that any program can access. The `PATH` variable contains a list of folders that
your computer can check when it searches for programs to run.

In simple terms, if we want to use a program in a terminal (see the [terminal basics]({{% relref "terminal" %}}) guide), we have two choices. We can
specify the full path to the program (often referred to as a binary, usually
has an extension like `.exe` on Windows) file, and then write our code:

```ps
> C:\Users\Anthony\AP\AnalysisPrograms.exe 
```

```bash
> ~/AP/AnalysisPrograms
```

But this would be annoying to write out every time. Instead, if our `PATH`
variable includes the AP folder, we can run AP commands without specifying this
full path! 

```ps
> AnalysisPrograms.exe
```

```bash
> AnalysisPrograms
```

## How to check the PATH variable

We can quickly check if a program has been successfully added to our `PATH` or
not. Open up a terminal and type a command for the program we are interested in
testing. 

```ps
> FFmpeg
```

If the command successfully returns some kind of output about the package, then
it is available on your `PATH`.  

You can check the list of folders contained in your `PATH` variable
using `printenv PATH` in Bash, `echo $env:Path` in PowerShell, and 
`printenv PATH` in Zsh. If the folder where you installed a program you want to
use is not listed, then you may need to add it to the `PATH`.

## Adding to PATH

If you use a [package manager]({{% relref "packages" %}}) such as
[chocolatey](https://chocolatey.org/) on Windows, [homebrew](https://brew.sh/)
on macOS or [snap](https://snapcraft.io/) on Linux, then packages you install
with those commands should be automatically added to your `PATH` variable. This
saves you having to manually change the `PATH` variable. The automatic installer
for [AP](https://ap.qut.ecoacoustics.info/basics/installing.html)
will also automatically add AP to `PATH` for you.

If you need to add a program to the `PATH` manually, you can follow these steps:

{{% tabs "Add to PATH" %}}
{{% tab "Windows" %}}
1. Find where the program is installed on your computer. This will be a
   directory (folder) where the `.exe` resides.
2. Open your System Environment Variables. You can type some of "Edit environment variables for your account" in the Start Menu search box to find the settings.
3. Choose Environment Variables... in the windows that popped up
4. In the user variables section, find the Path variable, select it, and then hit the Edit button
5. Add the directory from step 1 to the end
  - Ensure a semi-colon (;) delimits the new directory from the previous ones, if you're using an older version of Windows
6. Then click OK or close all windows.
7. You will have to restart any programs for which you want to see the new value

Note: If you are using PowerShell, you could instead run
`$env:Path=$env:Path;<REPLACE-ME>` to add a directory to your `PATH`
{{% /tab %}}
{{% tab "macOS" %}}
1. Find where the program is installed on your computer. This will be a
   directory (folder) where the binary resides.
2. Check whether your terminal is using Bash or Zsh shell
   - For Bash: open or create your ~/.profile file
   - For Zsh: open or create your ~/.zshrc file
3. Add the following line to the end:

`PATH=$PATH:<REPLACE-ME>`

Where you replace the `<REPLACE-ME>` with the directory from step 1.

4. Close and save the file
5. Run the same command in your current shell (PATH=$PATH:<REPLACE-ME>) to see the change take effect immediately (or restart your shell).
{{% /tab %}}
{{% tab "Linux" %}}
1. Find where the program is installed on your computer. This will be a
   directory (folder) where the .exe resides.
2. Open or create your ~/.profile file
3. Add the following line to the end:

`PATH=$PATH:<REPLACE-ME>`

where you replace the `<REPLACE-ME>` with the directory from step 1.

4. Close and save the file
5. Run the same command in your current shell (PATH=$PATH:<REPLACE-ME>) to see the change take effect immediately (or restart your shell).
{{% /tab %}}
{{% /tabs %}}

