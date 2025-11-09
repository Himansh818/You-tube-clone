
import React, { useEffect, useState } from 'react';

const User = () => {

  const [movie, setMovie] = useState([])

  useEffect(()=>{

    const fetchData =async ()=>{

      try {
        const response =await fetch(" https://api.tvmaze.com/shows/1/cast")
        const data =await response.json();
        setMovie(data);
        console.log(data)
        console.log("me chaa hu ! ")
      } catch (error) {
        console.error(error)
      }
    }
fetchData();
  },[])

  return (
    <div className="h-screen w-screen bg-[#0f0f0f] text-white flex flex-col">
      {/* 🔹 Navbar */}
      <div className="nav w-full h-14 flex items-center justify-between px-5 border-b border-gray-700">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <h1 className="text-red-600 text-4xl font-bold">Y</h1>
          <span className="font-semibold text-xl">YouView</span>
        </div>

        {/* Search Bar */}
        <form className="flex items-center w-1/3 relative">
          <input
            className="bg-[#222] text-white rounded-l-full px-4 py-2 w-full outline-none"
            type="search"
            placeholder="Search videos..."
          />
          <button
            type="submit"
            className="bg-[#333] text-white rounded-r-full px-4 py-2 hover:bg-slate-600"
          >
            🔍
          </button>
        </form>

        {/* Right Section */}
        <div className="flex items-center gap-5">
          <button className="text-xl hover:bg-stone-700 cursor-pointer ">📹</button>
          <button className="text-xl hover:bg-stone-700 cursor-pointer ">🔔</button>
          <div className="w-8 h-8  hover:bg-stone-700 cursor-pointer rounded-full bg-gray-500 flex items-center justify-center font-bold">
            U
          </div>
        </div>
      </div>

      {/* 🔹 Body Section */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="sidebar w-60 bg-[#181818] flex flex-col py-4 px-2 space-y-3 border-r border-gray-800">
          <button className="flex  items-center gap-3 hover:bg-slate-600 px-3 py-2 rounded-md">
            🏠 <span>Home</span>
          </button>
          <button className="flex  items-center gap-3 hover:bg-slate-600 px-3 py-2 rounded-md">
            🔥 <span>Trending</span>
          </button>
          <button className="flex  items-center gap-3 hover:bg-slate-600 px-3 py-2 rounded-md">
            📺 <span>Subscriptions</span>
          </button>
          <hr className="border-gray-700" />
          <button className="flex items-center gap-3 hover:bg-slate-600 px-3 py-2 rounded-md">
            📚 <span>Library</span>
          </button>
          <button className="flex items-center gap-3 hover:bg-slate-600 px-3 py-2 rounded-md">
            🕒 <span>History</span>
          </button>
        </div>

        {/* 🔹 Video Grid */}
        <div className="flex-1 bg-[#0f0f0f] p-5 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Recommended</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movie.map((elem,i) => (
              <div
                key={i}
                className="bg-[#181818] rounded-lg overflow-hidden hover:scale-[1.03] transition-transform duration-200"
              >
                <div className="w-full h-40 bg-gray-700 flex text-4xl">
                  {console.log(i)}
                  <img src={elem.person.image.medium} alt="pic hu me" className='bg-cover z-10 h-full w-full' />
                </div>
                <div className="p-3">
                  <h3 className="font-semibold text-sm mb-1">
                    {elem.person.name}
                  </h3>
                  <p className="text-gray-400 text-xs"></p>
                  <p className="text-gray-400 text-xs">YouView • 20K views • 1 day ago</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
