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
      <div className='overflow-hidden max-h-screen'>
          {session.status === "authenticated" && (
            <>
             <div>
              <DashNavbar session = {session} prop = {setDisplay} />
              <div className='m-10 mr-10 border-solid h-[80vh] flex flex-row' >
                
                <div className='relative w-[25%] h-full px-5 p-10'>
                  <Leftsidebar session = {session} prop = {setDisplay}/>
                </div>

                <div className='h-full w-[75%]'>
                  <Maincontainer display = {display} />
                </div>
              </div>
              {/* {session.data.user && <h1>{session.data.user.name}</h1>} */}
              {/* {session.data.user && (
                <Image src={session.data.user.image ?? ''} alt={session.data.user.name?? ''}  width={200} height={200} />
              )} */}
        
             </div>
            </>
          )}
          
      </div>
    )
}

export default Dashboard
