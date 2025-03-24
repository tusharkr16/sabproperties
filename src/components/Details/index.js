const CompanyProfile = () => {
    return (
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section: Text Content */}
        <div>
          <p className="text-lg text-[#C49A6C] font-medium">
            We are a leading Real Estate Agency in Delhi NCR
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
            Company Profile & History
          </h2>
          <p className="text-gray-700 mt-4">
          Asaf Ali Road runs along the southern edge of Old Delhi, and is a part of the transitional space between Old Delhi and the Lutyens’ New Delhi. From Old Delhi’s Delhi Gate all the way to Ajmeri Gate (with Turkman Gate in between), </p>
          <p className="text-gray-700 mt-4">
          Asaf Ali Road is lined with modernist commercial and office buildings from the 1940s/50s all the way to the 1990s. </p>
          <p className="text-gray-700 mt-4">
            To enhance our skills and to take the company to the international level, we have partnered with Oncor International. Oncor International is the best privately owned real estate company that offers a wide array of services for investors and corporates.
          </p>
  
          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button className="bg-[#C49A6C] text-white px-6 py-3 rounded-md font-medium flex items-center hover:bg-opacity-90 transition">
              📞 REQUEST A CALL
            </button>
            <button className="bg-gray-200 text-gray-900 px-6 py-3 rounded-md font-medium hover:bg-gray-300 transition">
              ABOUT US
            </button>
          </div>
        </div>
  
        {/* Right Section: Image with Overlay */}
        <div className="relative">
          <img
            src="https://images.pexels.com/photos/31272819/pexels-photo-31272819/free-photo-of-high-rise-apartment-buildings-in-bustling-cityscape.jpeg?auto=compress&cs=tinysrgb&w=600" // Replace with actual image path
            alt="Real Estate"
            className="w-full h-auto object-cover rounded-md"
          />
          <div className="absolute bottom-6 left-6 text-white font-bold text-2xl">
            <p>360°</p>
            <p>REAL ESTATE SERVICES</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default CompanyProfile;
  