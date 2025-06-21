import timeFormat from '../lib/timeFormat';
import { StarIcon } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router-dom'

const MovieCard = ({ movie }) => {
    const navigate = useNavigate();
    return (
        <div className='flex flex-col p-3 w-66 justify-between bg-[#141414] rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105'>
            <img onClick={() => navigate(`/movies/${movie._id}`)} src={movie.backdrop_path} alt=""
                className='rounded-lg h-52 w-full object-cover object-right-bottom cursor-pointer' />
            <p className='font-semibold mt-2 truncate'>{movie.title}</p>
            <p className='text-sm text-gray-300 mt-2'>
                {new Date(movie.release_date).getFullYear()} •
                {movie.genres.slice(0, 2).map(genre => genre.name).join(" | ")} • {timeFormat(movie.runtime)}
            </p>
            <div className='flex items-center justify-between mt-4 pb-3'>
                <button
                    onClick={() => navigate(`/movies/${movie._id}`)}
                    className='mt-2 bg-[#e50914] hover:bg-[#b40610] text-white px-4 py-2 text-sm rounded-md font-medium shadow hover:shadow-lg transition duration-200 ease-in-out cursor-pointer'>
                    Buy Tickets
                </button>
                <p className='flex items-center gap-1 text-sm text-gray-300 mt-1 pr-1'>
                    <StarIcon className='w-4 h-4 text-primary fill-primary' />
                    {movie.vote_average.toFixed(1)};
                </p>
            </div>
        </div>
    )
}

export default MovieCard