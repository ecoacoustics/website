# Open Ecoacoustics website

Ecoacoustics website and content (docs, guides, links).

See: https://open.ecoacoustics.info/

[![Netlify Status](https://api.netlify.com/api/v1/badges/fdbe7ac7-c77c-4c33-a67a-28a33c2087a3/deploy-status)](https://app.netlify.com/sites/open-ecoacoustics/deploys)

## Cloud Development

You can make simple changes right here on GitHub's website.

You'll most likely want to make a change to a file inside the `content` folder.

1.  Find your file
1.  Click the edit icon (a ✏️)
1.  Make you changes
1.  Github will guide you through making a pull request

## Local Development

Ensure you have the following installed:

-   PowerShell
-   Git
-   Git LFS
-   A package manager
    -   Chocolately on Windows
    -   Snap on Linux
    -   HomeBrew on MacOS

Then for your first time:

1.  Fork the repository
1.  Clone your fork
1.  Run `./setup.ps1` (once only) This script installs hugo-extended.

Then before each session:

1.  Update your Fork
1.  Branch
1.  Run `./dev.ps1`
1.  Commit
1.  Push
1.  Create a pull request
