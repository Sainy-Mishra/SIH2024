"use client"
import React from 'react';
import { logout } from '@/app/actions/index';

const Logout = () => {
  const handleLogout = async (e: any) => {
    e.preventDefault();
    localStorage.removeItem("user");
    await logout();
  }
  return (
    <div>
        <form>
            <button type='submit' onClick={handleLogout}>Logout</button>
        </form>
    </div>
  )
}

export default Logout