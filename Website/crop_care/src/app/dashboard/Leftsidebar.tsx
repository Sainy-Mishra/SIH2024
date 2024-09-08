"use client"
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Logout from '@/components/Logout';

let links = [
    {name:"Edit Profile", value: 'edit'},
    {name:"Services", value: 'service'},
    {name:"Contact us", link: "/"},
];
const Leftsidebar = ({session, prop}: any) => {
  return (
    <div className='bg-slate-800'>
        {session.status === "authenticated" && (
        <>
        <div className='flex flex-col w-[75%] px-5 py-3 rounded-xl items-center absolute top-0 left-0 bg-slate-800 h-full'>

          <div className='py-5'>
            {session.data.user && ( 
                <Image className='rounded-full' src={session.data.user.image ?? ''} alt={session.data.user.name?? ''} width={100} height={200}/>
            )}
          </div>
          
          <div className='text-white text-2xl px-3 py-2 pb-7 font-medium border-b'>
            {session.data.user && <p>{session.data.user.name}</p>}
          </div>
          
          <ul className='py-5 pt-3 w-full text-center'>
            <li onClick={()=>{
              prop(links[0].value)
            }} className='text-slate-100 items-center py-2 my-3 font-medium rounded-md cursor-pointer hover:bg-emerald-300 hover:text-black'>{links[0].name}</li>
            <li onClick={()=>{
              prop(links[1].value)
            }} className='text-slate-100 py-2 my-3 font-medium rounded-md cursor-pointer hover:bg-emerald-300 hover:text-black'>{links[1].name}</li>
            {session.data.user && ( 
                <li className='text-slate-100 py-2 my-3 font-medium rounded-md cursor-pointer hover:bg-emerald-300 hover:text-black'><Logout  /></li>
            )}
            
          </ul>

          </div>
        </>
        )}
    </div>
  )
}

export default Leftsidebar
