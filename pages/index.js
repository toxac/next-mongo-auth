import {useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {


  return (
    <div>
      <Head>
        <title>Mongo Next Auth</title>
        <meta name="description" content="Mongo-Next Auth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-screen flex flex-col justify-center items-center bg-white ">
        Homepage
      </div>

    </div>
  )
}
