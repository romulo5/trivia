import React from 'react';
import { Link } from 'react-router-dom';
import Layout from 'containers/Layout';

const Error = () => {
  return (
    <Layout>
      <h1 className="text-white text-xl">Oops - page not found</h1>

      <h1 className="transition transform hover:scale-125 hover:text-green-500 text-white text-xl py-10">
        <Link to="/">Click here to start our Quiz</Link>
      </h1>
    </Layout>
  );
};

export default Error;
