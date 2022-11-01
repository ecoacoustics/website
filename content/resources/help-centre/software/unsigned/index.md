---
title: Using unsigned apps in terminal on macOS
---

MacOS's notarisation process requires programs to be checked by Apple before
they're allowed to run on you computer. Unfortunately, this requires a yearly
payment to be made, which is not always feasible for developers to do.
Therefore, you may have difficulties when trying to run programs downloaded from
the internet that aren't notarised, and see some kind of error message. 

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

{{% hint warning %}}
**Warning**: We know these programs are safe to run in the terminal. But you
should always be cautious when downloading and running programs from the
internet, and make sure they have been created by developers you can trust. 
{{% /hint %}}

