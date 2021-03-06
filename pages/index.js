import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>hello I am a banana.</p>
      </section>
      <main>
        <p className="title">
          Read <Link href="/posts/first-post"><a>this page!</a></Link>
        </p>
      </main>
    </Layout>
  )
}