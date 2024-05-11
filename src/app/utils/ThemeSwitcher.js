import React from 'react'
import { useTheme } from 'next-themes'
import {BiMoon,BiSun} from 'react-icons/bi'
const ThemeSwitcher = () => {
    let {theme,setTheme}=useTheme();
  return (
    <nav>
         <div className=' flex justify-end  fixed top-10 right-10'>
    {theme==='light' ? (
            <BiMoon className='cursor-pointer' fill='black' size={25} onClick={()=>setTheme('dark')}/>
        ):   <BiSun className='cursor-pointer' fill='white' size={25} onClick={()=>setTheme('light')}/>}
    </div>
    </nav>
  )
}

export default ThemeSwitcher