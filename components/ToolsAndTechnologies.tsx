import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { technologies1, technologies2 } from '@/data'

function ToolsAndTechnologies() {
    return (
        <div id='technologies' className='bg-gradient-to-r from-gray-900 from-4% via-indigo-700 via-60% to-99% to-pink-800 mb-2 h-[80vh] flex items-center flex-col gap-y-5 py-5'>
            <h1 className='hover:scale-110 duration-500 ease-linear text-white font-bold text-xl sm:text-3xl md:text-4xl w-full text-center'>My Technology Stack</h1>
            <div className='h-[88%] w-full flex flex-col items-center justify-center gap-y-10 sm:gap-y-20'>
                <InfiniteMovingCards
                    items={technologies1}
                    direction="right"
                    speed="slow"
                />
                <InfiniteMovingCards
                    items={technologies2}
                    direction="left"
                    speed="slow"
                />
            </div>
        </div>
    )
}

export default ToolsAndTechnologies