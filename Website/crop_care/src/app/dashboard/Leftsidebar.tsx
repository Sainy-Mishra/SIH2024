import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { logout } from '@/app/actions/index';
import { FaPencilAlt } from "react-icons/fa";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { FaToolbox } from "react-icons/fa";
import { FaPowerOff } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";

let links = [
    {name:"Edit Profile", link: "edit"},
    { name: "Dashboard", link: "dashboard" },
    {name:"Services", link: "service"},
    {name:"Chatbot", link: "/chatbot"},
    { name: "Contact us", link: "/#contact" },
];
const Leftsidebar = ({session, prop}: any) => {
  return (
    <div className='bg-blue-950'>
        {session.status === "authenticated" && (
        <>
        <div className='flex flex-col w-full py-4 absolute top-0 left-0 bg-slate-800 h-[100vh]'>

        <div className='mr-auto py-1 flex w-full justify-center text-white cursor-pointer '>
            <div className="items-center md:mx-auto align-middle flex flex-row text-xl">
                <Image className='bg-white rounded-lg p-1' src={"/assets/logo.png"} alt="logo" width={30} height={30} />
                <div className='border-l-2 align-middle text-lg text-white items-center border-l-white p-1 pl-2 ml-3 h-full'>
                    <div className='flex flex-row gap-14'>
                    AgriCure
                    <RxHamburgerMenu className='md:hidden md:my-auto'/>
                    </div>
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
          <div className='hidden md:flex md:flex-col md:items-center md:mt-11'>
              <div className='pb-6'>
                {session.data.user && ( 
                    <Image className='rounded-full' src={session.data.user.image ?? ''} alt={session.data.user.name?? ''} width={100} height={200}/>
                )}
              </div>
              
              <div className='text-white mx-4 pb-5 font-medium text-lg border-b '>
                {session.data.user && <p>{session.data.user.name}</p>}
              </div>
          </div>
            <ul className='hidden md:flex md:flex-col md:items-center md:justify-center md:py-5 md:pt-3 w-full md:text-center'>
              <li onClick={() => prop(links[0].link)} className='flex flex-row justify-evenly w-2/3 cursor-pointer text-slate-100 items-center px-3 py-2 my-3 font-medium rounded-md hover:bg-emerald-300 hover:text-black'><FaPencilAlt className=''/>{links[0].name}</li>
              <li onClick={() => prop(links[1].link)} className='flex flex-row justify-evenly w-2/3 cursor-pointer text-slate-100 items-center px-3 py-2 my-3 font-medium rounded-md hover:bg-emerald-300 hover:text-black'><HiMiniSquares2X2 />{links[1].name}</li>
              <li onClick={() => prop(links[2].link)} className='flex flex-row justify-evenly w-2/3 px-3 cursor-pointer text-slate-100 py-2 my-3 font-medium rounded-md hover:bg-emerald-300 hover:text-black'><FaToolbox className='my-auto'/>{links[2].name}</li>
              <li onClick={() => window.open(links[3].link)} className='flex flex-row justify-evenly w-2/3 px-3 cursor-pointer text-slate-100 py-2 my-3 font-medium rounded-md hover:bg-emerald-300 hover:text-black'><FaToolbox className='my-auto'/>{links[3].name}</li>
              <li onClick={logout} className='flex flex-row justify-evenly w-2/3 px-3 cursor-pointer text-slate-100 py-2 my-3 font-medium rounded-md hover:bg-emerald-300 hover:text-black'><FaPowerOff className='my-auto'/>Logout</li>
            </ul>
          </div>
        </>
        )}
    </div>
  )
}

export default Leftsidebar
