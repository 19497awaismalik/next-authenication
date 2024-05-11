
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Form = ({data}) => {
  const [user,setUser]=useState({
    name:"",
    email:""
  })
  useEffect(()=>{
    if(data){
      setUser({
        name:data.user.name,
        email:data.user.email
      })
    }

  },[data])
  const handleChange=(e)=>{
    setUser({...user,[e.target.name]:e.target.value});
  }
  return (
    <div>
         <div className='flex  flex-col  items-center my-32 h-screen'>
        <Image src={data.user.image} priority width={150} height={150} alt='' className=' rounded-full border-4 cursor-pointer border-green-700' />
        <div className=' w-[90%] md:w-[500px] my-5'>
          <input type="text" value={user.name} name='name' onChange={handleChange} className=' px-4 py-2 w-full dark:text-white text-black  rounded-md border-gray-400 border-2' />
        </div>
        <div className=' w-[90%] md:w-[500px] my-5'>
          <input type="text" value={user.email} name='email' onChange={handleChange} className='px-4 py-2 w-full  rounded-md border-gray-400 border-2 dark:text-white text-black' />
        </div>
        <button onClick={() => signOut("")} className=' border border-blue-700 px-4 py-2 rounded-md  bg-purple-900 text-white text-lg'>LogOut</button>
      </div>
      
    </div>
  )
}

export default Form