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
    <section id="home" className="h-screen flex flex-col items-center justify-center bg-white relative overflow-hidden pt-20">
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-5xl">
        <h1 className="font-sans font-bold text-5xl md:text-7xl text-black mb-6 tracking-tight leading-tight">
          <span className="bg-gradient-to-r from-primary to-blue-400 text-transparent bg-clip-text">Capturing Life</span>
          <br/>
          Through a Lens
        </h1>
        <p className="text-gray-600 text-xl md:text-2xl mb-12 max-w-3xl mx-auto font-light leading-relaxed">
          Photography that tells stories and preserves moments with simplicity and emotion
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#gallery" 
            onClick={scrollToGallery}
            className="inline-block bg-primary text-white font-medium py-3 px-8 rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            View Gallery
          </a>
          <a 
            href="#contact" 
            onClick={(e) => {
              e.preventDefault();
              const contactSection = document.getElementById('contact');
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-block bg-white text-primary font-medium py-3 px-8 rounded-full border border-primary hover:bg-gray-50 transition-all"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="absolute bottom-0 w-full overflow-hidden">
        <div className="w-full h-12 bg-gradient-to-t from-gray-100 to-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
