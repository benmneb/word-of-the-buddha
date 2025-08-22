# Building

Install [pandoc](https://pandoc.org/installing.html).

From the root directory, run:

> pandoc content/*.md -o epub/build/WOTB2.epub --toc --toc-depth=4 --metadata-file=epub/metadata.yml --epub-title-page=false

Current version built with pandoc 3.6.4.
