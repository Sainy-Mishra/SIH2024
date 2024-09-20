"use client"
import React from 'react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { PiHouseLight, PiSun, PiPaperPlaneTiltLight, PiArrowRightLight } from "react-icons/pi";
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
  const session = useSession();
  return (
      <div className="pt-5 min-h-max mb-24">
        <div className="flex flex-row justify-between mx-10">
          <div className="ml-7 items-center align-middle flex flex-row text-xl">
            <Image src={"/assets/logo.png"} onClick={() => router.push(links[0].link)} alt="logo" className='cursor-pointer' width={50} height={50} />
            <div className='border-l-2 align-middle items-center border-black p-2 h-full'>
              AgriCure
            </div>
          </div>
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
          {session?.status === "authenticated" && (
          <div onClick={() => router.push("/dashboard")} className="mr-7 flex flex-row items-end rounded-md border-2 align-middle hover:bg-slate-600 hover:text-green-100 cursor-pointer bg-white bg-opacity-30 px-2 pb-3">
            <div className='mx-2'>Dashboard</div>
            <Image src={session?.data.user?.image || ''} alt='profile' width={25} height={40} className='rounded-full text-2xl' />
          </div>
          )}
          {session?.status === "unauthenticated" && (
          <div onClick={() => router.push("/login")} className="mr-7 flex flex-row items-end rounded-md border-2 align-middle hover:bg-slate-600 hover:text-green-100 cursor-pointer bg-white bg-opacity-30 px-2 pb-3">
            <div className='flex'>
              <div className='mx-2'>
                Get Started
              </div>
              <PiArrowRightLight className='text-2xl' /></div>
          </div>
          )}
        </div>
      </div>
  )
}

export default Navbar