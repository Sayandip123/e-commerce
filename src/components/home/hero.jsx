"use client"
import { useState, useEffect } from "react";

export default function Hero(){
  const images = [
   "https://www.apple.com/newsroom/images/2024/09/apple-debuts-iphone-16-pro-and-iphone-16-pro-max/tile/Apple-iPhone-16-Pro-hero-240909-lp.jpg.landing-big_2x.jpg", // Add your image paths here
    "https://cdn.wccftech.com/wp-content/uploads/2024/03/ps5-pro-mockup-HD-1456x819.jpg",
    "https://shotkit.com/wp-content/uploads/bb-plugin/cache/sony-a7iv-review-07-landscape-b46bbebcbd42841aa8cbb5ac8307f756-zybravgx2q47.jpg",
    "https://sony.scene7.com/is/image/sonyglobalsolutions/Headphones-primary-tout-mobile-hk-1534x1083?$toutMobile$&fmt=png-alpha",
    "https://rog.asus.com/media/1622468922392.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Change image every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change every 2 seconds

    // Cleanup the interval when component unmounts
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Section: Image Slider */}
        <div className="w-full md:w-1/2">
          <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
            {/* Image container with transition */}
            <div
              className="flex w-full h-full transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`, // Move to the next image
              }}
            >
              {/* Map through the images array */}
              {images.map((image, index) => (
                <div key={index} className="w-full h-full flex-shrink-0">
                  <img
                    src={image}
                    alt={`Slider Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Text */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
            Discover the Best Deals at Your Fingertips
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Explore a wide range of products—from the latest fashion to top-rated
            electronics. Enjoy exclusive discounts, fast delivery, and the best
            shopping experience online.
          </p>
          <a
            href="/shop"
            className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
      
    
  )
}