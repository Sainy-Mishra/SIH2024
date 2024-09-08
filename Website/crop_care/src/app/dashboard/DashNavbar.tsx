import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Logout from '@/components/logout';
import { useRouter } from 'next/navigation';

let links = [
    {name:"Home", link: "/"},
    {name:"Dashboard", link: "#dashboard"},
    {name:"Contact us", link: "/#contact"},
];

const DashNavbar = ({session}: any) => {
    const router = useRouter();
    return (
    <div>
        {session.status === "authenticated" && (
        <>
            <nav className='flex justify-end items-center py-3 w-full text-black font-poppins bg-slate-950'>
                
                <div className='ml-5 mr-auto py-1 text-xl text-white cursor-pointer'>
                    Logo
                </div>  
                
                <ul className='flex gap-[1vw] pr-4.75 mr-2'>
                    <li onClick={()=>{
                        router.push(links[0].link)
                    }} className='flex hover:bg-emerald-300 hover:text-black text-white px-3 py-1.5 rounded-md font-medium cursor-pointer'>{links[0].name}</li>
                    <li onClick={()=>{
                        router.push(links[1].link)
                    }} className='flex hover:bg-emerald-300 hover:text-black text-white px-3 py-1.5 rounded-md font-medium cursor-pointer'>{links[1].name}</li>
                    <li onClick={()=>{
                        router.push(links[2].link)
                    }} className='flex hover:bg-emerald-300 hover:text-black text-white px-3 py-1.5 rounded-md font-medium cursor-pointer'>{links[2].name}</li>  
                </ul>

                {/* <div className='w-10 h-10 mr-5 relative hover:opacity-85'>
                    
                    {session.data.user && ( 
                            <Image onClick={ ()=> {document.getElementById("drop")?.classList.toggle("hidden");}} 
                            className='rounded-full ' src={session.data.user.image ?? ''} alt={session.data.user.name?? ''} layout="fill"/>
                    )}

                    <div id="drop" className='hidden bg-white hover:text-green-300 z-10 w-100 h-100 absolute top-14 right-0 rounded-md border-2'>
                        <ul className='py-2 px-4'>
                            <li className='hover:text-green-300 hover:bg-slate-600 py-1 rounded-md cursor-pointer  text-black pl-2 pr-8'>home</li>
                            <li className='hover:text-green-300 hover:bg-slate-600 py-1 rounded-md cursor-pointer  text-black pl-2 pr-8'>about</li>
                            <li className='hover:text-green-300 hover:bg-slate-600 py-1 rounded-md cursor-pointer  text-black pl-2 pr-8'>Services</li>
                            <li className='hover:text-green-300 hover:bg-slate-600 py-1 rounded-md text-black pl-2 pr-8'><Logout /></li>
                        </ul>
                    </div>

                </div> */}
            </nav>
        </>
        )}
    </div>
  )
}

export default DashNavbar;