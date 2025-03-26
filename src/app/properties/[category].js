'use client'
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { PROPERTIES } from '../../constent/string/index';
import PropertyFilter from '../../components/filter/index';
export default function PropertyListingPage({ initialCategory, properties }) {
    const router = useRouter();
    const { category } = router.query;

    const [filteredProperties, setFilteredProperties] = useState(properties);

    return (
        <div className="container mx-auto px-4 py-8 bg-gray-50 min-h-screen">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">
                {category ? `${category.charAt(0).toUpperCase() + category.slice(1)} Listings` : 'All Properties'}
            </h1>

            <PropertyFilter
                properties={properties}
                onFilterChange={setFilteredProperties}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {filteredProperties.map((property) => (
                    <div
                        key={property.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                    >
                        <div className="relative h-48 w-full">
                            <Image
                                src={property.imageUrl}
                                alt={property.name}
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="p-4">
                            <h2 className="text-xl font-semibold mb-2">{property.name}</h2>
                            <div className="flex justify-between text-gray-600">
                                <span>{property.category}</span>
                                <span>{property.furnishingStatus}</span>
                                <span>{property.size} sqft</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export async function getStaticPaths() {
    const categories = ['all', ...new Set(PROPERTIES.map(p => p.category.toLowerCase()))];

    const paths = categories.map(category => ({
        params: { category }
    }));

    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const { category } = params;

    const filteredProperties =
        category === 'all'
            ? PROPERTIES
            : PROPERTIES.filter(p => p.category.toLowerCase() === category);

    return {
        props: {
            initialCategory: category,
            properties: filteredProperties
        }
    };
}