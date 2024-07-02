'use client'

import { education } from "@/data"
import { TextGenerateEffect } from "./ui/text-generate-effect"
import '@/app/globals.css'
import { Button } from "./ui/moving-border"

function Graduation() {
    return (
        <section id='graduation' className='mb-10 border py-3 flex items-center justify-center w-full h-full'>
            <div className="flex flex-col w-full h-full items-center justify-center gap-y-8">
                <div className="w-fit">
                    <TextGenerateEffect
                        words="Education Qualifications"
                        className='text-center text-[32px] md:text-4xl lg:text-5xl'
                        index={1}
                    />
                    <p className="bg-gradient-to-r from-pink-600 from-10% via-blue-700 via-50% to-pink-800 to-90% h-[2px] rounded-2xl" />
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center w-full h-full gap-y-8 sm:gap-x-16 sm:px-16 px-5 ">
                    {
                        education.map(({ id, course, college, duration, percentage, CGPA, university, shorthand }) => (
                            <div key={id} className="p-1 border bg-white-100 bg-opacity-30 rounded-2xl relative overflow-hidden ">
                                <div className=" h-[80%] w-full border rounded-2xl relative z-10 bg-black-100 px-4 sm:px-10 py-10 hover:bg-gradient-to-br from-pink-700 from-10% via-blue-500 via-30% to-pink-700 to-95%  ">
                                    <div className="w-full flex flex-col items-center">
                                        <h1 className="w-full font-bold text-xl text-center">{course}</h1>
                                        <h1 className="font-bold text-lg text-center">{shorthand}</h1>
                                    </div>
                                    <p className="mt-5 text-justify text-sm sm:text-lg ">I have done {course} from {college} affiliated from {university} by securing aggregate {`${percentage ? `${percentage}` : `${CGPA}`}`} without any backlog and completed in duration of {duration} year.</p>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )


}


export default Graduation