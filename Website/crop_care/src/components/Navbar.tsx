import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { House } from 'lucide-react';


let links = [
    {name:"Home", link: "/"},
    {name:"About us", link: "/"},
    {name:"Gallery", link: "/"},
    {name:"Services", link: "/"},
];
const Navbar = () => {
  return (
    <header className='w-full bg-transparent z-10 absolute flex h-12 my-2 justify-between'>
      <nav className='flex justify-center py-3 w-[43%] mx-auto text-black font-poppins rounded-full bg-slate-50'> 

        <ul className='flex items-center gap-[3.75vw] '>
            <li className='flex'><Link className='bg-slate-200 hover:bg-slate-600 hover:text-white px-3 py-1.5 rounded-full font-medium ' href={links[0].link}>{links[0].name}</Link></li>
            <li className='flex'><Link className='bg-slate-200 hover:bg-slate-600 hover:text-white px-3 py-1.5 rounded-full font-medium ' href={links[1].link}>{links[1].name}</Link></li>
            <li className='flex'><Link className='bg-slate-200 hover:bg-slate-600 hover:text-white px-3 py-1.5 rounded-full font-medium ' href={links[2].link}>{links[2].name}</Link></li>
            <li className='flex'><Link className='bg-slate-200 hover:bg-slate-600 hover:text-white px-3 py-1.5 rounded-full font-medium ' href={links[3].link}>{links[3].name}</Link></li>  
        </ul>
  
    </nav>
    </header>
  )
}

export default Navbar