# Changelog

These are all changes from the second edition PDF to the EPUB.

As this is the second major edition of the book, and the EPUB includes changes from the PDF, which includes changes from the print version, I've versioned this 2.2.0 in the metadata file.

Page numbers below refer to pages in the second edition of the PDF.

* Most pages: The sutta references. These have had to be changed to be inline rather than outside the main flow of the document to (1) work with the reflowable nature of EPUB files, (2) ensure readability across devices and (3) preserve semantic markup. They’ve been given a light border to differentiate them from the rest of the content.
* Most lists: The print and PDF editions have lists styled like `(1) (2)` etc but here they have `1. 2.` etc because CSS `list-style-type` can’t do parentheses. A work around with `::before` came close but pure CSS has no way to “auto-size” the `::before` element based on its content and still make the text align consistently, so it still looks much better just using the default list styling.
* Most images: All except the cover and Ajahn Brahm's photo in the About the Author chapter have been removed for optimisation, accessibility, and compatibility. Full-page images used as backgrounds can cause issues on devices that allow users to change font sizes, colours, and contrast (which is all devices, I believe).
* All fonts: There are 7 different embedded base fonts in the PDF—Aniyah, MercuryDisplay, AdobeGaramondPro, BentonSans, AdobeCaslonPro, MHeiHK, TimesNewRoman—and 21 if including variants of these. In the EPUB there is zero. Instead, it prefers serif system fonts native to e-readers. This optimises file size without neglecting readability.
* Page 5: Preface to the Second Edition. The text “Upon printing the second addition, we have amended a few further additional errors - these will be updated in the digital editions of the second edition {then lists them}“ has been removed, as this list has grown considerably, was not even fixed properly in the PDF (Page 79 “asana” was incorrectly <em>un</em>italicised), and has nothing to do with Bhante Kimbila or Bhante Dayālu.
* Page 8, Contents: In “The Noble Truth of Suffering” chapter, the sub-chapter “Dependency on Consciousness” is listed as a sub-chapter of “The Five Components of Existence” but its actually a sub-chapter one level deeper, of “Consciousness Component of Existence”.
* Inconsistent Pali italicisation:
    * Page 67: “adhicitta” is not italicised, but is hardly as “commonly understood” as dukkha and dhammā.
    * Page 68: “nāma-rūpa” and “citta” are unitalicised, everywhere else they are. On this page too, “phassa” is unitalicised, it does not appear anywhere else in the book. I consider this an oversight like the other two just mentioned on the same page.
    * Page 79: “asava” is not italicised three times. I pointed out this inconsistency in the print version and it was changed to be all non-italics… but this word is definitely as or less “commonly understood” than other italicised words, so should also be.
    * Page 102: Glossary, all of “(ālaya-rāma, ālaya-rata, ālaya-sammudita)” is now italicised.
    * Page 103: “SABBA-KĀYA-PATISAṀVEDĪ” explanation, “ānāpānassati” is not italicised, unlike all mentions earlier.
* Page 48: “mind objects” is listed twice in the sentence “Thus the mind is not the permanent essence; mind-objects, mind-consciousness, mind-objects, experience and wanting—all these are not a permanent essence.” (This was carried through from the first edition.) The second instance should be “mind-contact”.
* Page 52: No line-break or even white-space between Khemeka’s reply and the “\[Elder bhikkhus:]” next question. It now has a paragraph break.
* Page 71: “The Seven Awakening Factors” section returns to content from MN 10, but without the reference for it, the last reference is still from the five hindrance similes at MN 39.
* Then on Page 73: “Summary of Satipaṭṭhāna” returns the correct MN 10 reference, just way too late, this reference has been removed after the correction on page 71.
* Page 88: In “5.21 Irreverent”, to be consistent with the rest of the sequence, it should have a paragraph break between these two sentences, “Without fulfilling virtuous behaviour, it is impossible for them to fulfil right view.” and “Without fulfilling right view, it is impossible for them to fulfil jhāna (sammā samādhi).” And the same thing when it’s in the positive sense.
* Page 89: In “8.81 Mindfulness”, to be consistent, these two sentences should have a paragraph break, “When there is virtuous behaviour, jhāna (sammā samādhi) possesses its necessary cause.” and “When there is jhāna, the knowledge and vision of things as they really are possesses its necessary cause.” This is already paragraph-broken correctly in the negative sense a bit earlier in the page.
* Page 101: Abbreviations. Tables are even uglier on EPUBs than they are in browsers, so these sutta reference abbreviations have been changed to be styled appropriately for the platform. This is both prettier and more readable across different devices and settings.
* Page 102: Glossary. Style updated to be more appropriate for the platform with semantic markup.
* Back cover: There are no back covers on ebooks, but this content should definitely be included, so in the EPUB it has been given the title “About the Author” instead of “Ajahn Brahm” because it is more descriptive of its content when read in a table of contents. All other text remains unchanged.
