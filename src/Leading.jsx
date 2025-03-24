

import React from 'react';
import { Link } from 'react-router-dom';

const Leading = () => {
  return (
    <div className="flex flex-col justify-end items-center gap-3  h-screen p-10">
      <div className='w-[40%]'>
        <h1 className="text-2xl">Welcome to PopX</h1>
        <p>You need to code for the given design in React JS and share the code on a GitHub repository and host the project on netlify or any hosting services.</p>
      </div>
      <div className="flex flex-col gap-2 w-[40%]">
        <Link to="/register">
          <button className="w-full border border-black">Create Account</button>
        </Link>
        <Link to="/login">
          <button className="w-full border border-black">
            Already Registered? Login
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Leading;
