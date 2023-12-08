---
sidebar_position: 5
sidebar_label: style-guide
---

# Publish a Style Guide

This command will publish our **/style-guide** and its child pages.

- **/style-guide/kitchen-sink**    
Popular HTML elements to assist with the validation of base CSS styling.
- **/style-guide/blocks**    
A curated selection of page builder blocks that are commonly used.
- **/style-guide/patterns**    
All teh block patterns that have been registered in the theme.

:::caution

Existing content at any of the above paths will be overwritten.

:::

## Running the command

By default it will ask for confirmation before overwriting each page but adding `--force` will instruct the command to automatically overwrite the pages without asking.

```bash
wp eighteen73 style-guide

# or to suppress overwrite warnings
wp eighteen73 style-guide --force
```

:::tip

If you have an alias set up you can use this to publish content to a live website as follows:

```
wp @production eighteen73 style-guide
```

:::
