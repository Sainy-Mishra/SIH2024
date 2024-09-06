"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Logout from '@/components/logout';

const Dashboard = () => {
  const session = useSession();
  console.log(session);
  return (
      <div>
          {session.status === "authenticated" && (
            <>
              {session.data.user && <h1>{session.data.user.name}</h1>}
              {session.data.user && (
                <Image src={session.data.user.image ?? ''} alt={session.data.user.name?? ''}  width={200} height={200} />
              )}
            </>
          )}
          <Logout />
      </div>
    )
}

export default Dashboard
