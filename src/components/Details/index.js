import Image from "next/image";

const CompanyProfile = () => {
    return (
      <>
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
          SAB Properties Private Limited has firmly established itself as a trusted and reputable name in the real estate sector. Based on Asaf Ali Road, the company is widely recognized for delivering exceptional real estate services tailored to the diverse needs of individuals, investors, and developers. </p>
          <p className="text-gray-700 mt-4">
          With a commitment to quality and customer satisfaction, SAB Properties has played a pivotal role in shaping the real estate landscape, offering solutions that cater to both commercial and residential clients. </p>
          <p className="text-gray-700 mt-4">
          At SAB Properties, the vision is to redefine the real estate experience through transparency, innovation, and customer-centric services. The company aims to provide seamless real estate transactions while fostering long-term relationships with clients. Its mission revolves around ensuring client satisfaction by offering comprehensive real estate solutions that encompass property consultancy, portfolio management, legal assistance, and market insights.
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
          
          <Image
            src="https://static.wixstatic.com/media/380dc7_26f96d908c304787a48b9ba206e49cfe~mv2.jpg/v1/fill/w_512,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/380dc7_26f96d908c304787a48b9ba206e49cfe~mv2.jpg" // Replace with actual image path
            alt="Real Estate"
            className="w-full h-auto object-cover rounded-md"
          />
          
        </div>
      </section>
      </>
    );
  };
  
  export default CompanyProfile;
  