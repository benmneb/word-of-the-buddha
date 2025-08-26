# Changelog

The `/content` here is the same as the `/epub/content`, except:

1. The pandoc specific fenced attributes for [epub:type](https://pandoc.org/MANUAL.html#the-epubtype-attribute) that docusaurus does not support or need have been removed.
1. Heading heirarchy for "The Noble Truth of the Way Leading to the Cessation of Suffering" sub-chapters have been adjusted (up one) to be semantically correct for the "one chapter per page" format of the web version. (commit 01b65be1a8b45f2551059eb755d228ee9e2b124e)
1. The copyright page has the bottom half of the content removed because that content is now on the home page.
1. Some markdown files have an explicit URL slug set in the frontmatter.
1. HTML prop `class` is changed `className` due to React.
