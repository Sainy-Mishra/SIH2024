import React from 'react';
import Chart_1 from '@/components/Chart_1';
import PieChart from '@/components/PieChart';
import BarGraph from '@/components/BarGraph';
const Dashboard = () => {
  return (
    <div className='h-full grid grid-col-2 grid-row-2 w-full overflow-y-scroll'>
        <div className='h-[50%] mb-10 col-span-2 bg-purple-400'>
            <div className=''><Chart_1 /></div>
          </div>
          <div className='h-[50%] ] '><PieChart /></div>
          <div className=''><BarGraph /></div>
    </div>
  )
}

export default Dashboard