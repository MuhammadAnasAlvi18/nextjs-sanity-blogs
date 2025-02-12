import Link from 'next/link'
import React from 'react'
import { DarkMode } from './DarkMode'

const Navbar = () => {
  return (
    <div className='w-full flex items-center justify-between py-8'>
        <Link href="/" className='lg:text-5xl text-3xl text-black dark:text-white font-bold'>Sanity<span className='text-primary'>Blogs</span></Link>
        <DarkMode />
    </div>
  )
}

export default Navbar