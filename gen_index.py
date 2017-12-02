#!/usr/bin/env python
import urllib

SITE_TEMPLATE = """
<html>
<body>

<head>
<title>nipunn1313/paper_dbx_brand_theme</title>
</head>

Drag This Link to Bookmark Bar to Install: <a href="{bookmarklet}">Paper: Toggle DBX Theme</a>

</body>
</html>
"""

script = "paper_toggle_rebrand.js"
with open("paper_toggle_rebrand.js", 'r') as fp:
    contents = fp.read()

with open("index.html", "w") as fp:
    fp.write(SITE_TEMPLATE.format(bookmarklet=contents))
