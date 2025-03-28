---
title: "Breaking Changes to Ecosounds & A2O Authentication"
date: 2025-03-14T14:20:00+10:00
image: "/images/ecosounds-banner-image.jpg"
imageCredit: "QUT Ecoacoustics Staff"
tags:
    - News
    - Technical
---

The Acoustic Workbench software that powers sites such as [Ecosounds](https://www.ecosounds.org/) and
[A2O](https://data.acousticobservatory.org/) has been upgraded with enhanced security features.
These changes will break existing workflows and automated scripts that depend on authentication token.
<!--more-->
## Affected Users and Uses

If you are using the Ecosounds or the A2O through the website interface, you will not be affected by these changes.

These authentication changes will affect users who run automated scripts such as:

- R scripts
- Powershell scripts
- HPC scripts
- Automated workflow scripts

Affected users are **strongly advised** to update their scripts
to prevent failures.

## Expiring Authentication Tokens

Authentication tokens now last for 24 hours after their last use.

If a token has expires, logging in to the website that issued it (either
Ecosounds or the A2O) will generate a new authentication token you can use.

If you are using scripts or programs to access Ecosounds or A2O data, you will be affected by these changes and will
start to notice `401 Unauthorized` responses.

### Suggested Changes (expiring tokens)

Affected users are **strongly advised** to update their scripts to either

- Prompt for an authentication token when a 401 response is received
- Use a username and password to fetch a new authentication token when a `401 Unauthorized` response is received
- (Coming soon) Authenticate using a json web token (JWT)

## Changes to Authentication Token Format

We always expected the token to be quoted with double quotes.
However, the quotes weren't required. Now the quotes are required and you may
need to add quotation marks around the authentication token in your scripts.

### Suggested Changes (Authentication Token Format)

Scripts or programs that access the workbench-api will need to quote the `token`
sent in the HTTP `Authentication` header.

```diff
- Authentication: Bearer token=AAAAAAAAAAAAAAAA-AAAAAAAAAAAAAAAAAAAAAAAAAA
+ Authentication: Bearer token="AAAAAAAAAAAAAAAA-AAAAAAAAAAAAAAAAAAAAAAAAAA"
```

## Support

If you need any help adapting your scripts, please reach out and we'll do the
best we can to support you.
