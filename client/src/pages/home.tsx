import React from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Gallery from '@/components/gallery';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

const Home: React.FC = () => {
  return (
    <div className="font-sans text-primary bg-background">
      <Header />
      <Hero />
      <About />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
