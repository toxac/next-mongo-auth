import {useState} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import GoogleIcon from '../assets/google.svg'
import GithubIcon from '../assets/github.svg'

export default function Home() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSignInWithEmail = async()=>{
    alert(JSON.stringify({email, password}, 2, null))
  }
  const handleSignInWithGoogle =async()=>{
    alert("Google")
  }
  const handleSignInWithGithub = async()=>{
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
          Nextjs-Mongodb<br/><span className="text-cyan-400">Authentication</span>
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
          <div className="bg-black  rounded-md hover:rounded-full px-4 py-2 text-center drop-shadow-lg flex justify-center items-center space-x-2 mb-2">
              <Image src={GoogleIcon} className='w-5 h-5 text-white'/>
              <button className="text-sm font-semibold text-slate-200 hover:text-slate-50" onClick={handleSignInWithEmail}>
                SIGNIN WITH EMAIL
              </button>
          </div>
          <hr/>
        </div>

        <div className="flex flex-col w-1/4 space-y-2">
          <div className="bg-black  rounded-md hover:rounded-full px-4 py-2 text-center drop-shadow-lg flex justify-center items-center space-x-2">
              <Image src={GoogleIcon} className='w-5 h-5 text-white'/>
              <button className="text-sm font-semibold text-slate-200 hover:text-slate-50" onClick={handleSignInWithGoogle}>
                SIGNIN WITH GOOGLE
              </button>
          </div>
          <div className="bg-black  rounded-md hover:rounded-full px-4 py-2 text-center drop-shadow-lg flex justify-center items-center space-x-2">
            <Image src={GithubIcon} className='w-5 h-5 text-white'/>
            <button className="text-sm font-semibold text-slate-200 hover:text-slate-50" onClick={handleSignInWithGithub}>
              SIGNIN WITH GITHUB
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}
