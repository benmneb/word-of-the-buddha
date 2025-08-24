import type { ReactNode } from 'react'
import Link from '@docusaurus/Link'

export default function Home(): ReactNode {
  return (
    <main className="home">
      <figure>
        <img
          src={require('@site/static/img/cover-lg.png').default}
          alt="The Word of the Buddha cover designed in Hong Kong by Pressroom Printer and Designer Ltd"
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
  )
}
