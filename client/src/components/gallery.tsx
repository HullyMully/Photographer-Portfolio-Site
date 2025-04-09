import React from 'react';

interface GalleryItem {
  id: number;
  imageSrc: string;
  title: string;
  location: string;
  year: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    imageSrc: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Mountain Twilight",
    location: "Oregon",
    year: "2022"
  },
  {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Golden Hour Portrait",
    location: "California",
    year: "2023"
  },
  {
    id: 3,
    imageSrc: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Mirror Lake",
    location: "Washington",
    year: "2021"
  },
  {
    id: 4,
    imageSrc: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "The Journey",
    location: "Montana",
    year: "2022"
  },
  {
    id: 5,
    imageSrc: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "City Geometry",
    location: "New York",
    year: "2023"
  },
  {
    id: 6,
    imageSrc: "https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    title: "Wild Encounter",
    location: "Alaska",
    year: "2021"
  }
];

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-accent bg-opacity-30">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="font-serif font-bold text-3xl md:text-4xl mb-6 text-center">My Portfolio</h2>
        <p className="text-center text-secondary max-w-2xl mx-auto mb-12">A selection of my favorite captures from around the world, each telling a unique story about our beautiful planet and its inhabitants.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item rounded-lg overflow-hidden shadow-lg group relative">
              <img 
                src={item.imageSrc} 
                alt={item.title} 
                className="w-full h-80 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-[rgba(26,32,44,0.7)] overflow-hidden w-full h-0 group-hover:h-1/4 transition-[height] duration-500 ease-in-out">
                <div className="p-4">
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <p className="text-white text-sm opacity-80">{item.location}, {item.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-block border-2 border-primary text-primary font-medium py-3 px-8 rounded-md hover:bg-primary hover:text-white transition-colors">View Full Gallery</a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
