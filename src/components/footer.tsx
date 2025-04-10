import React from 'react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-gray-200 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col space-y-12">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
              <a 
                href="#home" 
                onClick={scrollToSection('home')}
                className="inline-block font-sans font-semibold text-xl text-primary mb-4"
              >
                Alex Mitchell
              </a>
              <p className="text-gray-600 mb-6 max-w-md">Capturing meaningful stories through the lens of minimalism and authenticity.</p>
              <div className="flex space-x-4">
                <a href="https://www.instagram.com/alexmitchellphoto" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="Instagram">
                  <i className="fab fa-instagram text-lg"></i>
                </a>
                <a href="https://www.twitter.com/alexmitchphoto" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="Twitter">
                  <i className="fab fa-twitter text-lg"></i>
                </a>
                <a href="https://www.linkedin.com/in/alexmitchellphotography" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in text-lg"></i>
                </a>
                <a href="https://www.behance.net/alexmitchell" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-primary transition-colors" aria-label="Behance">
                  <i className="fab fa-behance text-lg"></i>
                </a>
              </div>
            </div>
            
            <div className="w-full md:w-1/4 mb-8 md:mb-0">
              <h3 className="font-medium text-gray-900 mb-4">Navigation</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#home"
                    onClick={scrollToSection('home')}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    onClick={scrollToSection('about')}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#gallery"
                    onClick={scrollToSection('gallery')}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    onClick={scrollToSection('contact')}
                    className="text-gray-600 hover:text-primary transition-colors text-sm"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="w-full md:w-1/4">
              <h3 className="font-medium text-gray-900 mb-4">Legal</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">Terms of Service</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">Licensing</a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-primary transition-colors text-sm">Cookies</a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500 mb-4 md:mb-0">&copy; {new Date().getFullYear()} Alex Mitchell Photography. All rights reserved.</p>
            <p className="text-sm text-gray-500">Made with <span className="text-red-500">❤</span> in Portland, Oregon</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
