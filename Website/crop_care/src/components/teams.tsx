import React from 'react';
import Image from 'next/image';
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Teams = () => {
    return (
        <section className="text-gray-600 mx-10 mt-10 min-h-screen max-h-screen body-font">
            <div className="container px-5 py-32 mx-auto">
                <div className="flex flex-col text-center w-full mb-20">
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Meet Our Team of</p>
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Passionate Individuals working Behind The Scenes</h1>
                </div>
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <Image width={200} height={200} alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/assets/ava_male.avif" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Sounak Shome</h2>
                                    <p className="text-gray-500">Team Lead | Web Developer</p>
                                    <div className='felx flex row gap-2'><FaLinkedinIn /><FaInstagram /></div>
                                </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <Image width={200} height={200} alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/assets/ava_male.avif" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Mohit Kumar</h2>
                                    <p className="text-gray-500">ML Engineer</p>
                                    <div className='felx flex row gap-2'><FaLinkedinIn /><FaInstagram /></div>
                                </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <Image width={200} height={200} alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/assets/ava_female.avif" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Aditi Bhargav</h2>
                                    <p className="text-gray-500">ML / Web Developer</p>
                                    <div className='felx flex row gap-2'><FaLinkedinIn /><FaInstagram /></div>
                                </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <Image width={200} height={200} alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/assets/ava_male.avif" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Suryakiran R</h2>
                                    <p className="text-gray-500">Web Developer</p>
                                    <div className='felx flex row gap-2'><FaLinkedinIn /><FaInstagram /></div>
                                </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <Image width={80} height={80} alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/assets/ava_female.avif" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Sainy Mishra</h2>
                                    <p className="text-gray-500">ML Engineer</p>
                                    <div className='felx flex row gap-2'><FaLinkedinIn /><FaInstagram /></div>
                                </div>
                        </div>
                    </div>
                    <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                        <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                            <Image width={200} height={200} alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="/assets/ava_male.avif" />
                                <div className="flex-grow">
                                    <h2 className="text-gray-900 title-font font-medium">Vidyut Kini</h2>
                                    <p className="text-gray-500">ML Engineer</p>
                                    <div className='felx flex row gap-2'><FaLinkedinIn /><FaInstagram /></div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Teams