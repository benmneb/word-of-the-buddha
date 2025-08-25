import type { ReactNode } from 'react'
import Link from '@docusaurus/Link'
import Head from '@docusaurus/Head'

export default function Home(): ReactNode {
  return (
    <>
      <Head>
        <link
          rel="preload"
          as="image"
          href="/img/cover-lg.webp"
          imageSrcSet="/img/cover-sm.webp 480w,
                  /img/cover-md.webp 505w,
                  /img/cover-lg.webp 732w,
                  /img/cover-xl.webp 1200w"
          imageSizes="(max-width: 580px) 90vw,
                 (max-width: 996px) 505px,
                 (max-width: 1080px) 732px,
                 1200px"
          fetchPriority="high"
        />
      </Head>

      <main className="home">
        <figure>
          <img
            src="/img/cover-xs.webp"
            srcSet="/img/cover-sm.webp 480w,
                    /img/cover-md.webp 505w,
                    /img/cover-lg.webp 732w,
                    /img/cover-xl.webp 1200w"
            sizes="(max-width: 580px) 90vw,
                   (max-width: 996px) 505px,
                   (max-width: 1080px) 732px,
                   1200px"
            alt="The Word of the Buddha by Ajahn Brahm. Cover designed in Hong Kong by Pressroom Printer and Designer Ltd"
            onLoad={(e) => (e.currentTarget.style.filter = 'blur(0)')}
          />
        </figure>
        <section>
          <hgroup>
            <h1>The Word of the Buddha</h1>
            <h2>
              An Outline of the Teachings of the Buddha
              <br />
              in the Words of the Pāli Canon
            </h2>
            <p className="font-small-caps">Second Edition</p>
            <p>
              Compilation based on Ñāṇatiloka Mahāthera’s booklet
              <br />
              <em>The Word of the Buddha</em>
            </p>
            <p>
              Updated with translations from Bhikkhu Bodhi
              <br />
              Edited by Ajahn Brahm
            </p>
          </hgroup>
          <nav>
            <Link className="button button--primary button--lg" to="/forward">
              Read online
            </Link>
            <div className="button-group button-group--block">
              <Link className="button button--secondary">Get EPUB</Link>
              <Link className="button button--secondary">Get PDF</Link>
            </div>
          </nav>
        </section>
      </main>
    </>
  )
}
