"use client"
import Image from "next/image";
import { useRef } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"; // Importing icons

const Xscrollwrapper = () => {
  const features = [
    { image: "/images/Frame 30.svg" },
    { image: "/images/Frame 30.svg" },
    { image: "/images/Frame 30.svg" },
    { image: "/images/Frame 30.svg" },
    { image: "/images/Frame 30.svg" },
    { image: "/images/Frame 30.svg" },
    { image: "/images/Frame 30.svg" },
    { image: "/images/Frame 30.svg" },
    { image: "/images/Frame 30.svg" },
  ];

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Heading with Arrows */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-4xl font-extrabold">OUR HAPPY CUSTOMERS</h2>
        <div className="flex items-center space-x-4">
          <button
            onClick={scrollLeft}
            className="text-black hover:text-gray-700 p-1"
          >
            <FiArrowLeft size={24} />
          </button>
          <button
            onClick={scrollRight}
            className="text-black hover:text-gray-700 p-1"
          >
            <FiArrowRight size={24} />
          </button>
        </div>
      </div>

      {/* Slider Wrapper */}
      <div className="relative">
        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex space-x-4 overflow-x-scroll scrollbar-hide"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-lg min-w-[250px]"
            >
              <div className="relative w-full h-40">
                <Image
                  src={feature.image}
                  alt={`Feature ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    



    </div>
  );
};

export default Xscrollwrapper;
