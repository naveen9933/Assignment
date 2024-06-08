"use client";

import React from 'react';
import Messagebar from "./messagebar";
import Navbar from "./navbar";
import { useMenu } from './menuContext';
import Menu from './menu';
import Intro from './intro';
import Registration from './registration';
import Explore from './explore';
import Links from './links';
import Cards from './cards';
import Capabilities from './capabilities';
import Trust from './trust';
import Faq from './Faq'
import Footer from './footer';

// Main component
function Main() {
  const { isOpen } = useMenu();

  return (
    <div className='grid'>
      {/* Messagebar */}
      <Messagebar />
      {/* Navbar */}
      <Navbar />
      {/* Conditional rendering based on menu open state */}
      {isOpen ? (
        <Menu />
      ) : (
        <>
          {/* Components rendered when menu is closed */}
          <Intro />
          <Registration />
          <Links />
          <Explore />
          <Cards />
          <Capabilities />
          <Trust />
          <Faq />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Main;
