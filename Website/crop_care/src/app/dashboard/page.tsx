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
        <h1>{session?.user.name}</h1>
        <Image src={session?.user.image || ''} alt={session?.user.name || ''}  width={200} height={200} />
        <Logout />
    </div>
  )
}

export default Dashboard
