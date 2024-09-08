import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Logout from '@/components/Logout';

let links = [
    {name:"Edit Profile", link: "edit"},
    {name:"Services", link: "service"},
    {name:"Contact us", link: "/#contact"},
];
const Leftsidebar = ({session, prop}: any) => {
  return (
    <div className='bg-slate-800'>
        {session.status === "authenticated" && (
        <>
        <div className='flex flex-col w-full py-3 rounded-xl items-center absolute top-0 left-0 bg-slate-800 h-full'>

          <div className='py-5'>
            {session.data.user && ( 
                <Image className='rounded-full' src={session.data.user.image ?? ''} alt={session.data.user.name?? ''} width={100} height={200}/>
            )}
          </div>
          
          <div className='text-white py-2 px-3 pb-7 font-medium border-b'>
            {session.data.user && <p>{session.data.user.name}</p>}
          </div>
          
          <ul className='flex flex-col items-center justify-center py-5 pt-3 w-full text-center'>
            <li onClick={() => prop(links[0].link)} className='w-2/3 cursor-pointer text-slate-100 items-center px-3 py-2 my-3 font-medium rounded-md hover:bg-emerald-300 hover:text-black'>{links[0].name}</li>
            <li onClick={() => prop(links[1].link)} className='w-2/3 px-3 cursor-pointer text-slate-100 py-2 my-3 font-medium rounded-md hover:bg-emerald-300 hover:text-black'>{links[1].name}</li>
            <li className='w-2/3 px-3 cursor-pointer text-slate-100 py-2 my-3 font-medium rounded-md hover:bg-emerald-300 hover:text-black'><Logout /></li>
          </ul>

          </div>
        </>
        )}
    </div>
  )
}

export default Leftsidebar
