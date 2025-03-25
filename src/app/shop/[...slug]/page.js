"use client";
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

  // Function to update route dynamically
  const updateFilters = (category, furnishing, size) => {
    const urlParts = [category, furnishing, size].filter(Boolean); // Remove empty values
    router.push(`/shop/${urlParts.join("/")}`);
  };

  return (
    <div className="flex bg-gray-200 min-h-screen p-4">
      {/* Sidebar Filters */}
      <aside className="w-1/4 bg-gray-300 p-4 rounded-lg">
        <h2 className="text-lg font-semibold italic">Filter by</h2>

        {/* Category Filter */}
        <div className="mt-4">
          <h3 className="font-semibold">Category</h3>
          <ul className="mt-2 space-y-2">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() => updateFilters(cat, selectedFurnishing, selectedSize)}
                  className={`block ${
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
      <main className="w-3/4 p-6 bg-white rounded-lg">
        <h1 className="text-xl font-bold">Showing results for:</h1>
        <p>
          <strong>Category:</strong> {selectedCategory} <br />
          <strong>Furnishing:</strong> {selectedFurnishing || "Any"} <br />
          <strong>Size:</strong> {selectedSize || "Any"} sqft.
        </p>
      </main>
    </div>
  );
};

export default ShopPage;
