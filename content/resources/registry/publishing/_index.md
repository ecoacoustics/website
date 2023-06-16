---
title: How to publish a recognizer
layout: resources
---

This guide will walk you through publishing your own recognizer.

## Why publish your recognizer?

Publishing your recognizer can be a valuable to contribute to open science and help the development of ecoacoustics
as a tool for conservation. 
By sharing your work and making it publicly available, you will promote reproable science enabling others in the
scientific community to benefit from and build upon your research.
We highly appreciate and value your efforts making your data [FAIR](https://ardc.edu.au/resource/fair-data/)! 

## What is GitHub and why is it great for this purpose?

Git is a version control tool for code and text. Git allows you to track changes, collaborate with others, and manage different versions of your work. GitHub provides a web-based social platform for hosting and sharing Git repositories. GitHub is a popular way to share scientific work and is free for most of the features we need. You can read more about git and its uses from [GitHub documentation page](https://docs.github.com/en/get-started/using-git/about-git).

### Version Control

Version control is a system for recording changes to files over time, allowing you to track any modifications and
revert back to previous versions. Version control is great for making collaboration with others seamless and
manageable.

### Zenodo - DOI generation

Zenodo is an open-source project for generating DOIs that integrates well with GitHub. We recommend using Zenodo for
generating a permanent DOI (Digital Object Identifier) for your recognizer. A DOI provides a unique and persistent
identifier for your work, enabling others to cite it in their publications. Obtaining a DOI through Zenodo enhances
the discoverability and visibility of yopur recognizer contributing to the impact and recoginition of your work
within the scientific community.

## How to publish your recognizer

We recommend using our [Recognizer Template in GitHub](https://github.com/ecoacoustics/recognizer-template) for
publishing your recognizer. If you are familiar with GitHub you can proceed directly to the template. However, if you
need more information on how to use it effectively, please continue reading this article.

### What goes in the repository?

**One or more recognizers, which should consist of:**
- Code to run the recognizers (e.g. scripts)
- The code for the recognizers or scripts to download and install the software/packages needed
- Test and training data (or instructions on how to access said data)
- Models or artifacts (or instructions on how to access said data)

**A README.md file that describes:**

- What species are detected by the recognizer.
- The performance of the recognizer.
- License and attribution information.
- Instructions for setting up and running the recognizer

### How do I use the GitHub template to publish my recognizer?

#### Step 1.  Log in to GitHub
If you already have a GitHub account, [log in](https://github.com/). If you are new to GitHub, see [GitHub resources for beginners](github-starter).

#### Step 2. Use the template as a start for a repository

Once you are logged in, go to the [Recognizer Template repository](https://github.com/ecoacoustics/recognizer-template). You can use the template as a base for creating a new repository by clicking the button that says _Use this template_ and then selecting _Create a new repository_.  
![The Use this template button is located on the top right side of the page.](github-use-template.png)

Then, in the following page:

- input a name for your recognizer repository. 
 
{{% hint info%}}
You should use `kebab-case` (all lower case, using hyphens instead of spaces) to title your repository as this is the convention used for most repositories on GitHub. For example:

- A repository that contained a recognizer for a _Red-tailed Black-cockatoo_ might be named `red-tailed-black-cockatoo-recognizer`.
- a project that detects frogs in SE Queensland might be named `se-queensland-frogs-recognizer`
- repository that hosts all the recognizers for your group might simply be called `ecoacoustics-recognizers`

{{% /hint %}}
   
- You can choose if you want your repository to be public or private. Private is a good choice if you're not ready to
publically publish but you want to get started. See
[Step 5. Publish your recognizer in GitHub](#step-5-publish-your-recognizer-in-github) for more information.
 
- Leave the box that says _include all branches_ unticked.
- Click _Create repository from template_. 
- Then review the instructions in the `README.md` file in your new repository

#### Step 3. Add test and training data

#### Step 4. Add code and models
If you want to publish __code__ with the recognizer, add it to the `src` folder.

Similarly, if you have __a trained model or other artefacts__ produced while developing your recognizer,
put them to `artifacts` folder.

#### Step 5. Publish your recognizer in GitHub
Once you are ready to publish your recognizer you can do so by
[making your repository public](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-fetures/managing-repository-settings/setting-repository-visibility). 
1. In your repository go to the Settings tab
![Picture of GitHub settings tab](github-settings-tab.png)
2. In the _General_ section, scroll to the bottom "Danger Zone"
3. Click the button _Change visibility_ and select _Change to public_
![Screenshot of Visibility settings](github-change-visibility.png)

#### Step 6. Generate a DOI using Zenodo

Generating a DOI will make this repository [Findable and Citable](https://ardc.edu.au/resource/fair-data/),
enabling others in the scientific community reference and build upon your work.

1. Go to [Zenodo](https://zenodo.org/login).
2. Use your GitHub account to log in.
3. Once you are logged in, choose "Github" from the drop-down menu by clicking the arrow next to your email address
in the top right-hand side menu. 
![Picture of Zenodo drop down menu](zenodo-github-page.png)
4. On this page you will see a list of your repositories. Flip the switch next to the recognizer repository you
created to ON-position.
![Picture of Zenodo repository switch](zenodo-repo-switch.png)
5. Go to Github and [create a release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository).
Zenodo will automatically generate a DOI for this release which you should now see in Zenodo GitHub page.
Zenodo will generate a new DOI version for each release.
[Read about Zenodo Versioning](https://help.zenodo.org/#versioning).
6. Click either the title or the DOI-badge to go to your generated DOI-page. 
7. Finally, you can copy the DOI-badge from the DOI-page by clicking the DOI-badge on the side panel.
![Picture of Zenodo DOI-badge in the side panel](zenodo-doi-badge.png)
We recommend copying the Markdown text and adding it to your README-file in your GitHub Recocnizer Repository.

#### Step 7. Add or modify a citation information file

To make your GitHub recognizer repository easily citable we recommend adding a citation information file (`CITATION.cff`). 

1. Please use the
[CITATION.cff generation website](https://citation-file-format.github.io/cff-initializer-javascript/#/) to create a
`CITATION.cff` file.
2. Replace the `CITATION.cff` file in your repository with the file you generated.
![Screenshot of the Citation.cff file.](citation-file-edit.png)
You can edit files in your browser by clicking the pen icon.
3. Once you are happy with your changes, save the file by clicking
the "Commit changes..." button. You can commit your changes directly to the main branch. 
4. If you will be collaborating with multiple authors we recommend [learning more about working with branches in GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches). 

#### Step 8. List your recognizer in the registry
Please see the [Contribute to the registry](/resources/registry/contribute/) page. 

## FAQ

### What to do when your training data set is too large?

Storing data in a repository is not always the right choice. In each folder where it is relevant you should include:

1. Small sets of audio samples 
2. A README.md containing
    - provenance of any data included
    - instructions on how to obatain more data
3. Any scripts needed to download data from remote repositories

For larger datasets it is not ideal to store the data in the GitHub repository. In this case the test and training data should be stored via a different method. Some options you can use are:

- [An ecoacoustics repository](/resources/repositories/)
- A bioacoustics repository
    - like Xeno Canto
- Cloud storage options like DropBox, CloudStor, OneDrive, etc.
- Commersial services like Amazon S3, Google Cloud Storage, etc.

### How do I keep my recognizer private until I'm ready to publish?
It is a good idea to set up a repository as soon as you start working on your recognizer, however there are good reasons to keep your repository private until you're ready to publish it. 

__Reasons to keep your repository private:__
- Waiting to publish the recognizer along with a publication.
- Keeping sensitive recognizers hidden until it is safe to release them.
- Allowing you time to develop your work before you release it.
- GitHub has strong access control mechanisms so you can invite specific people to collaborate with you until you're ready to release the recognizer publicly.

After these concerns have passed it's a great time to publish your recognizer. You can do so by changing the repository settings:

#### How to change the repository settings?
1. In your repository go to the Settings tab
2. In the _General_ section, scroll to the bottom of the page to heading  _Danger Zone_
3. Click the button _Change visibility_ and select  _Change to private_. Once you are ready to publish, go to this same setting and select _Change to public._
![Screenshot of Visibility settings](github-change-visibility.png)

See more in GitHub Documentation:
[setting repository visibility](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/managing-repository-settings/setting-repository-visibility).

### Who owns my recognizer? 
You! That's one of the reasons we think GitHub is great: you control and own your IP and this guide is just helping you do that.

### Is the template and GitHub still a good choice for a recognizer that will only ever be private? 
Yes! version control, access control, common pattern for publishing, all other advantages listed in this article.
