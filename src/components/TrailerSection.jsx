import ReactPlayer from 'react-player';
import { dummyTrailers } from '../assets/assets'
import React, { useState } from 'react'

const TrailerSection = () => {

    const [currentTrailer, setCurrentTrailer] = useState(dummyTrailers[0]);

    return (
        <div className='relative z-10 overflow-hidden py-12 px-4 md:px-16 lg:px-24 xl:px-32 text-white bg-black/90 backdrop-blur-sm'>

            <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-[#e50914]/20 blur-2xl rounded-full -z-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60 -z-10" />

            <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center">
                🎬 Featured Trailers
            </h2>

            <div className='relative mt-6'>
                <ReactPlayer
                    url={currentTrailer.videoUrl}
                    controls={false}
                    className='mx-auto max-w-full' width="960px" height="540px"
                />
            </div>
        </div>
    )
}

export default TrailerSection