'use client'
import { projects } from '@/data'
import React from 'react'
import { PinContainer, PinPerspective } from './ui/3d-pin'
import Link from 'next/link'
import { FaLink } from 'react-icons/fa6'
import { MdOutlineArrowOutward } from 'react-icons/md'
import { AnimatedTooltip } from './ui/animated-tooltip'
function RecentProjects() {
    return (
        <div className='py-20'>
            <h1 className="heading">
                A small selection of {' '}
                <span className='text-purple'>recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10 ">
                {projects.map(({ id, title, des, img, iconLists, link }) => (

                    <div key={id} className='border rounded-[20px] h-[90vh] sm:min-h-[72vh] w-[85vw] sm:w-[50vw] lg:w-[30vw] bg-gradient-to-br from-pink-600 from-10% via-indigo-700 via-40% to-pink-700 to-90% flex items-center justify-center px-[2px] hover:shadow-md hover:shadow-pink-500'>

                        <div className="h-[89vh] sm:h-[89vh] sm:w-[50vw] lg:w-[30vw] border rounded-2xl p-5 flex flex-col gap-5 duration-300 ease-out bg-black-100">

                            <img src={img} alt={img} className='h-[50%]' />
                            <h1 className='font-bold text-xl sm:text-2xl'>{title}</h1>
                            <p className='font-light text-white-200 text-sm opacity-80'> {des}</p>
                            <div className='flex flex-col sm:flex-row items-center justify-between gap-5'>
                                <div className='flex '>
                                    {iconLists.map((icon) => (
                                        <span key={icon} className='flex rounded-full border-2 p-2 -ml-2 bg-[#00040ad3] hover:scale-125 duration-200'>
                                            <img src={icon} alt={icon}/>
                                        </span>
                                    ))}
                                </div>
                                <Link href={"/"} className='flex items-center gap-2  '>
                                    <span className='border-b hover:border-b-white text-sm'>Visit Site</span>
                                    <MdOutlineArrowOutward className='sm:col-span-1' />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects