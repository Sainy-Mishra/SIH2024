"use client"
import React from 'react';
import Lottie from 'lottie-react';
import data from '../../public/assets/loading.json';

const Loading = () => {
  return (
    <div className='flex flex-col items-center max-h-[50%] justify-center align-middle'>
        <Lottie animationData={data} autoPlay/>
    </div>
  )
}

export default Loading