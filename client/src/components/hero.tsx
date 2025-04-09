import React from 'react';

const Hero: React.FC = () => {
  const scrollToGallery = (e: React.MouseEvent) => {
    e.preventDefault();
    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="h-screen flex items-center justify-center bg-[#1A202C] relative overflow-hidden">
      <div className="absolute inset-0 opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
          alt="Stunning landscape photograph" 
          className="object-cover w-full h-full"
        />
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h1 className="font-serif font-bold text-4xl md:text-6xl text-white mb-4 md:mb-6">Capturing Moments in Time</h1>
        <p className="text-white text-lg md:text-xl mb-8 max-w-2xl mx-auto">Landscape and portrait photography that tells a story</p>
        <a 
          href="#gallery" 
          onClick={scrollToGallery}
          className="inline-block bg-white text-primary font-medium py-3 px-8 rounded-md hover:bg-accent transition-colors"
        >
          View Gallery
        </a>
      </div>
    </section>
  );
};

export default Hero;
