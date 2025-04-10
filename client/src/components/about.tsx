import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto">
          <div className="w-full md:w-2/5 mb-8 md:mb-0">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80" 
                alt="Alex Mitchell portrait" 
                className="rounded-xl shadow-xl w-full h-auto object-cover aspect-[3/4]"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-xl -z-10"></div>
            </div>
          </div>
          <div className="w-full md:w-3/5">
            <h4 className="text-primary font-medium mb-2">About Me</h4>
            <h2 className="font-sans font-bold text-3xl md:text-4xl mb-6 text-gray-900">Storytelling Through Photography</h2>
            <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
              <p className="mb-4">Hi, I'm Alex Mitchell, a photographer based out of Portland, Oregon. My passion for photography started seven years ago when I first picked up a camera. Since then, I've been shooting landscapes and portraits, striving to capture the special moments and emotions in each frame.</p>
              <p className="mb-4">My approach to photography is based on sincerity and attention to detail. I believe that every shot should tell a story and convey the mood of the moment. When working with clients, I try to create a comfortable atmosphere to get the most natural and expressive shots.</p>
              <p className="mb-6">When not traveling for photoshoots, I teach photography workshops and collaborate with brands that share my aesthetic vision and environmental values.</p>
              <div className="flex items-center space-x-6 text-gray-700 mt-8">
                <a href="https://www.instagram.com/alexmitchellphoto" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Instagram">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="https://www.twitter.com/alexmitchphoto" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Twitter">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/alexmitchellphotography" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
                <a href="https://www.behance.net/alexmitchell" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="Behance">
                  <i className="fab fa-behance text-2xl"></i>
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
