---
published: false
layout: app
category: app
created: 2014-10-19
updated: 2015-03-21

title: Calculator
permalink: /Calculator/
title_obvious: true
generic: Calculator
description: 'A fast and beautiful calculator. The UI is rather simple, but scientific functions and mathematical constants can be typed in. It has a history functionality for the current session and clipboard support.'
license: GPL v3

authors:
  - name: Lars Berscheid
    url: 'https://launchpad.net/~siasola'
    mail: 'siasola@gmail.com'

links:
  - type: Launchpad
    url: elementarycalculator
  - type: Build
    url: 'bazaar.launchpad.net/~siasola/elementarycalculator/trunk/view/head:/INSTALL'
  - type: Readme
    url: 'bazaar.launchpad.net/~siasola/elementarycalculator/trunk/view/head:/README'
  - type: License
    url: 'http://bazaar.launchpad.net/~siasola/elementarycalculator/trunk/view/head:/COPYING'
  - type: Authors
    url: 'http://bazaar.launchpad.net/~siasola/elementarycalculator/trunk/view/head:/AUTHORS'

installation:
  - system: elementary
    info:
    - version: 0.3
      repository: 'ppa:siasola/ppa'
      package: elementary-calculator
      type: unstable
  - system: Ubuntu
    info:
    - version: 14.04
      repository: 'ppa:siasola/ppa'
      package: elementary-calculator
      type: unstable
    - version: 14.10
      repository: 'ppa:siasola/ppa'
      package: elementary-calculator
      type: unstable

tags:
  - GTK3
  - Vala
  - Freya
---

*As of 2015-03-21 the [last commit](https://code.launchpad.net/elementarycalculator) was on 2014-10-23, the project might be dead. By now elementary features [Pantheon Calculator](/Pantheon Calcultor) as a new default and native calculator.*