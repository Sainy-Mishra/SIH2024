import React from 'react';
import Chart_1 from '@/components/Chart_1';
import PieChart from '@/components/PieChart';

import BarGraph from '@/components/BarGraph';
const Dashboard = () => {
  return (
    <div className='h-full grid md:grid-col-2 w-full overflow-y-scroll'>
          <div className='h-[50%] mb-10 col-span-2 bg-purple-400'>
            <div className='grow-2'><Chart_1 /></div>
          </div>
          
          <div className='flex sm:flex-col md:flex-row'>
            <div className='grow-1'><PieChart /></div>
            <div className='grow-1'><BarGraph /></div>
          </div>
    </div>
  )
}

export default Dashboard