import React from 'react';
import ReactCarousel from '../ImageCarousel/ReactCarousel';
import CardComponent from "../Card/CardComponent";
import Navbar from '../Navbar';
import Footer from '../Footer/Footer';

const Home = () => {
  return (


    <>
      <Navbar />
      <ReactCarousel />
      <CardComponent />
      <Footer />


    </>
  );
};

export default Home;