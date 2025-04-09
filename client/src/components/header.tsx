import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  // Track scroll position for header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
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
    <header className="fixed w-full bg-white bg-opacity-95 shadow-sm z-50">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <a 
            href="#home" 
            onClick={scrollToSection('home')}
            className="font-serif font-bold text-2xl md:text-3xl text-primary"
          >
            Emma Rivers
          </a>
          
          {/* Mobile menu button */}
          <button 
            onClick={handleMobileMenuToggle} 
            className="md:hidden text-secondary focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8 text-secondary font-medium">
              <li>
                <a 
                  href="#home" 
                  onClick={scrollToSection('home')}
                  className="hover:text-primary transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  onClick={scrollToSection('about')}
                  className="hover:text-primary transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#gallery" 
                  onClick={scrollToSection('gallery')}
                  className="hover:text-primary transition-colors"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  onClick={scrollToSection('contact')}
                  className="hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
        
        {/* Mobile Navigation */}
        <nav 
          className={`md:hidden ${mobileMenuOpen ? 'max-h-[1000px]' : 'max-h-0'} overflow-hidden transition-[max-height] duration-500 ease-in-out`}
        >
          <ul className="pt-4 pb-2 text-secondary font-medium">
            <li className="py-2 border-b border-accent">
              <a 
                href="#home" 
                onClick={(e) => {
                  scrollToSection('home')(e);
                  handleMobileMenuClick();
                }}
                className="block"
              >
                Home
              </a>
            </li>
            <li className="py-2 border-b border-accent">
              <a 
                href="#about" 
                onClick={(e) => {
                  scrollToSection('about')(e);
                  handleMobileMenuClick();
                }}
                className="block"
              >
                About
              </a>
            </li>
            <li className="py-2 border-b border-accent">
              <a 
                href="#gallery" 
                onClick={(e) => {
                  scrollToSection('gallery')(e);
                  handleMobileMenuClick();
                }}
                className="block"
              >
                Gallery
              </a>
            </li>
            <li className="py-2">
              <a 
                href="#contact" 
                onClick={(e) => {
                  scrollToSection('contact')(e);
                  handleMobileMenuClick();
                }}
                className="block"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
