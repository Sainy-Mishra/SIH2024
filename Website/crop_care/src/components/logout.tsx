"use client"
import React from 'react';
import { logout } from '@/app/actions/index';

const Logout = () => {
  return (
    <div>
        <form>
            <button type='submit' onClick={logout}>Logout</button>
        </form>
    </div>
  )
}

export default Logout