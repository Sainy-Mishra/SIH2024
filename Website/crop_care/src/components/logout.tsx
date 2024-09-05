import React from 'react';
import { logout } from '@/app/actions/index';

const Logout = () => {
  return (
    <div>
        <form action={logout}>
            <button type='submit'>Logout</button>
        </form>
    </div>
  )
}

export default Logout