import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="w-full md:w-2/5 mb-8 md:mb-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1548535537-3cfaf1fc327c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80" 
                alt="Emma Rivers portrait" 
                className="rounded-lg shadow-lg w-full h-auto object-cover max-h-[32rem]"
              />
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6">About Me</h2>
            <div className="prose prose-lg max-w-none text-secondary">
              <p className="mb-4">I'm Emma Rivers, a landscape and portrait photographer based in Portland, Oregon. For over a decade, I've been capturing the intimate relationship between people and nature through my lens.</p>
              <p className="mb-4">My work explores themes of solitude, connection, and the ephemeral beauty of our natural world. I'm drawn to the interplay of light and shadow, finding stories in quiet moments that might otherwise go unnoticed.</p>
              <p className="mb-6">When I'm not chasing the perfect light in remote locations, I collaborate with individuals and brands to create authentic visual narratives that resonate.</p>
              <div className="flex items-center space-x-4 text-secondary">
                <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                  <i className="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" className="hover:text-primary transition-colors" aria-label="Facebook">
                  <i className="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
