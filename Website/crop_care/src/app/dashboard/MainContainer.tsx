"use client"
import React from 'react'
import EditProfile from './EditProfile';
import Dashboard from './Dashboard';
import Service from './Service';
// import DashNavbar from './DashNavbar';

const MainContainer = ({ display }: { display: string }) => {
  return (
    <div className='h-full grid grid-col-2 overflow-y-auto w-full'>
      {/* <DashNavbar session={session} prop={setDisplay} /> */}
      
      {display === "dashboard" && (
        <Dashboard />
      )}
      {display === "edit" && (
        <EditProfile />
      )}
      {display === "service" && (
        // <Dashboard />
        <Service />
      )}
    </div>
  )
}

export default MainContainer
