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

                        <div className='ml-5 mr-auto py-1 text-lg text-white cursor-pointer'>
                            <div className="ml-7 items-center align-middle flex flex-row text-xl">
                                <Image className='bg-white rounded-lg p-1' src={"/assets/logo.png"} alt="logo" width={45} height={45} />
                                <div className='border-l-2 align-middle text-white items-center border-l-white p-2 ml-3 h-full'>
                                    AgriCure
                                </div>
                            </div>
                        </div>

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
                        </ul>
                    </nav>
                </>
            )}
        </div>
    )
}

export default DashNavbar;