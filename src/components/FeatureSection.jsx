import { dummyShowsData } from '../assets/assets.js';
import { ArrowRight, Slice } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import MovieCard from './MovieCard.jsx';

const FeatureSection = () => {
    const navigate = useNavigate();
    return (
        <div className='relative z-10 overflow-hidden py-10 px-6 md:px-16 lg:px-24 xl:px-44 text-white'>
            <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-[#e50914]/30 blur-2xl rounded-full -z-20" />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-[#e50914]/30 backdrop-blur-[2px] -z-10" />

            <div className='relative flex items-center justify-between pt-5 pb-10'>
                <p className='text-gray-300 font-medium text-lg'>Now Showing</p>
                <button onClick={() => navigate('/movies')} className='group flex items-center gap-2 text-sm text-gray-300 cursor-pointer'>View All
                    <ArrowRight className='group-hover:translate-x-0.5 transition w-4.5 h-4.5' /></button>
            </div>

            <div className='flex flex-wrap max-sm:justify-center gap-8 mt-8'>
                {dummyShowsData.slice(0, 4).map((show) => (
                    <MovieCard key={show._id} movie={show} />
                ))}
            </div>

            <div className="flex justify-center mt-16">
                <button onClick={() => navigate('/movies')}
                    className="px-6 py-2.5 text-sm text-white bg-[#e50914] hover:bg-[#b40610] transition-colors duration-200 rounded-2xl font-medium shadow-md hover:shadow-lg hover:scale-[1.03] transform cursor-pointer">
                    Show More
                </button>
            </div>
        </div>
    )
}

export default FeatureSection