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

These are the source images that have been compressed and resized to be used in the EPUB and web versions.
