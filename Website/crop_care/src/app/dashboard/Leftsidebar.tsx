import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Logout from '@/components/Logout';
import { FaPencilAlt } from "react-icons/fa";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { FaToolbox } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";

let links = [
    {name:"Edit Profile", link: "edit"},
    { name: "Dashboard", link: "dashboard" },
    {name:"Services", link: "service"},
    {name:"Contact us", link: "/#contact"},
    { name: "Contact us", link: "/#contact" },
];
const Leftsidebar = ({session, prop}: any) => {
  return (
    <div className='bg-blue-950'>
        {session.status === "authenticated" && (
        <>
        <div className='flex flex-col w-full py-4 items-center absolute top-0 left-0 bg-slate-800 h-[100vh]'>

        <div className=' mr-auto px-auto py-1 text-white cursor-pointer '>
            <div className="ml-7 items-center align-middle flex flex-row text-xl">
                <Image className='bg-white rounded-lg p-1' src={"/assets/logo.png"} alt="logo" width={30} height={30} />
                <div className='border-l-2 align-middle text-lg text-white items-center border-l-white p-1 pl-2 ml-3 h-full'>
                    AgriCure
                </div>
            </div>
        </div>

           {/* <div className='py-5'>
            {session.data.user && ( 
                <Image className='rounded-full' src={session.data.user.image ?? ''} alt={session.data.user.name?? ''} width={50} height={200}/>
            )}
          </div>
          
          <div className='text-white py-2 px-3 pb-7 font-medium border-b'>
            {session.data.user && <p>{session.data.user.name}</p>}
          </div> */}
          <div className='flex flex-col items-center mt-11'>
              <div className='pb-6'>
                {session.data.user && ( 
                    <Image className='rounded-full' src={session.data.user.image ?? ''} alt={session.data.user.name?? ''} width={100} height={200}/>
                )}
              </div>
              
              <div className='text-white mx-4 pb-5 font-medium text-lg border-b '>
                {session.data.user && <p>{session.data.user.name}</p>}
              </div>
          </div>
            <ul className='flex flex-col items-center justify-center py-5 pt-3 w-full text-center'>
              <li onClick={() => prop(links[0].link)} className='flex flex-row justify-evenly w-2/3 cursor-pointer text-slate-100 items-center px-3 py-2 my-3 font-medium rounded-md hover:bg-emerald-300 hover:text-black'><FaPencilAlt className=''/>{links[0].name}</li>
              <li onClick={() => prop(links[1].link)} className='flex flex-row justify-evenly w-2/3 cursor-pointer text-slate-100 items-center px-3 py-2 my-3 font-medium rounded-md hover:bg-emerald-300 hover:text-black'><HiMiniSquares2X2 />{links[1].name}</li>
              <li onClick={() => prop(links[2].link)} className='flex flex-row justify-evenly w-2/3 px-3 cursor-pointer text-slate-100 py-2 my-3 font-medium rounded-md hover:bg-emerald-300 hover:text-black'><FaToolbox className='my-auto'/>{links[2].name}</li>
              <li className='flex flex-row justify-evenly w-2/3 px-3 cursor-pointer text-slate-100 py-2 my-3 font-medium rounded-md hover:bg-emerald-300 hover:text-black'><FaPowerOff className='my-auto'/><Logout /></li>
            </ul>
          </div>
        </>
        )}
    </div>
  )
}

export default Leftsidebar
