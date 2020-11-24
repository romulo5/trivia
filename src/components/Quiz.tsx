import React from 'react';
import { Link } from 'react-router-dom';

const Quiz = () => (
  <div className="flex flex-col justify-center items-center bg-gray-700 h-screen">
    <h1 className="text-white text-xl">Quiz Page - Title</h1>
    <p className="text-gray-300 p-6">Quiz page Questions</p>
    <p className="text-gray-300">Question Number</p>
    <button
      type="submit"
      className="p-6 bg-green-400 px-6 py-2 mt-4 shadow-xl rounded-mdv "
    >
      True
    </button>
    <Link to="/result">
      <button
        type="submit"
        className="p-6 bg-red-400 px-6 py-2 mt-4 shadow-xl rounded-mdv "
      >
        False
      </button>
    </Link>
  </div>
);

export default Quiz;
