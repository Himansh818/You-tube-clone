import React from 'react'
import { Link } from 'react-router-dom'
import MovieText from '../../components/MovieText'

const MainPage = () => {
  return (
    <>
    <div>
      <MovieText top="top-15" left="left-15" fontSize="text-7xl" color="text-green-400"/>
      <div className='h-screen w-screen bg-black flex justify-center items-center flex-col overflow-hidden'>
        <h1 className='movie z-10 text-white text-9xl font-extrabold font-sans'>Movie App</h1>
        <MovieText top="top-50" left="left-15" fontSize="text-2xl" color="text-red-400"/>
        <MovieText top="top-55" left="left-50" fontSize="text-2xl" color="text-cyan-400"/>
        <MovieText top="top-60" left="left-90" fontSize="text-2xl" color="text-emerald-400"/>
      
        <div className="buttons flex w-fit p-10 gap-5 text-5xl text-white">
          <Link 
          className='border-0 border-white text-lg active:scale-90 button 
          font-medium bg-gray-600 hover:bg-slate-700 
          backdrop-blur-lg px-4 py-2 rounded-2xl' 
          to="/login">Login</Link>
          <Link 
          className='border-0 border-white text-lg active:scale-90 button 
          font-medium bg-gray-600 hover:bg-slate-700 
          backdrop-blur-lg px-4 py-2 rounded-2xl' 
          to="/signUp">Sign Up</Link>
          <Link 
          className='border-0 border-white text-lg active:scale-90 button 
          font-medium bg-gray-600 hover:bg-slate-700 
          backdrop-blur-lg px-4 py-2 rounded-2xl' 
          to="/demo">Demo</Link>
          
        </div>

      </div>

    </div>
    </>
  )
}

export default MainPage
