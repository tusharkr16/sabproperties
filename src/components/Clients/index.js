"use client";

import { Star } from "lucide-react";
import Marquee from "react-fast-marquee";
import img1 from "../../assets/amul.jpg";
import img2 from "../../assets/ase.png";
import img3 from "../../assets/berger.png";
import img4 from "../../assets/boi.png";
import img5 from "../../assets/dabur.jpg";
import Image from "next/image";

export function ClientMarquee() {
    const clients = [
        {
            name: "TechNova Solutions",
            logo: img1,
            testimonial: "Exceptional service that transformed our operations."
        },
        {
            name: "UrbanSpace Developers",
            logo: img2,
            testimonial: "Reliable partner for all our property needs."
        },
        {
            name: "GreenEarth Organics",
            logo: img3,
            testimonial: "Found us the perfect commercial space in record time."
        },
        {
            name: "FinEdge Capital",
            logo: img4,
            testimonial: "Strategic locations that boosted our business."
        },
        {
            name: "MediCare Hospitals",
            logo: img5,
            testimonial: "Exceeded our expectations in every way."
        },
        {
            name: "EduFuture Academies",
            logo: img1,
            testimonial: "Trusted advisors for our expansion plans."
        },
    ];

    return (
        <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        Trusted by Industry Leaders
                    </h2>
                    <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </div>

                {/* Desktop Marquee */}
                <div className="">
                    <Marquee
                        speed={50}
                        gradient={true}
                        gradientColor={[248, 250, 252]}
                        gradientWidth={100}
                        pauseOnHover={true}
                        className="py-6"
                    >
                        {clients.map((client, index) => (
                            <div key={index} className="mx-8 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center w-64">
                                <div className="mb-4 h-16 flex items-center">
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        width={100}
                                        height={60}
                                        className="object-contain h-full"
                                    />
                                </div>
                                <div className="flex mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                {/* <p className="text-gray-600 text-sm text-center italic">&quot;{client.testimonial}&quot;</p> */}
                            </div>
                        ))}
                    </Marquee>
                    {/* <Marquee
                        speed={50}
                        gradient={true}
                        gradientColor={[248, 250, 252]}
                        gradientWidth={100}
                        pauseOnHover={true}
                        className="py-6"
                        direction="right"
                    >
                        {clients.map((client, index) => (
                            <div key={`second-${index}`} className="mx-8 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center w-64">
                                <div className="mb-4 h-16 flex items-center">
                                    <Image
                                        src={client.logo}
                                        alt={client.name}
                                        width={100}
                                        height={60}
                                        className="object-contain h-full"
                                    />
                                </div>
                                <div className="flex mb-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-600 text-sm text-center italic">&quot;{client.testimonial}&quot;</p>
                            </div>
                        ))}
                    </Marquee> */}
                </div>
            </div>
        </section>
    );
}