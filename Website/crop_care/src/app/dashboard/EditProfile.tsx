import React from 'react'
import AccountCard from '@/components/AccountCard';
import DatePicker from '@/components/DatePicker';
// import { Calendar } from "@/components/ui/calendar"

const EditProfile = () => {
  return (
    // "name dob email photo Aadhar"
    <div className='p-5 h-full'>
      <header className='text-3xl'>Account Settings</header>
      <div className='grid lg:grid-cols-2 gap-5 mt-10'>
          <div className='flex flex-col'>First Name 
            <input type="text" className='bg-slate-200 border-solid border-black-2 rounded-md w-[80%]'/>
          </div>
          <div className='flex flex-col'>Last Name 
            <input type="text" className='bg-slate-200 border-solid border-black-2 rounded-md w-[80%]'/>
          </div>
          <div className='flex flex-col'>Phone Number 
            <input type="text" className='bg-slate-200 border-solid border-black-2 rounded-md w-[80%]'/>
          </div>
          <div className='flex flex-col'>Email 
            <input type="text" className='bg-slate-200 border-solid border-black-2 rounded-md w-[80%]'/>
          </div>
          <div className='flex flex-col'>DOB 
            <DatePicker />      
            {/* <input type="text" className='bg-slate-300 border-solid border-black-2 rounded-md w-[80%]'/> */}
          </div>
          <div className='flex flex-col'>Aadhar No. 
            <input type="text" className='bg-slate-200 border-solid border-black-2 rounded-md w-[80%]'/>
          </div>
          <div className='flex flex-col col-span-2'>Bio
            <input type="text" className='bg-slate-200 border-solid border-black-2 rounded-md w-[75%] h-[50px]'/>            
          </div>
      
      </div>
    </div>
  )
}

export default EditProfile