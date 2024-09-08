"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import DashNavbar from './DashNavbar';
import Leftsidebar from './Leftsidebar';
import Maincontainer from './MainContainer';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const Dashboard = () => {
  const session = useSession();
  return (
      <div className='overflow-hidden max-h-screen'>
          {session.status === "authenticated" && (
            <>
             <div>
              <DashNavbar session = {session} />
              <div className='m-10 mr-10 border-solid h-[80vh] flex flex-row' >
                
                <div className='relative w-[27%] h-full p-10'>
                  <Leftsidebar session = {session}/>
                </div>

                <div className='h-full w-[70%]'>
                  <Maincontainer />
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
