---
sidebar_position: 1
sidebar_label: Installation
---

# Installation

Run the following command, replacing "foobar" with the directory name that you want to use for the website.

```shell
composer create-project eighteen73/nebula foobar
```

Now you can set up your website in the usual way but note that, unlike vanilla WordPress, your web server should point to the project's `/web` subdirectory.

## Installing other branches

It may occasionally be useful to install a pre-release branch, or an older tagged version of Nebula. In that case you can use the command:

```shell
wp eighteen73 create-site foobar --nebula-branch=feature/new-feature
```
