"use client";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { propertyImages } from "../../../utils/util"
import Image from "next/image";

const categories = ["All", "Office", "Co-work", "Showroom", "Godown"];
const furnishings = ["Furnished", "Semi-Furnished", "Unfurnished"];
const sizes = ["0-200", "200-500", "500-1000", "1000+"];

const ShopPage = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params.slug || [];

  const selectedCategory = decodeURIComponent(slug[0] || "All");
  const selectedFurnishing = decodeURIComponent(slug[1] || "");
  const selectedSize = decodeURIComponent(slug[2] || "");

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const updateFilters = (category, furnishing, size) => {
    const urlParts = [category, furnishing, size].filter(Boolean);
    router.push(`/properties/${urlParts.join("/")}`);
    setSidebarOpen(false);
  };

  // Filter properties based on selected values
  const filteredProperties = propertyImages.filter((property) => {
    const categoryMatch =
      selectedCategory === "All" || property.category.toLowerCase() === selectedCategory.toLowerCase();
    const furnishingMatch =
      !selectedFurnishing || property.furnishing.toLowerCase() === selectedFurnishing.toLowerCase();
    return categoryMatch && furnishingMatch;
  });

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden mt-4 flex justify-center items-center">
        <button className="bg-gray-700 text-white p-2 rounded" onClick={() => setSidebarOpen(true)}>
          Filters
        </button>
      </div>

      <div className="flex bg-gray-200 min-h-screen p-4 relative">
        {/* Sidebar Filters */}
        <aside
          className={`fixed md:relative top-0 left-0 w-full md:w-1/4 bg-gray-300 p-4 rounded-lg transition-transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
            } h-full md:h-auto md:static z-50`}
        >
          <button className="md:hidden absolute top-4 right-4 text-lg" onClick={() => setSidebarOpen(false)}>
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
                    className={`block w-full text-left ${selectedCategory === cat ? "font-bold" : "text-gray-600"
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
          

          {/* Property Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {filteredProperties.length > 0 ? (
              filteredProperties.map((property, index) => (
                <div key={index} className="rounded-lg h-74 shadow-md hover:shadow-lg transition overflow-hidden">
                  <Image
                    src={property.imgSrc}
                    alt={property.category}
                    className="w-full h-full object-cover rounded-lg"
                    width={300}
                    height={200}
                  />
                </div>

              ))
            ) : (
              <p>No matching properties found.</p>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default ShopPage;
