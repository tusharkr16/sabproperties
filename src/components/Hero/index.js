"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedProperty, setSelectedProperty] = useState("Select Property");

  const propertyTypes = [
    { label: "Residential", value: "residential" },
    { label: "Commercial", value: "commercial" },
    { label: "Farm Houses", value: "farm-houses" },
    { label: "Rented Properties for Sale", value: "rented" }
  ];

  const handlePropertySelect = (property) => {
    setSelectedProperty(property.label);
    setIsDropdownOpen(false);
    // You can add routing logic here based on the property.value
    // router.push(`/properties/${property.value}`);
  };

  return (
    <section className="flex flex-col lg:relative w-full min-h-[500px] md:min-h-[600px] lg:h-screen items-center justify-center text-white">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="lg:absolute top-0 left-0 w-full h-[540px] lg:h-full object-cover"
      >
        <source
          src="https://videos.pexels.com/video-files/6950312/6950312-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Content */}
      <div className="relative z-10 bg-black lg:bg-black/70 py-6 lg:rounded-xl text-center px-6 md:px-12 w-full max-w-3xl">
        <h1 className="text-2xl md:text-4xl font-semibold mb-4">
          We help you make the best decision
        </h1>
        <h2 className="text-lg md:text-2xl mb-6">Find your property</h2>
        
        {/* Quick Access Buttons - Moved above dropdown */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <button 
            className="px-4 py-2 border border-yellow-600 text-white rounded cursor-pointer hover:bg-yellow-800 transition-colors"
            onClick={() => router.push('/properties/Cowork')}
          >
            Co Work
          </button>
          <button 
            className="px-4 py-2 border border-yellow-600 text-white rounded cursor-pointer hover:bg-yellow-800 transition-colors"
            onClick={() => router.push('/properties/Godown')}
          >
            Godown
          </button>
          <button 
            className="px-4 py-2 border border-yellow-600 text-white rounded cursor-pointer hover:bg-yellow-800 transition-colors"
            onClick={() => router.push('/properties/Office')}
          >
            Office
          </button>
          <button 
            className="px-4 py-2 border border-yellow-600 text-white rounded cursor-pointer hover:bg-yellow-800 transition-colors"
            onClick={() => router.push('/properties/Showroom')}
          >
            Showroom
          </button>
        </div>

        {/* Dropdown Filter - Now positioned below buttons */}
        <div className="relative w-full max-w-md mx-auto">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full px-4 py-3 bg-white/10 border border-yellow-600 text-white rounded-lg flex justify-between items-center hover:bg-white/20 transition-colors"
          >
            <span>{selectedProperty}</span>
            <svg
              className={`w-5 h-5 ml-2 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {isDropdownOpen && (
            <div className="absolute z-20 w-full mt-1 bg-black/90 border border-yellow-600 rounded-lg shadow-lg">
              {propertyTypes.map((property) => (
                <div
                  key={property.value}
                  className="px-4 py-3 cursor-pointer hover:bg-yellow-800/50 transition-colors"
                  onClick={() => handlePropertySelect(property)}
                >
                  {property.label}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;