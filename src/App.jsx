import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import MovieDetails from './pages/MovieDetails'
import SeatLayout from './pages/SeatLayout'
import MyBookings from './pages/MyBookings'
import Favourite from './pages/Favourite'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'
import ScrollToTop from './lib/ScrollToTop'

const App = () => {

  const isAdmin = useLocation().pathname.startsWith('/admin');

  return (
    <>
      <Toaster />
      {!isAdmin && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movies' element={<Movies />} />
        <Route path='/movies/:id' element={<MovieDetails />} />
        <Route path='/movies/:id/:date' element={<SeatLayout />} />
        <Route path='/myBookings' element={<MyBookings />} />
        <Route path='/favourites' element={<Favourite />} />
      </Routes>
      {!isAdmin && <Footer />}
    </>
  )
}

export default App