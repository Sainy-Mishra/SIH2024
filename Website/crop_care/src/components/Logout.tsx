"use client"
import React from 'react';
import { logout } from '@/app/actions/index';

const Logout = () => {

  const logoutGoogle = async(event: any) =>{
    event.preventDefault();
    await logout();
  }

  return (
    <div>
        <form>
            <button type='submit' onClick={logoutGoogle}>Logout</button>
        </form>
    </div>
  )
}

export default Logout