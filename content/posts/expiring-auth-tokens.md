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

## Effected Users

If you are using the Ecosounds or the A2O through the website interface, you will not be effected by these changes.

These authentication changes will effect the following (but not limited to) users who run automated scripts such as:

- R scripts
- Powershell scripts
- HPC scripts
- Automated workflow scripts

Effected users may not experience the breaking changes immediately, as they are likely to arise when scripts run across
the _00:00+UTC_ boundary.
Meaning that effected users are **strongly advised** to update their scripts
to prevent intermittent failures.

## Expiring Authentication Tokens

Authentication tokens now last for 24 hours.
Every day at midnight ([00:00 UTC](https://dateful.com/convert/utc?t=12am)) all authentication tokens will expire and
can no longer be used to perform actions such as download audio or access projects.

If you are using, scripts or programs to access Ecosounds or A2O data, you will be effected by these changes and will
start to notice `401 Unauthorized` responses.

### Suggested Changes (expiring tokens)

Effected users are **strongly advised** to update their scripts to either

- Prompt for an authentication token when a 401 response is received
- Use a username and password to fetch a new authentication token when a `401 Unauthorized` response is received

## Changes to Authentication Token Format

Using the authentication token in HTTP `Authentication` header now requires you to explicitly add quotation marks
around the authentication token.

### Suggested Changes (Authentication Token Format)

Scripts or programs that access the workbench-api will need to quote the `token`
sent in the HTTP `Authentication` header.

```diff
- Authentication: Bearer token=AAAAAAAAAAAAAAAA-AAAAAAAAAAAAAAAAAAAAAAAAAA
+ Authentication: Bearer token="AAAAAAAAAAAAAAAA-AAAAAAAAAAAAAAAAAAAAAAAAAA"
```
