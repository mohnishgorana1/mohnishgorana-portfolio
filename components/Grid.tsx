'use client'
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/bento-grid'
import { gridItems } from '@/data'
import Image from 'next/image'
import { cn } from '@/utils/cn'
import GlobeDemo from '@/components/Globe'
import { div } from 'three/examples/jsm/nodes/Nodes.js'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'
import MagicButton from './ui/MagicButton'
import { FaCopy } from 'react-icons/fa6'
import { IoCopyOutline } from 'react-icons/io5'
import toast from 'react-hot-toast'

function Grid() {
    function copyToClipboard(textToCopy: string) {
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                toast.success("Email Copied")
            }).catch(err => {
                toast.error("Problem copying email")
            })
    }
    return (
        <section className='pt-8 mb-8 sm:px-10 px-5'>
            <div className='w-full h-[260vh] sm:h-[130vh] grid grid-cols-12 grid-rows-8 gap-y-8 sm:gap-x-8'>
                {
                    gridItems.map(({ id, title, className, img, imgClassName, description, spareImg, }) => (
                        <div
                            key={id}
                            className={`${className} bg-no-repeat bg-cover object-cover rounded-3xl overflow-hidden shadow-md inset-2 shadow-cyan-100`}
                            style={{
                                backgroundImage: `${id !== 5 ? `url(${img})` : ''}`,
                                backgroundPosition: `${id === 5 && 'bottom right'}`,
                                backgroundSize: `${id === 5 && 'contain'}`,
                                backgroundRepeat: "no-repeat",
                            }}

                        >
                            <div className='w-full h-full relative '>
                                {
                                    id === 1 && (
                                        <div className='w-full h-full hover:ml-5 duration-300 relative'>
                                            <h1 className='sm:w-[51%] absolute bottom-10 left-10 font-bold text-2xl sm:text-4xl'>{title}</h1>
                                        </div>
                                    )
                                }
                                {
                                    id === 2 && (
                                        <div className='w-full h-full flex flex-col items-center pt-4 overflow-hidden '>
                                            <h1 className='w-full text-center font-bold text-lg sm:text-2xl hover:text-sm sm:hover:text-xl hover:w-[90%] duration-300 '>{title}</h1>
                                            <span className=''>
                                                <GlobeDemo />
                                            </span>
                                        </div>
                                    )
                                }
                                {
                                    id === 3 && (
                                        <div className="w-full h-full flex items-center justify-center  hover:ml-5 duration-300 ">
                                            <div className='w-[55%] h-full flex flex-col pl-5 justify-center'>
                                                <p className='text-white-100 font-light'>{description}</p>
                                                <h1 className='font-bold text-lg sm:text-2xl'>{title}</h1>
                                            </div>
                                            <div className='w-[45%] h-[50%] sm:h-full relative'>
                                                <p className='absolute top-[8px] right-2 w-[85%] text-center  py-2 rounded-lg bg-black-200 '>Express</p>
                                                <p className='absolute top-[52px] -left-4 w-[85%] text-center  py-2 rounded-lg bg-black-200 '>React</p>
                                                <p className='absolute top-[98px] right-2 w-[85%] text-center  py-2 rounded-lg bg-black-200 '>MongoDB</p>
                                                <p className='absolute top-36 -left-4 w-[85%] text-center  py-2 rounded-lg bg-black-200 '>NextJs</p>
                                            </div>
                                        </div>
                                    )
                                }
                                {
                                    id === 4 && (
                                        <div
                                            className='w-ful h-full flex items-center justify-center hover:ml-5 duration-300 '
                                            style={{
                                                backgroundImage: `url(${spareImg}) `,
                                                backgroundSize: '',
                                                backgroundPosition: "bottom right",
                                                backgroundRepeat: "no-repeat"
                                            }}
                                        >
                                            <h1 className='text-center font-bold text-2xl md:text-lg lg:text-3xl px-5'>{title}</h1>
                                        </div>
                                    )
                                }
                                {
                                    id === 5 && (
                                        <div
                                            className='w-full h-full relative hover:ml-5 duration-300 '
                                            style={{
                                                background: `url(${img}) no-repeat bottom right`,
                                                backgroundSize: 'contain'
                                            }}
                                        >
                                            <div
                                                className='absolute inset-0 flex flex-col justify-center sm:w-[35%] pl-8 space-y-2'
                                                style={{
                                                    background: `url(${spareImg}) no-repeat bottom right`,
                                                    backgroundSize: 'contain'
                                                }}
                                            >
                                                <p className='text-white-100 font-light'>{description}</p>
                                                <h1 className=' w-full font-bold text-2xl md:text-lg lg:text-3xl'>{title}</h1>
                                            </div>
                                        </div>
                                    )
                                }

                                {
                                    id === 6 && (
                                        <div
                                            className="w-full h-full flex flex-col items-center gap-y-2 sm:gap-y-0 rounded-3xl bg-gradient-to-r from-pink-700 from-10% via-pink-500 via-30% to-indigo-700 to-90% "

                                        >
                                            <h1 className='px-5 pt-5 text-center font-bold text-2xl md:text-lg lg:text-3xl  hover:scale-90 duration-300 '>{title}</h1>
                                            <div
                                                className='mt-3 hover:scale-90 duration-300 '
                                                onClick={() => copyToClipboard("mohnishgorana1@gmail.com")}

                                            >
                                                <MagicButton
                                                    title="Copy my Email"
                                                    position='left'
                                                    icon={<IoCopyOutline />}
                                                    outerClass='p-1 rounded-2xl'
                                                    textSize={"text-sm"}
                                                />
                                            </div>
                                        </div>
                                    )
                                }

                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Grid