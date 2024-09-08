import React from 'react';
import Lottie from "lottie-react";
import animationData from "../../public/assets/vision.json";

const About = () => {
    return (
        <div className='flex flex-col max-h-screen justify center m-10 mt-20 mr-20'>
            <h1 className='text-7xl font-Kodchasan'>Our Vision</h1>
            <div className='flex flex-row'>
                <div className='w-1/2 text-lg'>
                    <p className='m-5 pt-5'>
                        At AgriCure, we&rsquo;re more than just a tech company—we&rsquo;re a group of people who genuinely care about farmers and the future of agriculture. We understand the dedication it takes to grow healthy crops, and we know how frustrating it can be when diseases threaten those hard-earned efforts. That&apos;s why we&rsquo;ve made it our mission to bring farmers the tools they need to stay ahead of crop issues and protect their livelihoods.</p><p className='m-5'>
                        Our journey began with a simple idea: How can we make advanced technology accessible to farmers in a way that makes a real difference in their daily lives?</p><p className='m-5'>
                         From there, we created an easy-to-use web-based platform that helps farmers quickly identify plant diseases with just a photo. By harnessing the power of artificial intelligence, we’re making disease detection faster, smarter, and more reliable.
                    </p>
                    <p className='m-5'>
                        Together, we’re building a brighter, healthier future for agriculture.
                    </p>
                </div>
                <div className='w-1/2 mt-[-100px]'>
                    <Lottie animationData={animationData} autoPlay loop height={500} width={100}/>
                </div>
            </div>
        </div>
    );
}

export default About