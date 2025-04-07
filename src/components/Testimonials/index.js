"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Quote } from 'lucide-react';
import { useEffect } from 'react';

export function Testimonials() {
  const testimonials = [
    {
      title: "Warehouse Purchase in NCR",
      content: "Our growing business needed a large warehouse in the NCR region, and Sab Properties was the perfect partner. Their expertise made the entire process straightforward and hassle-free.",
      author: "Vivek Patel",
      role: "Logistics Manager",
      verified: true
    },
    {
      title: "Office Space for Rent in Delhi",
      content: "I was looking to rent office space in Delhi, and Sab Properties came highly recommended. The lease terms were fair, and the support from their team was outstanding.",
      author: "Suman Arora",
      role: "Entrepreneur",
      verified: true
    },
    {
      title: "Commercial Property Investment",
      content: "As a first-time commercial property investor, I was nervous about the process. Sab Properties guided me through every step, explaining all the details clearly.",
      author: "Rajesh Mehta",
      role: "Investor",
      verified: true
    },
    {
      title: "Retail Space Acquisition",
      content: "Finding the perfect retail location in Mumbai was challenging until we worked with Sab Properties. Their market knowledge and negotiation skills secured us a prime location.",
      author: "Priya Sharma",
      role: "Retail Chain Owner",
      verified: true
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      window.dispatchEvent(new Event('resize'));
    };
    handleResize();
  }, []);

  return (
    <section className="py-8 px-3 bg-gray-800 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-blue-200 mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-1/2 right-10 w-32 h-32 rounded-full bg-indigo-200 mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-32 h-32 rounded-full bg-purple-200 mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#C49A6C] mb-4">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-6 text-md text-white max-w-2xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what our valued clients have to say about their experiences.
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            waitForTransition: true,
          }}
          pagination={{
            clickable: true,
            el: '.testimonial-pagination',
            type: 'bullets',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          loop={true}
          speed={1000}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="!pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-8 rounded-xl shadow-lg h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{testimonial.title}</h3>
                </div>
                <Quote className="w-8 h-8 text-blue-500 mb-4 opacity-70" />
                <p className="text-gray-600 mb-6 flex-grow italic">&quot;{testimonial.content}&quot;</p>
                <div className="flex items-center mt-auto">
                  <div className="flex-1">
                    <p className="font-medium text-gray-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  {testimonial.verified && (
                    <div className="ml-4 bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium flex items-center">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      Verified
                    </div>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="testimonial-pagination flex justify-center gap-2 mt-6"></div>
      </div>

      {/* Add these styles to your global CSS */}
      <style jsx global>{`
        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background-color: #CBD5E0;
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background-color: #3B82F6;
          width: 30px;
          border-radius: 6px;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
}