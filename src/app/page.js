'use client'
import { signOut, useSession } from 'next-auth/react'
import React from 'react'
import { signIn } from 'next-auth/react'
import Image from 'next/image'


import { FcGoogle } from 'react-icons/fc'
import ThemeSwitcher from './utils/ThemeSwitcher'
import Form from './utils/Form'
import Loading from './utils/Loading'
import SocialAuthenication from './utils/SocialAuthenication'
const page = () => {
  let { data, status } = useSession();

console.log(process.env.NEXT_GITHUB_CLIENT_ID)
  return (
    <>
      <ThemeSwitcher />
      {data && <Form data={data}  />}

      {status === "loading" && <Loading />}


      {status === "unauthenticated" &&
        <SocialAuthenication />
      }
    </>
  )
}

export default page