import React from 'react';
import Navbar from '../Navbar';
const Home = () => {
  return (


    <>
      <Navbar />
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh'
        }}
      >

        <h1>Welcome to our website!</h1>
      </div>
    </>
  );
};

export default Home;