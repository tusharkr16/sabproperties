"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const ProjectsCarousel = () => {
  const projects = [
    {
      img: "https://static.wixstatic.com/media/380dc7_c7edea62bbdf47b5bb8d90a03b9167b9~mv2.jpg/v1/fill/w_512,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/380dc7_c7edea62bbdf47b5bb8d90a03b9167b9~mv2.jpg",
      title: "6 Seater Cabin - 240sqft",
    },
    {
      img: "https://static.wixstatic.com/media/380dc7_7f7f9d3c25684c919030cf560e289f28~mv2.jpg/v1/fill/w_512,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/380dc7_7f7f9d3c25684c919030cf560e289f28~mv2.jpg",
      title: "2 seater Cabin - 160sqft",
    },
    {
      img: "https://static.wixstatic.com/media/380dc7_5f14ed793a7a4d629592db2bfab8396f~mv2.jpeg/v1/fill/w_512,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/380dc7_5f14ed793a7a4d629592db2bfab8396f~mv2.jpeg",
      title: "3 seater Cabin - 120sqft",
      
    },
    {
        img: "https://static.wixstatic.com/media/380dc7_28f1a1cd91544ec6abdb92416d943b98~mv2.jpg/v1/fill/w_512,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/380dc7_28f1a1cd91544ec6abdb92416d943b98~mv2.jpg",
        title: "Offices- 360sqft",
        
      },
      {
        img: "https://static.wixstatic.com/media/380dc7_26f96d908c304787a48b9ba206e49cfe~mv2.jpg/v1/fill/w_512,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/380dc7_26f96d908c304787a48b9ba206e49cfe~mv2.jpg",
        title: "Office Space -1100sqft",
        
      },
  ];

  return (
    <section className="bg-gray-800 text-white py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Section */}
        <div className="md:w-1/3">
          <h2 className="text-3xl font-bold text-[#C49A6C]">
            Continues to be the trendsetter.
          </h2>
          <p className="text-gray-300 mt-4">
          Facilitating smooth leasing and sale transactions for office spaces, retail outlets, warehouses, and industrial properties.
          </p>
        </div>

        {/* Right Section: Swiper Carousel */}
        <div className="md:w-2/3 w-full">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="rounded-lg"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="text-center">
                <Image
                  src={project.img}
                  alt={project.title}
                  width={512} // Set image width
                  height={384}
                  className="w-full h-64 object-cover rounded-md"
                />
                <h3 className="mt-4 font-bold">{project.title}</h3>
                <p className="text-gray-400">{project.details}</p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
