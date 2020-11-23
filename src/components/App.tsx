import React from 'react';
import '../styles/tailwind.output.css';

const App = () => (
  <div className="flex flex-col justify-center items-center bg-gray-700 h-screen">
    <h1 className="text-white text-xl">Welcome to the Trivia Challenge</h1>
    <p className="text-gray-300 p-6">
      You be presented with 10 True or False questions
    </p>
    <p className="text-gray-300">Can You score 100% ?</p>
    <button
      type="submit"
      className="p-6 bg-green-400 px-6 py-2 mt-4 shadow-xl rounded-mdv "
    >
      Begin
    </button>
  </div>
);

export default App;
