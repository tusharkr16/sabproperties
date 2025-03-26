import React, { useState } from 'react';
import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const PropertyFilter = ({ properties, onFilterChange }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedFurnishing, setSelectedFurnishing] = useState(null);
    const [sizeRange, setSizeRange] = useState([0, Infinity]);

    const categories = ['All', ...new Set(properties.map(p => p.category))];
    const furnishingOptions = ['All', ...new Set(properties.map(p => p.furnishingStatus))];

    const applyFilters = () => {
        let filtered = properties;

        if (selectedCategory && selectedCategory !== 'All') {
            filtered = filtered.filter(p => p.category === selectedCategory);
        }

        if (selectedFurnishing && selectedFurnishing !== 'All') {
            filtered = filtered.filter(p => p.furnishingStatus === selectedFurnishing);
        }

        filtered = filtered.filter(p =>
            p.size >= sizeRange[0] && p.size <= sizeRange[1]
        );

        onFilterChange(filtered);
    };

    const clearFilters = () => {
        setSelectedCategory(null);
        setSelectedFurnishing(null);
        setSizeRange([0, Infinity]);
        onFilterChange(properties);
    };

    return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Category Filter */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <Listbox
                        value={selectedCategory || 'All'}
                        onChange={setSelectedCategory}
                    >
                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                {selectedCategory || 'All'}
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {categories.map((category) => (
                                    <Listbox.Option
                                        key={category}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                            }`
                                        }
                                        value={category}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {category}
                                                </span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </div>
                    </Listbox>
                </div>

                {/* Furnishing Filter */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Furnishing</label>
                    <Listbox
                        value={selectedFurnishing || 'All'}
                        onChange={setSelectedFurnishing}
                    >
                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                                {selectedFurnishing || 'All'}
                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                    <ChevronUpDownIcon
                                        className="h-5 w-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {furnishingOptions.map((option) => (
                                    <Listbox.Option
                                        key={option}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                            }`
                                        }
                                        value={option}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {option}
                                                </span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </div>
                    </Listbox>
                </div>

                {/* Size Range Filter */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Size Range (sqft)</label>
                    <div className="flex space-x-2">
                        <input
                            type="number"
                            placeholder="Min"
                            className="w-full rounded-lg border p-2"
                            value={sizeRange[0] === 0 ? '' : sizeRange[0]}
                            onChange={(e) => setSizeRange([Number(e.target.value), sizeRange[1]])}
                        />
                        <input
                            type="number"
                            placeholder="Max"
                            className="w-full rounded-lg border p-2"
                            value={sizeRange[1] === Infinity ? '' : sizeRange[1]}
                            onChange={(e) => setSizeRange([sizeRange[0], Number(e.target.value)])}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-4 flex justify-end space-x-4">
                <button
                    onClick={clearFilters}
                    className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
                >
                    Clear Filters
                </button>
                <button
                    onClick={applyFilters}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                    Apply Filters
                </button>
            </div>
        </div>
    );
};

export default PropertyFilter;