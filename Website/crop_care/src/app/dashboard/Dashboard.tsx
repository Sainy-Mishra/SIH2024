import React from 'react';
import Image from 'next/image';
import Chart_1 from '@/components/Chart_1';
import PieChart from '@/components/PieChart';
import { RxHamburgerMenu } from "react-icons/rx";

import BarGraph from '@/components/BarGraph';
const Dashboard = () => {
  return (
    <div className='h-full grid md:grid-col-2 w-full'>
          <nav className='md:hidden shadow-xl h-12 border-b-2 py-2 px-4 '>
            <div className="items-center md:mx-auto align-middle flex flex-row text-lg">
                <Image className=' rounded-lg p-1' src={"/assets/logo.png"} alt="logo" width={35} height={35} />
                <div className='border-l-2 align-middle text-md text-white items-center border-l-black pl-2 ml-3 h-full'>
                    <div className='flex flex-row gap-44'>
                    <p className='text-left text-black'>AgriCure</p>
                    <RxHamburgerMenu className='mx-auto my-auto text-black text-xl'/>
                    </div>
                </div>
            </div>
          </nav>
          <div className='h-[50%] mb-10 col-span-2 '>
            <div className='grow-2'><Chart_1 /></div>
          </div>
          
          <div className='flex flex-col md:flex-row w-full'>
            <div className='w-screen md:max-w-96  grow-1'><PieChart /></div>
            <div className='w-screen md:max-w-96 grow-1'><BarGraph /></div>
          </div>
    </div>
  )
}

export default Dashboard