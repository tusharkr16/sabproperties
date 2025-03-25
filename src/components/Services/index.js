const Services = () => {
    return (
      <>
      <section className="container mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Section: Text Content */}
        <div>
          <p className="text-lg text-[#C49A6C] font-medium">
          Transparent and Ethical Transactions
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mt-2">
          Competitive Edge
          </h2>
          <p className="text-gray-700 mt-4">
          

The company boasts a team of experienced real estate professionals who possess in-depth industry knowledge and negotiation skills. Their expertise ensures that clients receive the best deals and unparalleled service. </p>
          <p className="text-gray-700 mt-4">
          Integrity and transparency are at the core of SAB Properties' operations. Every transaction is conducted with honesty, ensuring that clients are well-informed and protected from potential risks. </p>
          <p className="text-gray-700 mt-4">
          With years of experience in the industry, SAB Properties possesses an in-depth understanding of market trends, property valuations, and investment opportunities, allowing clients to make sound financial decisions.
          </p>
  
          {/* Buttons */}
          
        </div>
  
        {/* Right Section: Image with Overlay */}
        <div className="relative">
          
          <img
            src="https://static.wixstatic.com/media/380dc7_5f14ed793a7a4d629592db2bfab8396f~mv2.jpeg/v1/fill/w_512,h_384,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/380dc7_5f14ed793a7a4d629592db2bfab8396f~mv2.jpeg" // Replace with actual image path
            alt="Real Estate"
            className="w-full h-auto object-cover rounded-md"
          />
          
        </div>
      </section>
      </>
    );
  };
  
  export default Services;
  