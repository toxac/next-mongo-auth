import Head from 'next/head'
import Image from 'next/image'
import GoogleIcon from '../assets/google.svg'
import GithubIcon from '../assets/github.svg'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Mongo Next Auth</title>
        <meta name="description" content="Mongo-Next Auth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-screen flex flex-col justify-center items-center ">
        <h1 className="text-4xl font-bold text-center mb-6">
          Nextjs-Mongodb<br/><span className="text-cyan-400">Authentication</span>
        </h1>

        <div className="flex flex-col w-1/4 space-y-2">
          <div className="bg-black  rounded-md hover:rounded-full px-4 py-2 text-center drop-shadow-lg flex justify-center items-center space-x-2">
              <Image src={GoogleIcon} className='w-5 h-5 text-white'/>
              <p className="text-sm font-semibold text-slate-200 hover:text-slate-50">SIGNIN WITH GOOGLE</p>
          </div>
          <div className="bg-black  rounded-md hover:rounded-full px-4 py-2 text-center drop-shadow-lg flex justify-center items-center space-x-2">
            <Image src={GithubIcon} className='w-5 h-5 text-white'/>
            <p className="text-sm font-semibold text-slate-200 hover:text-slate-50">SIGNIN WITH GITHUB</p>
          </div>
        </div>
      </div>

    </div>
  )
}
