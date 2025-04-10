import React, { useState } from 'react';
import { Dialog } from '@/components/ui/dialog';

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
    imageSrc: "https://images.unsplash.com/photo-1604537466608-109fa2f16c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    title: "Serenity",
    location: "Olympic National Park",
    year: "2022"
  },
  {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    title: "Perspective",
    location: "Los Angeles",
    year: "2023"
  },
  {
    id: 3,
    imageSrc: "https://images.unsplash.com/photo-1525874684015-58379d421a52?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    title: "Symmetry",
    location: "Banff",
    year: "2021"
  },
  {
    id: 4,
    imageSrc: "https://images.unsplash.com/photo-1486870591958-9b9d0d1dda99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    title: "Expedition",
    location: "Montana",
    year: "2022"
  },
  {
    id: 5,
    imageSrc: "https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    title: "Local Flavor",
    location: "Portland",
    year: "2023"
  },
  {
    id: 6,
    imageSrc: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1400&q=80",
    title: "Majesty",
    location: "Yosemite",
    year: "2021"
  }
];

const FullScreenGallery: React.FC = () => {
  // Create a new list with 12 gallery items - duplicating the existing ones
  const extendedGallery = [...galleryItems, ...galleryItems];
  
  return (
    <div className="p-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {extendedGallery.map((item, index) => (
          <div key={`full-${index}`} className="aspect-square overflow-hidden rounded-lg">
            <img 
              src={item.imageSrc} 
              alt={item.title} 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [isImageOpen, setIsImageOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isFullGalleryOpen, setIsFullGalleryOpen] = useState(false);

  const openImage = (item: GalleryItem) => {
    setSelectedImage(item);
    setIsImageOpen(true);
  };

  const closeImage = () => {
    setIsImageOpen(false);
    setSelectedImage(null);
  };

  const openFullGallery = () => {
    setIsFullGalleryOpen(true);
  };

  const closeFullGallery = () => {
    setIsFullGalleryOpen(false);
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h4 className="text-primary font-medium mb-2">My Work</h4>
          <h2 className="font-sans font-bold text-3xl md:text-4xl mb-6 text-gray-900">Featured Photography</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Добро пожаловать в мою галерею! Здесь вы найдете подборку моих любимых работ - от пейзажей до портретов. Каждый снимок - это отдельная история, момент, который я хотел сохранить и поделиться с вами.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {galleryItems.map((item) => (
            <div key={item.id} className="rounded-xl overflow-hidden group relative bg-white shadow-xl hover:shadow-2xl transition-all duration-300">
              <div 
                className="cursor-pointer"
                onClick={() => openImage(item)}
              >
                <img 
                  src={item.imageSrc} 
                  alt={item.title} 
                  className="w-full h-80 object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="p-5">
                  <h3 className="font-medium text-xl text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.location}, {item.year}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button 
            onClick={openFullGallery}
            className="inline-flex items-center justify-center bg-primary text-white font-medium py-3 px-8 rounded-full hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl"
          >
            <span>View Full Gallery</span>
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeImage}
        >
          <div 
            className="relative max-w-6xl max-h-screen p-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on the content
          >
            <button 
              onClick={closeImage}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center z-10 hover:bg-opacity-70 transition-all"
            >
              <i className="fas fa-times"></i>
            </button>
            <img 
              src={selectedImage.imageSrc} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[90vh] object-contain"
            />
            <div className="absolute bottom-8 left-0 right-0 text-center text-white">
              <h3 className="text-2xl font-medium">{selectedImage.title}</h3>
              <p>{selectedImage.location}, {selectedImage.year}</p>
            </div>
          </div>
        </div>
      )}

      {/* Full Gallery Modal */}
      {isFullGalleryOpen && (
        <div 
          className="fixed inset-0 flex flex-col z-50"
        >
          <div className="sticky top-0 bg-white bg-opacity-95 backdrop-blur-md p-4 flex items-center justify-between border-b z-10 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">Full Portfolio Gallery</h2>
            <button 
              onClick={closeFullGallery}
              className="text-gray-900 hover:text-primary transition-colors p-2 rounded-full hover:bg-gray-100"
              aria-label="Close gallery"
            >
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>
          <div 
            className="flex-1 bg-white overflow-y-auto p-4 md:p-8"
            onClick={(e) => {
              // Close if clicking directly on the background (not on an image)
              if (e.target === e.currentTarget) {
                closeFullGallery();
              }
            }}
          >
            <FullScreenGallery />
            <div className="mt-8 text-center pb-8">
              <button 
                onClick={closeFullGallery}
                className="inline-flex items-center justify-center px-6 py-2 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition-colors"
              >
                Close Gallery
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
