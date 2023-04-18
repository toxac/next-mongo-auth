import {useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import GoogleIcon from '../assets/google.svg'
import GithubIcon from '../assets/github.svg'
import GithubBlackIcon from '../assets/github_black.svg'

export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignInWithEmail = ()=>{
    alert(JSON.stringify({email, password}, 2, null))
  }
  const handleSignInWithGoogle =()=>{
    alert("Google")
  }
  const handleSignInWithGithub = ()=>{
    alert("Github")
  }

  return (
    <div>
      <Head>
        <title>Mongo Next Auth</title>
        <meta name="description" content="Mongo-Next Auth" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="w-full h-screen flex flex-col justify-center items-center bg-white ">
        <h1 className="text-4xl font-bold text-center mb-6">
          Nextjs-Mongodb<br/><span className="text-teal-500">Authentication</span>
        </h1>
        <div className="flex flex-col w-1/4 space-y-2 mb-6">
          <input 
            type="text" 
            className="h-8 p-3 border-2 border-slate-700 rounded-md mb-1 " 
            name="email" 
            value={email} 
            onChange={(e)=> setEmail(e.target.value)} 
            placeholder='Email' 
          />
          <input 
            type="password" 
            className="h-8 p-3 border-2 border-slate-700 rounded-md mb-2 " 
            name="password" 
            value={password} 
            onChange={(e)=> setPassword(e.target.value)} 
            placeholder='Password' 
          />
          <button className="bg-black  rounded-md hover:rounded-full px-4 py-2 text-center drop-shadow-lg flex justify-center items-center space-x-2 mb-4" onClick={handleSignInWithEmail}>
              <Image src={GoogleIcon} className='w-5 h-5 text-white'/>
              <p className="text-sm font-semibold text-slate-200 hover:text-slate-50">
                SIGNIN WITH EMAIL
              </p>
          </button>
          <hr className='border-teal-500 mt-2'/>
        </div>

        <div className="flex flex-col w-1/4 space-y-2">
          <button className="bg-black  rounded-md hover:rounded-full px-4 py-2 text-center drop-shadow-lg flex justify-center items-center space-x-2" onClick={handleSignInWithGoogle}>
              <Image src={GoogleIcon} className='w-5 h-5 text-white'/>
              <p className="text-sm font-semibold text-slate-200 hover:text-slate-50">
                SIGNIN WITH GOOGLE
              </p>
          </button>
          <button className="bg-black  rounded-md hover:rounded-full px-4 py-2 text-center drop-shadow-lg flex justify-center items-center space-x-2" onClick={handleSignInWithGithub}>
            <Image src={GithubIcon} className='w-5 h-5 text-white'/>
            <p className="text-sm font-semibold text-slate-200 hover:text-slate-50">
              SIGNIN WITH GITHUB
            </p>
          </button>
        </div>
        <div className="flex mt-10 space-x-2 justify-center items-center">
          <p className="text-sm font-semibold text-slate-700 hover:text-slate-800">
            Docs and Code <span className="text-xl">&rarr;</span>
          </p> 
          <a href="https://github.com/toxac/next-mongo-auth" target="_blank"><
            Image src={GithubBlackIcon} className='w-5 h-5 text-white'/>
          </a>
        </div>
      </div>

    </div>
  )
}
