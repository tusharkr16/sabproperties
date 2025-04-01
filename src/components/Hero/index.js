"use client"
import React from "react";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();
  return (
    <section className=" flex flex-col lg:relative w-full min-h-[500px] md:min-h-[600px]  lg:h-screen flex items-center justify-center text-white">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="lg:absolute top-0 left-0 w-full h-[540px] lg:h-full object-cover brightness-55"
      >
        <source
          src="https://videos.pexels.com/video-files/6950312/6950312-uhd_2560_1440_30fps.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      
      {/* Content */}
      <div className="relative z-10 bg-black  lg:bg-black/70 py-6 lg:rounded-xl text-center px-6 md:px-12">
        <h1 className="text-2xl md:text-4xl font-semibold mb-4">
          We help you make the best decision
        </h1>
        <h2 className="text-lg md:text-2xl mb-6">Find your property</h2>
        
        <div className="flex flex-wrap justify-center gap-3">
          <button className="px-4 py-2 border border-yellow-600  text-white rounded cursor-pointer hover:bg-yellow-800" onClick={()=>router.push('/properties/Cowork')}>Co Work</button>
          <button className="px-4 py-2 border border-yellow-600 text-white rounded cursor-pointer hover:bg-yellow-800" onClick={()=>router.push('/properties/Godown')}>Godown</button>
          <button className="px-4 py-2 border border-yellow-600 text-white rounded cursor-pointer hover:bg-yellow-800" onClick={()=>router.push('/properties/Office')}>Office</button>
          <button className="px-4 py-2 border border-yellow-600 text-white rounded cursor-pointer hover:bg-yellow-800" onClick={()=>router.push('/properties/Showroom')}>Showroom</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
