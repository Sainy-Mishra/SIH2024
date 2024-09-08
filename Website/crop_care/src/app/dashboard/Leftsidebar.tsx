import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { FaPenSquare } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Logout from '@/components/logout';

let links = [
    {name:"Edit Profile", link: "/"},
    {name:"Services", link: "/"},
    {name:"Contact us", link: "/"},
];
const Leftsidebar = ({session}: any) => {
  return (
    <div className='bg-slate-800'>
        {session.status === "authenticated" && (
        <>
        <div className='flex flex-col w-full px-10 py-3 rounded-xl items-center absolute top-0 left-0 bg-slate-800 h-full'>

          <div className='py-5'>
            {session.data.user && ( 
                <Image className='rounded-full' src={session.data.user.image ?? ''} alt={session.data.user.name?? ''} width={100} height={200}/>
            )}
          </div>
          
          <div className='text-white px-3 py-2 pb-7 font-medium border-b'>
            {session.data.user && <p>{session.data.user.name}</p>}
          </div>
          
          <ul className='py-5 pt-3 w-full text-center'>
            <li className='text-slate-100 items-center px-3 py-2 my-3 font-medium rounded-md hover:bg-emerald-300 hover:text-black'><Link className='' href={links[1].link}>{links[1].name}</Link></li>
            <li className='text-slate-100 px-3 py-2 my-3 font-medium rounded-md hover:bg-emerald-300 hover:text-black'><Link className='' href={links[0].link}>{links[0].name}</Link></li>
            <li className='text-slate-100 px-3 py-2 my-3 font-medium rounded-md hover:bg-emerald-300 hover:text-black'><Logout  /></li>
          </ul>

          </div>
        </>
        )}
    </div>
  )
}

export default Leftsidebar
