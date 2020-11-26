import React from 'react';
import { Link } from 'react-router-dom';

const Results = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-gray-700 h-screen">
      <h1 className="text-white text-xl">Result - Title</h1>
      <p className="text-gray-300 p-6">You scored x/10</p>
      <p className="text-gray-300">Question List</p>

      <Link to="/">
        <button
          type="submit"
          className="p-6 bg-blue-400 px-6 py-2 mt-4 shadow-xl rounded-mdv "
        >
          Play Again ?
        </button>
      </Link>
    </div>
  );
};

export default Results;
