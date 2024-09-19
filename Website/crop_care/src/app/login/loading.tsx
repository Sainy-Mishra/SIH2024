"use client"
import React from 'react';
import Lottie from 'lottie-react';
import data from "../../../public/assets/loading.json";

const loading = () => {
  return (
    <div className='flex flex-col items-center justify-center align-middle'>
        <Lottie animationData={data} autoPlay loop height={200} width={200}/>
    </div>
  )
}

export default loading