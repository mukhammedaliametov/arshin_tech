import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import Services from '@/components/Services';
import Presentations from '@/components/Presentations';
import Footer from '@/components/Footer';

const page = () => {
  return (
    <>
      <Header />
      <Hero />
      <Advantages />
      <Services />
      <Presentations />
      <Footer />
    </>
  );
};

export default page;