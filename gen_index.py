#!/usr/bin/env python
import urllib

SITE_TEMPLATE = """
<html>
<body>

<head>
<title>nipunn1313/paper_dbx_brand_theme</title>
</head>

<a href={bookmarklet}>Drag This Link to Bookmark Bar to Install</a>

</body>
</html>
"""

script = "paper_toggle_rebrand.js"
with open("paper_toggle_rebrand.js", 'r') as fp:
    contents = urllib.quote(fp.read())

with open("index.html", "w") as fp:
    fp.write(SITE_TEMPLATE.format(bookmarklet=contents))
