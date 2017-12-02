#!/usr/bin/env python
import urllib

script = "paper_toggle_rebrand.js"
with open("paper_toggle_rebrand.js", 'r') as fp:
    contents = urllib.quote(fp.read())

with open("index.html", "w") as fp:
    fp.write("<a href={}>Drag to Bookmarks to Install</a>".format(contents))
