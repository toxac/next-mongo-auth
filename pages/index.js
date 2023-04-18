import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mongo Next Auth</title>
        <meta name="description" content="Mongo-Next Auth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-screen h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl text-center">
          Authentication<br/>NextJS-MongoDB
        </h1>

        <div className="flex flex-col w-1/3">
          <div className="bg-black text-slate-400 hover:text-slate-50 hover:rounded-full px-2 py-4">

          </div>

        </div>
      </main>

    </div>
  )
}
