---
sidebar_position: 1
sidebar_label: Installation
---

# Installation

## Prerequisites

- A global copy of [WP-CLI](https://make.wordpress.org/cli/handbook/guides/installing/)

## Install

To install the package run the following command:

```shell
wp package install eighteen73/wp-cli-tools
```

## Update

Everything documented here assumes you are running the latest copy of this package. This is especially before setting up new websites because installation preferences may have changed.

To update the package run the following command:

```shell
wp package update
```

## Development Installation

During development for this package you might want want to use your local copy within WP-CLI.

```shell
# Remove the live package (if installed)
wp package remove eighteen73/wp-cli-tools

# Install your local copy
wp package install /local/path/to/wp-cli-tools
```

Reverse the above when you're ready to return to the published version.
