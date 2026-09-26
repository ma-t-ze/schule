# Space Invaders – Rally integration

Source: https://github.com/ozelentok/SpaceInvaders
Upstream commit: 02ccd86d3841d90cff99b85b05adc0cd052d7570
Copyright (c) 2018 Oz Elentok. MIT license retained in LICENSE.txt.

The original Game, SpaceShip, CDetection and Const sources and image assets
are included locally. Rally.js replaces the original Main.js entry point and
jQuery-dependent canvas/input setup. No external requests or jQuery are needed.

Rally changes: fixed 480×600 logical field scaled to the available space,
one wave of 15 enemies, German status, pointer/keyboard controls, lifecycle pause,
validated same-origin completion messages, and fixes for duplicate hit deletion,
empty-wave firing, row direction removal and vertical ship clamping.

A win frees creature 2. A lost round triggers the existing 20% energy penalty
and allows a new attempt. Individual lost in-game lives do not reduce Rally energy.
