import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

let links = [
    { name: "Home", link: "/" },
    { name: "Dashboard", link: "dashboard" },
    { name: "Contact us", link: "/#contact" },
];

const DashNavbar = ({ session, prop }: any) => {
    const router = useRouter();
    return (
        <div>
            {session.status === "authenticated" && (
                <>
                    <nav className='flex justify-end items-center py-3 w-full text-black font-poppins bg-slate-950'>

                        <ul className='flex gap-[1vw] pr-4.75 mr-2'>
                            <li onClick={() => {
                                router.push(links[0].link)
                            }} className='flex hover:bg-emerald-300 hover:text-black text-white px-3 py-1.5 rounded-md font-medium cursor-pointer'>{links[0].name}</li>
                            <li onClick={() => {
                                prop(links[1].link)
                            }} className='flex hover:bg-emerald-300 hover:text-black text-white px-3 py-1.5 rounded-md font-medium cursor-pointer'>{links[1].name}</li>
                            <li onClick={() => {
                                router.push(links[2].link)
                            }} className='flex hover:bg-emerald-300 hover:text-black text-white px-3 py-1.5 rounded-md font-medium cursor-pointer'>{links[2].name}</li>
                            
                            <li className=''>
                            <div className=''>
                                {session.data.user && ( 
                                    <Image className='rounded-full' src={session.data.user.image ?? ''} alt={session.data.user.name?? ''} width={40} height={40}/>
                                )}
                            </div>
                                {/* <Logout /> */}
                            </li>
                        </ul>
                    </nav>
                </>
            )}
        </div>
    )
}

export default DashNavbar;