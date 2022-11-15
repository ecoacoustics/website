---
title: Using unsigned apps in terminal on macOS
---

MacOS's notarisation process requires programs to be checked by Apple before
they're allowed to run on you computer. Unfortunately, this requires a yearly
payment to be made, which is not always feasible for developers to do.
Therefore, you may have difficulties when trying to run programs downloaded from
the internet that aren't notarised, and see some kind of error message:

{{< figure src="./2022-11-15-14-51-39.png" alt="unsigned_error" width="40%">}}

This issue is known to occur for programs such as [Ecoacoustics Metadata Utility](https://github.com/QutEcoacoustics/emu), or
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
not be visible. That's ok, because we can also disable the protection by using a
command in our terminal. This method will also work on recent versions,
such as Monterey. 

```sh
> sudo spctl --master-disable
```

The `sudo` command lets you run commands with elevated privileges, so you will
be prompted to input your password. After successfully running the command
above, you will be able to open unsigned programs using the terminal. If you
wish to enable the protection again later, you can use:

```sh
> sudo spctl --master-enable
```

Note that once you have successfully opened and run an unsigned program after
disabling the protection, that program will continue to be available, even after
you re-enable the protection. 

{{% hint warning %}}
**Warning**: We know these programs are safe to run in the terminal. But you
should always be cautious when downloading and running programs from the
internet, and make sure they have been created by developers you can trust. 
{{% /hint %}}

