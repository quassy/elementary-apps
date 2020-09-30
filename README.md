---
layout: page
title: Readme
permalink: /readme/
---

**elementary apps** is a resource for 3rd party software designed for [elementary (OS)](http://elementary.io), a fast and open desktop operating system. It was started on 1st January, 2015 at [r/elementaryos](https://www.reddit.com/r/elementaryos/comments/2r0xey/third_party_development_and_apps/), [with](http://madeforelementary.tumblr.com/) [some](https://github.com/PerfectCarl/elementary-apps) [inspiration](https://github.com/elementary-fr/ideas). It is now hosted on GitHub ([repository](https://github.com/quassy/elementary-apps)), so if you find an error or want to add an app, [file a report](https://github.com/quassy/elementary-apps/issues/new) or join the [chat](https://gitter.im/quassy/elementary-apps).

## Contribute

### App

Check the [template file](https://github.com/{{ site.footer-links.github }}/blob/gh-pages/apps/.Template.md). To add an app, name the file accordingly, fill in as much info as you know and make a pull request.

Please mind, that `web` requires a whole url including `http(s)://` (https preferred), while all specific links only require the part after the domain. So `https://github.com/lorem` becomes `github: lorem`.

Guidelines:

 * Apps should be targeted towards elementary and written in GTK3, exceptions may be made
 * Projects which have stopped working in the current release and have not seen updates in 4-6 months will be hidden by `published: false`

### Screenshot

Every app should have at least one, high-quality screenshot ([issue #2](https://github.com/quassy/elementary-apps/issues/2)).

Guidelines:

 * Preferably show the app at work instead of just the welcome screen. For example a video player should actually play a video when the screenshot is made.
 * Only capture the application window and cut off the picture right at the window border (shadows will be added by CSS), unless interaction with the desktop environment is a vital part of the app (for example Indicators).
 * Make the windows as big as necessary (should still look usable and beautiful), as small as possible.

## Links

### Blogroll

* [LME Linux](http://lmelinux.net/#2016-05-07)

### Community sites

* [Google+](https://plus.google.com/communities/104613975513761463450)
* [Reddit](https://www.reddit.com/r/elementaryos)
* [elementary forums](https://elementaryforums.com) (inofficial)

### Other elementary links

* [elementary blog](http://blog.elementary.io/#2015-04-29)
* [Launchpad project](https://launchpad.net/elementary/)
* [GitHub organisation](https://github.com/elementary)
* [Patreon](https://www.patreon.com/elementary)
* [Bountysource](https://www.bountysource.com/teams/elementary/bounties)
* [deviantArt](http://elementaryos.deviantart.com/) (designs and mockups)
* [Google+](https://plus.google.com/+elementary)
* [Twitter](https://twitter.com/elementary)

## Credits

* Backend originally based on [Jekyll Now](https://github.com/barryclark/jekyll-now)
* [Octicons](https://octicons.github.com)
* Google Webfonts for Raleway (headings), Open Sans (body), Source Code Pro (monospace)

Coming soon:

* [FontAwesome](http://fontawesome.io) icons
* Fonts [Neris](https://www.behance.net/gallery/11761457/Neris-%28free-font%29) and Source Code Pro
