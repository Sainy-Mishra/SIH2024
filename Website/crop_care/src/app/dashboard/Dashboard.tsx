import React, { useState } from 'react';
import Image from 'next/image';
import Chart_1 from '@/components/Chart_1';
import PieChart from '@/components/PieChart';
import { RxHamburgerMenu } from "react-icons/rx";
import LineChart1 from '@/components/LineChart1';
// import RadialChart1 from '@/components/RadialChart1';
import BarRadial from '@/components/BarRadial';
// import BarGraph from '@/components/BarGraph';
const Dashboard = () => {
  const [crop, setCrop] = useState("Rice");
  const handleCropChange = (event: any) => {
    event.preventDefault();
    setCrop(event.target.value);
  };
  return (
    <div className='h-full grid md:grid-col-2 w-full'>
      <nav className='md:hidden shadow-xl h-12 border-b-2 py-2 px-4 '>
        <div className="items-center md:mx-auto align-middle flex flex-row text-lg">
          <Image className=' rounded-lg p-1' src={"/assets/logo.png"} alt="logo" width={35} height={35} />
          <div className='border-l-2 align-middle text-md text-white items-center border-l-black pl-2 ml-3 h-full'>
            <div className='flex flex-row gap-44'>
              <p className='text-left text-black'>AgriCure</p>
              <RxHamburgerMenu className='mx-auto my-auto text-black text-xl' />
            </div>
          </div>
        </div>
      </nav>
      <div className='h-[50%] mb-10 col-span-2 '>
        <div className='h-10 flex align-middle items-center justify-center'>
          <select onChange={handleCropChange} className="rounded-xl">
            <option value="Rice" className="rounded-lg">
              Rice
            </option>
            <option value="Tomato" className="rounded-lg">
              Tomato
            </option>
            <option value="Wheat" className="rounded-lg">
              Wheat
            </option>
            <option value="Potato" className="rounded-lg">
              Potato
            </option>
            <option value="Maize" className="rounded-lg">
              Maize
            </option>
          </select>
        </div>
        <div className='grow-2'><Chart_1 crop={crop} /></div>
      </div>

      <div className='flex flex-col md:flex-row w-full'>
        <div className='w-screen md:max-w-96  grow-1'><PieChart crop={crop} /></div>

        <div className='w-screen md:max-w-96 grow-1'><LineChart1 crop={crop} /> </div>
        <div className='w-screen md:max-w-96 grow-1'><BarRadial crop={crop} /> </div>
      </div>
    </div>
  )
}

export default Dashboard