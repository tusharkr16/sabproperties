"use client"
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";
import logoimg from "../../assets/logoim.png"
import Image from "next/image";
import { BsFillBuildingsFill } from "react-icons/bs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo with Building Icon - Fixed alignment */}
        <div className="text-2xl font-bold flex items-center">
          <Link href='/' className="flex items-center gap-2">
            <BsFillBuildingsFill className="text-gold" size={24} />
            <span>
              <span className="text-gold">SAB</span>PROPERTIES
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-sm uppercase">
          <Link href='/about-us' className="hover:text-gold">
            About Us
          </Link>
          <Link href='https://www.22workspace.com/' className="hover:text-gold">
            Co-work
          </Link>
          <Link href='/properties/Cowork' className="hover:text-gold">
            Properties
          </Link>
          <Link href="/contact" className="hover:text-gold">
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <IoMdClose /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu with Animation */}
      <motion.nav
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className={`md:hidden bg-black text-white overflow-hidden`}
      >
        <div className="p-4 space-y-4 flex flex-col items-start">
          <Link href='/about-us' className="block py-2 border-b border-gray-600 w-full">About Us</Link>
          <Link href='https://www.22workspace.com/' className="block py-2 border-b border-gray-600 w-full">Co-work</Link>
          <Link href='/properties/Cowork' className="block py-2 border-b border-gray-600 w-full">Properties</Link>
          <Link href="/contact" className="block py-2 w-full">Contact Us</Link>
        </div>
      </motion.nav>
    </header>
  );
}