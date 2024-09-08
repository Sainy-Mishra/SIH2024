"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { PiHouseLight, PiSun, PiPaperPlaneTiltLight } from "react-icons/pi";
import { CiSettings } from 'react-icons/ci';
import { useRouter } from 'next/navigation';


let links = [
  { name: "Home", link: "#" },
  { name: "About us", link: "#aboutus" },
  { name: "Services", link: "#services" },
  { name: "Contact Us", link: "#contact" },
];
const Navbar = () => {
  const router = useRouter();
  return (
      <div className="pt-5 min-h-max mb-5">
        <div className="flex flex-row justify-between mx-10">
          <div className="ml-7 align-middle text-xl">Logo</div>
          <div className='fixed left-[27%] top-3 z-10 w-[45%]'>
            <nav className='flex justify-evenly py-2 mx-auto text-black rounded-full bg-trasparent bg-slate-50 bg-opacity-40 border-2 border-opacity-30'>
              <ul className='flex flex-row items-center gap-[2vw] '>
                <li onClick={() => router.push(links[0].link)} className='flex flex-row gap-2 bg-slate-200 hover:bg-slate-600 hover:text-green-100 px-3 py-1.5 rounded-full font-medium cursor-pointer '><PiHouseLight className='text-2xl' />{links[0].name}</li>
                <li onClick={() => router.push(links[1].link)} className='flex flex-row gap-2 bg-slate-200 hover:bg-slate-600 hover:text-green-100 px-3 py-1.5 rounded-full font-medium cursor-pointer '><PiSun className='text-2xl' />{links[1].name}</li>
                <li onClick={() => router.push(links[2].link)} className='flex flex-row gap-2 bg-slate-200 hover:bg-slate-600 hover:text-green-100 px-3 py-1.5 rounded-full font-medium cursor-pointer '><CiSettings className='text-2xl' />{links[2].name}</li>
                <li onClick={() => router.push(links[3].link)} className='flex flex-row gap-2 bg-slate-200 hover:bg-slate-600 hover:text-green-100 px-3 py-1.5 rounded-full font-medium cursor-pointer '><PiPaperPlaneTiltLight className='text-2xl' />{links[3].name}</li>
              </ul>
            </nav>
          </div>
          <div className="mr-7 align-middle">
            <button onClick={()=>{router.push(`/login`)}} className="bg-blue-500 cursor-pointer hover:text-green-100 hover:bg-blue-950 text-white p-[0.5rem] rounded-lg">Get Started</button>
          </div>
        </div>
      </div>
  )
}

export default Navbar