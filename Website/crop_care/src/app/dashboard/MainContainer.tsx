"use client"
import React from 'react'
import EditProfile from './EditProfile';
import Dashboard from './Dashboard';
import Service from './Service';

const MainContainer = ({ display }: { display: string }) => {
  return (
    <div className='h-full grid grid-col-2 grid-row-2 rounded-lg overflow-y-auto w-full border-2 border-black'>
      {display === "dashboard" && (
        <Dashboard />
      )}
      {display === "edit" && (
        <EditProfile />
      )}
      {display === "service" && (
        // <Dashboard />
        <Service onFileChange={(files: File[]) => {}} />
      )}
    </div>
  )
}

export default MainContainer
