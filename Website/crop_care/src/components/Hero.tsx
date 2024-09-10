import React from 'react';
import Image from 'next/image';
import Lottie from "lottie-react";
import animationData from "../../public/assets/logo.json";

const Hero = () => {
    return (
        <div id='#' className='flex flex-row justify-center items-center mx-10'>
            <div className='w-[50%] flex flex-col justify-center'>
                <div className='max-w-[60%] mt-5 mx-auto'>
                    <Lottie animationData={animationData} autoPlay loop height={50} width={5}/>
                </div>
                <h1 className='text-9xl text-center font-Kodchasan'>
                    AgriCure
                </h1>
                <p className='font-Poppins pt-10 text-center text-gray-600'>Diagnosing Crop Diseases, Empowering Farmers</p>
            </div>
        </div>
    )
}

export default Hero
