
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SIgnUpPage = () => {

const [username, setUsername] =useState('')
const [password, setPassword] =useState('')
const [email, setEmail] =useState('')
const [confirmPassword, setConfirmPassword]= useState('')

const signupHandler =(e)=>{
  e.preventDefault();
}

  return (
    <div className="h-screen w-screen flex justify-center items-center bg-linear-to-bl from-black via-blue-900 to-gray-800 text-white font-sans relative overflow-hidden">
  {/* Optional cinematic background image */}
  

  <form
    onSubmit={signupHandler}
    id="signupForm"
    className="signUpForm relative z-10 flex flex-col p-10 bg-gray-900/80 backdrop-blur-md rounded-3xl shadow-[0_0_25px_rgba(0,255,255,0.4)] w-[90%] sm:w-[450px] space-y-6 border border-cyan-500/30"
  >
    <h1 className="text-4xl font-bold text-center text-cyan-400 drop-shadow-[0_0_5px_#00ffff]">
      🎞️ Create Account
    </h1>

    {/* Username Field */}
    <div className="signUpFormTextDiv flex flex-col space-y-3">
      <label htmlFor="username" className="text-lg text-gray-200">
        Username
      </label>
      <input
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        id="username"
        className="px-4 py-3 bg-gray-800 text-white text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
        type="text"
        name="username"
        placeholder="Enter your username"
        required
      />
    </div>

    {/* Email Field */}
    <div className="signUpFormTextDiv flex flex-col space-y-3">
      <label htmlFor="email" className="text-lg text-gray-200">
        Email
      </label>
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        id="email"
        className="px-4 py-3 bg-gray-800 text-white text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
        type="email"
        name="email"
        placeholder="Enter your email"
        required
      />
    </div>

    {/* Password Field */}
    <div className="signUpFormTextDiv flex flex-col space-y-3">
      <label htmlFor="password" className="text-lg text-gray-200">
        Password
      </label>
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        id="password"
        className="px-4 py-3 bg-gray-800 text-white text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
        type="password"
        name="password"
        placeholder="Enter your password"
        required
      />
    </div>

    {/* Confirm Password Field */}
    <div className="signUpFormTextDiv flex flex-col space-y-3">
      <label htmlFor="confirmPassword" className="text-lg text-gray-200">
        Confirm Password
      </label>
      <input
        onChange={(e) => setConfirmPassword(e.target.value)}
        value={confirmPassword}
        id="confirmPassword"
        className="px-4 py-3 bg-gray-800 text-white text-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400"
        type="password"
        name="confirmPassword"
        placeholder="Confirm your password"
        required
      />
    </div>

    {/* Submit Button */}
    <button
      type="submit"
      className="bg-cyan-500 hover:bg-cyan-400 transition-all duration-200 text-white text-2xl font-semibold py-3 rounded-xl shadow-lg hover:shadow-cyan-400/50 active:scale-95"
    >
      Sign Up
    </button>

    {/* Redirect to Login */}
    <p className="text-center text-gray-400 text-sm mt-2">
      Already have an account?{" "}
      <Link to="/login" className="text-cyan-400 hover:underline">
        Login here
      </Link>
    </p>
  </form>
</div>

  )
}

export default SIgnUpPage
