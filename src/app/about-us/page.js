import React from "react";
import Image from "next/image";
import aboutimg from "../../assets/about.jpg";

const About = () => {
  return (
    <>
      <div className="relative w-full h-[300px] md:h-[400px] lg:h-[400px]">
        {/* Background Image */}
        <Image
          src={aboutimg}
          alt="About Us"
          layout="fill"
          objectFit="cover"
          className="brightness-45"
        />

        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold">About Us</h1>
        </div>
      </div>
      <div>
        <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Section: Text Content */}
          <div>
            <p className="text-lg text-[#C49A6C] font-medium">
              We are a leading Co Work Space Provider in Delhi NCR
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">
              Company Profile & History
            </h2>
            <p className="text-gray-700 mt-4">
              SAB Properties Private Limited is well known to render quality-based real estate
              services such as property consultancy, real estate portfolio management, HNI and
              NRI real estate services and solutions, home loan assistance, property
              documentation, project updates, rentals, and re-sale on Asaf Ali Road. Asaf Ali Road runs along the
              southern edge of Old Delhi and is a part of the transitional space between Old Delhi and Lutyens’ New Delhi.
            </p>
            <p className="text-gray-700 mt-4">
              In addition, SAB Properties provides consulting services such as project feasibility
              reports, marketing strategy, and product mix reports to real estate developers.
            </p>
            <p className="text-gray-700 mt-4">
              SAB Properties offers a wide array of commercial real estate services which include
              leasing and sale of commercial properties, including shops, godowns, and offices.
              Our team of professionals not only closes the best deals for you but also assists you
              in completing formalities and associated paperwork.
            </p>
          </div>

          {/* Right Section: Image */}
          <div className="relative hidden lg:block">
            <Image
              src="https://images.pexels.com/photos/29683336/pexels-photo-29683336/free-photo-of-san-francisco-city-hall-on-a-cloudy-day.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Real Estate"
              width={600}
              height={400}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>
        </section>
      </div>

      <div>
        <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Left Section: Image */}
          <div className="relative">
            <Image
              src="https://static.wixstatic.com/media/380dc7_e4e6b670c2694b909abcea753ceb21f1~mv2.jpg/v1/fill/w_378,h_414,al_c,lg_1,q_80,enc_avif,quality_auto/sanjay%2520gupta%2520compressed_edited.jpg"
              alt="Promoter"
              width={378}
              height={414}
              className="w-[350px] h-[350px] lg:ms-24 rounded-md"
            />
          </div>

          {/* Right Section: Text Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Promoter</h2>
            <p className="text-gray-700 mt-4">
              I am a real estate professional. I have been in this industry for more than 30 years now.
            </p>
            <p className="text-gray-700 mt-4">
              SAB Properties Pvt. Ltd is well guided by the dynamic leadership of Mr. Sanjay Gupta,
              the Managing Director of the company. He possesses a great passion to raise the
              benchmarks for client service, customer satisfaction, and integrity.
            </p>
            <p className="text-gray-700 mt-4">
              Prior to entering real estate, he was a stockbroker in the Delhi Stock Exchange.
              He has successfully ventured into Coworking Spaces and Experience Centres.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
