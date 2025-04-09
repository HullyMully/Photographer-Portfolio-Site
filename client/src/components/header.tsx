import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleMobileMenuClick = () => {
    setMobileMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${scrolled ? 'backdrop-blur-md bg-white/80' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            onClick={scrollToSection('home')}
            className="font-sans font-semibold text-xl text-primary"
          >
            Alex Mitchell
          </a>
          
          {/* Mobile menu button */}
          <button 
            onClick={handleMobileMenuToggle} 
            className="md:hidden text-primary focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-lg`}></i>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-10 text-gray-800 font-medium text-sm">
              <li>
                <a 
                  href="#home" 
                  onClick={scrollToSection('home')}
                  className="hover:text-primary transition-colors py-1"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={scrollToSection('about')}
                  className="hover:text-primary transition-colors py-1"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  onClick={scrollToSection('gallery')}
                  className="hover:text-primary transition-colors py-1"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={scrollToSection('contact')}
                  className="hover:text-primary transition-colors py-1"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <div 
          className={`fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}
        >
          <div className="flex justify-end p-6">
            <button 
              onClick={handleMobileMenuToggle}
              className="text-primary focus:outline-none"
              aria-label="Close menu"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          <nav className="flex items-center justify-center h-full">
            <ul className="text-center space-y-8 text-gray-800 text-lg font-light">
              <li>
                <a 
                  href="#home" 
                  onClick={(e) => {
                    scrollToSection('home')(e);
                    handleMobileMenuClick();
                  }}
                  className="hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={(e) => {
                    scrollToSection('about')(e);
                    handleMobileMenuClick();
                  }}
                  className="hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  onClick={(e) => {
                    scrollToSection('gallery')(e);
                    handleMobileMenuClick();
                  }}
                  className="hover:text-primary transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    scrollToSection('contact')(e);
                    handleMobileMenuClick();
                  }}
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
