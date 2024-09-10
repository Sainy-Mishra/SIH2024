"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { redirect } from 'next/navigation';
import DashNavbar from './DashNavbar';
import Leftsidebar from './Leftsidebar';
import Maincontainer from './MainContainer';
import { useSession } from 'next-auth/react';


const Dashboard = () => {
  const session = useSession();
  if (session?.status === "unauthenticated") {
    redirect("/login");
  }
  const [display, setDisplay] = useState("dashboard");
  return (
    <div className='overflow-y-scroll max-h-screen'>
      {session.status === "authenticated" && (
        <>
          <div>
            <div className=' border-solid h-[100vh] flex flex-row' >

              <div className='relative w-[20%] h-full py-10'>
                <Leftsidebar session={session} prop={setDisplay} />
              </div>

              <div className='h-full w-full'>
                {/* <DashNavbar session={session} prop={setDisplay} /> */}
                <Maincontainer display={display} />
              </div>
            </div>
          </div>
        </>
      )}

    </div>
  )
}

export default Dashboard
