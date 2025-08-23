# Building

Install [pandoc](https://pandoc.org/installing.html).

From the `/epub` directory, run:

> pandoc content/*.md -o build/WOTB2.epub --toc --toc-depth=4 --metadata-file=metadata.yml --epub-title-page=false

Current version built with pandoc 3.6.4.
