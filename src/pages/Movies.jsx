import { dummyShowsData } from '../assets/assets'
import MovieCard from '../components/MovieCard'
import React from 'react'

const Movies = () => {
    return dummyShowsData.length > 0 ? (
        <div className='relative mt-20 px-4 md:px-16 lg:px-24 xl:px-32 min-h-[80vh] bg-gradient-to-b from-black via-zinc-900 to-black text-white pb-20'>
            <div className='flex justify-center'>
                <h1 className='text-2xl sm:text-3xl font-semibold my-6 text-center'>Now Showing</h1>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-8 max-h-[1650px] overflow-y-auto w-full px-4 sm:px-8'>
                {dummyShowsData.map((movie) => (
                    <MovieCard movie={movie} key={movie._id} />
                ))}
            </div>
        </div>
    ) : (
        <div>

        </div>
    )
}

export default Movies