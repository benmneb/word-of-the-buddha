# The Word of the Buddha

PDF version.

The `/images` here are full quality raw exports from the PDF file, using:

```zsh
pdfimages -png WOTB2.pdf images/
```

Except the `cover.png`, as thats a combination of images:

```bash
pdftoppm -f 1 -l 1 -png WOTB2.pdf images/cover
```
