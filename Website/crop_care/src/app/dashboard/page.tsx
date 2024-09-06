import React from 'react';
import { redirect } from 'next/navigation';
import { auth } from '../api/auth/[...nextauth]/options';
import Image from 'next/image';
import Logout from '@/components/logout';

const Dashboard = async () => {
    const session = await auth();
    if (!session?.user) redirect("/login");
  return (
    <div>
        <h1>{session?.user.name}</h1>
        <Image src={session?.user.image || ''} alt={session?.user.name || ''}  width={200} height={200} />
        <Logout />

                

    </div>
  )
}

export default Dashboard
