import React from 'react';
import Chart_1 from '@/components/Chart_1';

const Dashboard = () => {
  return (
    <div className='h-full grid grid-col-2 grid-row-2 w-full'>
        <div className='h-full col-span-2 bg-purple-400'>
            <div className=''><Chart_1 /></div>
          </div>
          <div className='bg-red-400'>1</div>
          <div className='bg-amber-400'>2</div>
    </div>
  )
}

export default Dashboard