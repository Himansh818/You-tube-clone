import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    localStorage.setItem(username, password); //local storage me save hora h

    setUsername("");
    setPassword("");
  };
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-linear-to-br from-black via-blue-900 to-gray-800 text-white font-sans">
      <form
        onSubmit={submitHandler}
        id="loginForm"
        className="loginForm flex flex-col bg-gray-900/70 backdrop-blur-md rounded-3xl shadow-[0_0_25px_rgba(0,255,255,0.4)] w-[90%] sm:w-[400px] space-y-6 border border-cyan-500/30"
      >
        <h1 className="text-4xl font-bold text-center text-cyan-400 drop-shadow-[0_0_5px_#00ffff]">
          🎥 MovieVerse Login
        </h1>

        <div className="loginFormTextDiv flex flex-col space-y-3">
          <label htmlFor="username" className="text-lg text-gray-200 ">
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

        <div className="loginFormTextDiv flex flex-col space-y-3">
          <label htmlFor="password" className="text-lg text-gray-200 ">
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

        <button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-400 transition-all duration-200 text-white text-2xl font-semibold py-3 rounded-xl shadow-lg hover:shadow-cyan-400/50 active:scale-95"
        >
          Login
        </button>

        <p className="text-center text-gray-400 text-sm mt-5">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-cyan-400 hover:underline">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
