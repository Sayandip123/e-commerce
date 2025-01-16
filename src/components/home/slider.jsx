"use client"
import { useState, useEffect } from "react";

export default function Slider() {
  // Array of image URLs
  const images = [
    "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-240909-lp.jpg.landing-big_2x.jpg", // Add your image paths here
    "https://cdn.wccftech.com/wp-content/uploads/2024/03/ps5-pro-mockup-HD-1456x819.jpg",
    "https://shotkit.com/wp-content/uploads/bb-plugin/cache/sony-a7iv-review-07-landscape-b46bbebcbd42841aa8cbb5ac8307f756-zybravgx2q47.jpg",
    "https://sony.scene7.com/is/image/sonyglobalsolutions/Headphones-primary%20tout-mobile-1534x1083?$toutMobile$&fmt=png-alpha",
    "https://rog.asus.com/media/1622468922392.jpg",
  ];

  // State for the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change every 2 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {/* Image container with transition */}
      <div
        className="flex w-full h-full transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`, // Move to the next image
        }}
      >
        {/* Map through the image array and display images */}
        {images.map((image, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={image}
              alt={`Slider Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Optional: Navigation buttons (Left and Right) */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
      >
        &#10094;
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
        onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}
      >
        &#10095;
      </button>
    </div>
  );
}
