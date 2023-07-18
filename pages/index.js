import Head from 'next/head';
import Image from 'next/image'

import Link from 'next/link';
import Layout, { siteTitle } from '@/components/Layout';
import utilStyles from "../styles/utils.module.css"
import styles from "../styles/Home.module.css"
import { getPostsData } from '../lib/post';

//SSGの場合
export async function getStaticProps() {
  const allPostsData = getPostsData();//id,title,date,thumbnail
  console.log(allPostsData);

  return {
    props: {
      allPostsData,
    }
  }
}



export default function Home({allPostsData}) {
  return (
    <Layout　home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>吾輩わがはいは猫である。名前はまだ無い。
　どこで生れたかとんと見当けんとうがつかぬ。何でも薄暗いじめじめした所でニャーニャー泣いていた事だけは記憶している。</p>
      </section>

      <section>
        <h2>📝ブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map(({id, title, date, thumbnail}) => (
            <article key={id}>
              <Link href={`/posts/${id}`}>
                <img src={`${thumbnail}`}
                  className={styles.thumbnailImage}
                />
              </Link>
              <Link href={`/posts/${id}`}>
                <a className={utilStyles.boldText}>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>{date}</small>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
