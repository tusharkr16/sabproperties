import React from 'react';

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-100 p-6 md:p-12">
      
      {/* Left Side: Contact Info & Google Map */}
      <div className="flex flex-col md:w-1/2 space-y-6">
        {/* Contact Info */}
        <div className="bg-black text-white p-6 md:p-10 rounded-lg">
          <h2 className="text-2xl md:text-3xl font-bold">Sab Groups</h2>
          <p className="text-lg font-semibold mt-2">Mr. Sanjay Gupta</p>

          <div className="mt-4 space-y-3 text-sm md:text-base">
            <p className="flex items-center">
              📍1, 21, Asaf Ali Rd, Kucha Pati Ram, Ajmeri Gate, New Delhi, Delhi, 110002
            </p>
            
            <p className="flex items-center">
              📱 +91-9313233444
            </p>
            <p className="flex items-center">
              ✉️ sabsanjay@hotmail.com
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="h-64 md:h-80 w-full rounded-lg overflow-hidden shadow-lg">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5067692437588!2d77.2238712737532!3d28.644541183538376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfde4182f59c1%3A0x9561b608c4bf06dd!2sSab%20Group!5e0!3m2!1sen!2sin!4v1742839243478!5m2!1sen!2sin" width="600" height="450"></iframe>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="bg-white  p-6 md:p-10 shadow-lg rounded-lg md:w-1/2 mt-6 md:mt-0 md:ml-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Please leave your Request</h2>

        <form className="space-y-4">
          {/* Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input type="text" placeholder="Your Name" className="border-b border-gray-400 py-2 outline-none w-full" />
          <input type="text" placeholder="Your Name" className="border-b border-gray-400 py-2 outline-none w-full" />

            <input type="text" placeholder="Your Name" className="border-b border-gray-400 py-2 outline-none w-full" />
            <input type="email" placeholder="Your Email" className="border-b border-gray-400 py-2 outline-none w-full" />
          </div>

          {/* Mobile Input */}
          <div className="flex items-center border-b border-gray-400 py-2">
            <span className="mr-2">🇮🇳 +91</span>
            <input type="text" placeholder="Your Mobile" className="outline-none w-full" />
          </div>

          {/* Message */}
          <textarea placeholder="Your Message" className="border border-black py-2 outline-none w-full"></textarea>

          

          {/* Submit Button */}
          <button className="w-full bg-[#C38C5D] text-white py-3 rounded-lg font-semibold text-lg">
            Submit
          </button>
        </form>
      </div>

    </div>
  );
};

export default ContactForm;
