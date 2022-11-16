---
title: Using unsigned apps in terminal on macOS
---

MacOS's notarisation process requires programs to be checked by Apple before
they're allowed to run on you computer. Unfortunately, this requires a yearly
payment to be made, which is not always feasible for developers to do.
Therefore, you may have difficulties when trying to run programs downloaded from
the internet that aren't notarised, and see some kind of error message:

{{< figure src="./2022-11-15-14-51-39.png" alt="unsigned_error" width="40%">}}

This is a security feature of the Gatekeeper software on macOS, and this issue
is known to occur for programs such as [Ecoacoustics Metadata Utility](https://github.com/QutEcoacoustics/emu), or
[AnalysisPrograms](https://github.com/QutEcoacoustics/audio-analysis). These
programs run in the terminal. Luckily, we can circumnavigate this issue by
changing a setting. Start by opening: 

```
System Preferences > Security and Privacy > Privacy
```

Then select _Developer Tools_ on the left hand side menu. Click the
unlock button, and then tick Terminal:

![terminal-setting](./terminalsetting.png)

Now the terminal will be able to run programs that do not meet the security
policy. 

## Help! I can't see that setting

If you're using an older version of macOS, such as High Sierra, this option may
not be visible. That's ok, because we will also present some methods to disable
the protection by using a command in our terminal. These methods will also work
on recent versions, such as Monterey. For a more detailed summary on disabling
Gatekeeper, please also see [this help page](https://disable-gatekeeper.github.io/).

### Allow a single program

The first method will allow a single program to run, without having to disable
Gatekeeper. Open a terminal and run the following command:

```sh
> xattr -dr com.apple.quarantine <your-path-here>
```

Replace \<your-path-here\> with the location of the executable file you would
like to allow. For example, the following code will allow the `emu` executable
to run, which in this example is located in `~/emu-program/`:

```sh
xattr -dr com.apple.quarantine ~/emu-program/emu
```

The program should now run successfully, and there is no need to repeat this
step in the future (for the same program). 

### Disable Gatekeeper system wide

The second method involves disabling the Gatekeeper software entirely.  

{{% hint danger %}}
**Warning**: This change is potentially dangerous. It will disable Gatekeeper
system wide, not just for terminal apps. This is not an ideal solution. Once
you have successfully opened your target program and allowed it to run, you
should then run the code to re-enable Gatekeeper. You will still be able to run
that program in the future without disabling Gatekeeper again. 
{{% /hint %}}

Inside a terminal, run the following command to disable Gatekeeper:

```sh
> sudo spctl --master-disable
```

The `sudo` command lets you run commands with elevated privileges, so you will
be prompted to input your password. After successfully running the command
above, you will be able to open unsigned programs using the terminal. Once you
have confirmed that your program or programs run successfully, you should
**re-enable** the protection. To do this, run the following command:

```sh
> sudo spctl --master-enable
```

Remember that once you have successfully opened and run an unsigned program
after disabling the protection, that program will continue to be available, even
after you re-enable the protection. 

{{% hint warning %}}
**Warning**: We know these programs are safe to run in the terminal. But you
should always be cautious when downloading and running programs from the
internet, and make sure they have been created by developers you can trust. 
{{% /hint %}}

