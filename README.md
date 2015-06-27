---
layout: page
title: Readme
permalink: /readme/
---

A ressource for 3rd party software designed for [elementary (OS)](http://elementary.io). If you find an error or want to add an app, [file an issue](https://github.com/quassy/elementary-apps/issues/new) or join the [chat](https://gitter.im/quassy/elementary-apps). Check the [about page](http://quassy.github.io/elementary-apps/about/) for general info.

## Contribute

### App

Check the [template file](https://github.com/quassy/elementary-apps/blob/gh-pages/apps/.Template.md). To add an app name the file accordingly and fill in as much info as you know.

Please mind, that `web` requires a whole url including `http(s)://` (https preferred), while all specific links only require the part after the domain. So `https://github.com/lorem` becomes `github: lorem`.

Guidelines:

 * Apps should be targeted towards elementary and written in GTK3, exceptions may be made
 * Projects which have stopped working in the current release and have not seen updates in 4-6 months will be hidden by `published: false`

### Screenshot

Every app should have at least one, high-quality screenshot ([issue #2](https://github.com/quassy/elementary-apps/issues/2)).

Guidelines:

 * Preferably show the app at work instead of just the welcome screen. For example a Video player should actually play a video when the screenshot is made.
 * Only capture the application window and cut off the picture right at the window border (shadows will be added by CSS), unless interaction with the desktop environment is a vital part of the app (for example Indicators).
 * Make the windows as big as necessary (should still look usable and beautiful), as small as possible.

## Credits

 * Backend originally based on [Jekyll Now](https://github.com/barryclark/jekyll-now)
 * [Octicons](https://octicons.github.com)
 * Google Webfonts for Raleway (headings), Open Sans (body), Source Code Pro (monospace)
