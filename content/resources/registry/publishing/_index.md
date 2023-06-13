---
title: How to publish a recognizer
layout: resources
---

This guide will walk you through publishing your own recognizer.

## Why publish your recognizer?

Publishing your recognizer can be your way to contribute to open science and help the development of ecoacoustics as a tool for conservation. 
By sharing your work and making it publicly available you allow others in the scientific community to benefit from and build upon your research. 
We highly appreciate and value your contributions! reproable science, and FINDable data.

## How  to publish your recognizer

We recommend using our [Recognizer Template in GitHub](https://github.com/ecoacoustics/recognizer-template) for publishing your recognizer. If you are familiar with GitHub you can proceed directly to the template. However, if you need more information on how to use it effectively, please continue reading this article.

### What is GitHub and why is it great for this purpose?
Git is a version control tool for code and text. Git allows you to track changes, collaborate with others, and manage different versions of your work. GitHub provides a web-based social platform for hosting and sharing Git repositories. GitHub is a popular way to share scientific work and is free for most of the features we need. You can read more about git and its uses from [GitHub documentation page](https://docs.github.com/en/get-started/using-git/about-git).

#### Version Control

Version control is a system for recording changes to files over time, allowing you to track any modifications and revert back to previous versions. Version control is great for making collaboration with others seamless and manageable.

#### Zenodo - DOI generation

Zenodo is an open-source project for generating DOIs that integrates well with GitHub. We recommend using Zenodo for generating a permanent DOI (Digital Object Identifier) for your recognizer. A DOI provides a unique and persistent identifier for your work, enabling others to cite it in their publications. Obtaining a DOI through Zenodo enhances the discoverability and visibility of yopur recognizer contributing to the impact and recoginition of your work within the scientific community.

### How do I use the GitHub template to publish my recognizer?

#### Step 1.  Create a GitHub account or Log in to GitHub

If you don't have a GitHub account yet,  the first step is to create one. You can create an account in [GitHub sign-in page](https://github.com/signup?ref_cta=Sign+up) following the prompts to set up your profile. If you already have a GitHub account, log in. 

#### Step 2. Use the template as a start for a repository

Once you have a GitHub account, go to the [Recognizer Template repository](https://github.com/ecoacoustics/recognizer-template). You can use the template as a base for creating a new repository by clicking the button that says _Use this template_ and then selecting _Create a new repository_.  
![The Use this template -button is located on the top right side of the page.](github-use-template.png) In the following page, input a name for your recognizer. You can choose if you want your repository to be public or private. Leave the the box that says "include all branches" unticked. Click "Create repository from template". For more detailed instructions please refer to the [README file](https://github.com/ecoacoustics/recognizer-template#readme) in the template.

#### Step 3. Add test and training data

#### Step 4. Add code and models

#### Step 5. Publish your recognizer in GitHub

#### Step 6. Generate a DOI using Zenodo

To generate a DOI for your recognizer go to [Zenodo](https://zenodo.org/login). Please use your GitHub account to log in. Once you are logged in, choose "Github" from the drop-down menu by clicking the arrow next to your email address in the top right-hand side menu. ![Picture of Zenodo drop down menu](zenodo-github-page.png) On this page you will see a list of your repositories. Flip the switch next to the recognizer repository you created to ON-position. Go to Github and [create a release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository). Zenodo will automatically generate a DOI for this release which you should now see in Zenodo GitHub page. Click either the title or the DOI-badge to go to your generated DOI-page.  Finally, you can copy the DOI-badge from the DOI-page by clicking the DOI-badge on the side panel. We recommend copying the Markdown text and adding it to your README-file in your GitHub Recocnizer Repository.

#### Step 7. Add or modify a citation information file

To make your GitHub recognizer repository easily citable we recommend adding a citation information file (`CITATION.cff`).  We have added a citation file to the recognizer template for your convenience. Simply modify the `CITATION.cff` file in your repository. ![You can edit files by clicking the pen icon.](citation-file-edit.png) Replace the author name, the ORCID, the title and the github link fields with your own details. You can also use [a CITATION.cff generation website](https://citation-file-format.github.io/cff-initializer-javascript/#/) if you require more changes in your citation file.  Once you are happy with your changes, save the file by clicking the green "Commit changes..." button. You can commit your changes directly to the main branch. If you will be collaborating with multiple authors we recommend [learning more about working with branches in GitHub](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-branches). 

#### Step 8. List your recognizer in the registry

## FAQ

### What to do when your training data set is too large?

### How do I keep my recognizer private until I'm ready to publish?

Private Embargo 
