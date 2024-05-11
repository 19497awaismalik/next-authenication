import { signIn } from 'next-auth/react'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'

const SocialAuthenication = () => {
  return (
    <div>
         <div className=' flex items-center flex-col justify-center h-screen' >
          <h1 className=' text-black dark:text-white text-xl my-4'>Social Authenication</h1>
         <div className=' flex'>
            <FcGoogle size={50} onClick={() => signIn("google")}  className=' cursor-pointer mx-2'/>
       
          <AiFillGithub size={50}  onClick={() => signIn("github")} className=' mx-3 cursor-pointer dark:text-white text-black'/>
        
         </div>
        </div>
    </div>
  )
}

export default SocialAuthenication