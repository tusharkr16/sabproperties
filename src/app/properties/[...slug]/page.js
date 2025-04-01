"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";

const categories = ["Office", "Cowork", "Showroom", "Godown"];
const furnishings = ["Furnished", "Semi-Furnished", "Unfurnished"];
const sizes = ["0-200", "200-500", "500-1000", "1000+"];

const ShopPage = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug || []; // Catch-all segments

  // Extract parameters from URL
  const selectedCategory = slug[0] || "All";
  const selectedFurnishing = slug[1] || "";
  const selectedSize = slug[2] || "";

  // State for sidebar in mobile view
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to update route dynamically
  const updateFilters = (category, furnishing, size) => {
    const urlParts = [category, furnishing, size].filter(Boolean);
    router.push(`/properties/${urlParts.join("/")}`);
    setSidebarOpen(false); // Close sidebar on mobile
  };

  return (
    <>
       <div className="md:hidden mt-4 justify-center items-center flex">
  <button
    className="bg-gray-700 text-white p-2 rounded w-18 j"
    onClick={() => setSidebarOpen(true)}
  >
    Filters
  </button>
</div>
    <div className="flex bg-gray-200 min-h-screen p-4 relative">
      {/* Mobile Sidebar Button */}
   

      {/* Sidebar Filters */}
      <aside
        className={`fixed md:relative top-0 left-0 w-full md:w-1/4 bg-gray-300 p-4 rounded-lg transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } h-full md:h-auto md:static z-50`}
      >
        {/* Close Button (Mobile Only) */}
        <button
          className="md:hidden absolute top-4 right-4 text-lg"
          onClick={() => setSidebarOpen(false)}
        >
          ✖
        </button>

        <h2 className="text-lg font-semibold italic">Filter by</h2>

        {/* Category Filter */}
        <div className="mt-4">
          <h3 className="font-semibold">Category</h3>
          <ul className="mt-2 space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => updateFilters(cat, selectedFurnishing, selectedSize)}
                  className={`block w-full text-left ${
                    selectedCategory === cat ? "font-bold" : "text-gray-600"
                  } hover:text-black`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Furnishing Filter */}
        <div className="mt-6">
          <h3 className="font-semibold">Furnishing</h3>
          <ul className="mt-2 space-y-2">
            {furnishings.map((furnish) => (
              <li key={furnish}>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="furnishing"
                    checked={selectedFurnishing === furnish}
                    onChange={() => updateFilters(selectedCategory, furnish, selectedSize)}
                    className="mr-2"
                  />
                  {furnish}
                </label>
              </li>
            ))}
          </ul>
        </div>

        {/* Size Filter */}
        <div className="mt-6">
          <h3 className="font-semibold">Size (sqft.)</h3>
          <ul className="mt-2 space-y-2">
            {sizes.map((size) => (
              <li key={size}>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="size"
                    checked={selectedSize === size}
                    onChange={() => updateFilters(selectedCategory, selectedFurnishing, size)}
                    className="mr-2"
                  />
                  {size}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </aside>

      {/* Results Section */}
      <main className="w-full md:w-3/4 p-6 bg-white rounded-lg">
        {/* <h1 className="text-xl font-bold">Showing results for:</h1> */}
  
        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold">Property {index + 1}</h2>
              <p className="text-gray-600">Category: {selectedCategory}</p>
              <p className="text-gray-600">
                Furnishing: {selectedFurnishing || "Any"}
              </p>
              <p className="text-gray-600">Size: {selectedSize || "Any"} sqft.</p>
            </div>
          ))}
        </div>
      </main>
    </div>
    </>
  );
};

export default ShopPage;
