"use client"
import { useState } from "react";
import { FaFacebookF, FaLinkedinIn, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center">
          <Link href='/'>
          
          <span className="text-gold">SAB</span>PROPERTIES
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
          <Link href='/properties' className="hover:text-gold">
          Properties
          </Link>
          <Link href="/contact" className="hover:text-gold">
            Contact Us
          </Link>

        </nav>

        {/* Social & Contact */}
        {/* <div className="hidden md:flex items-center space-x-4">
          <span>📞 +91-9810020766</span>
          <FaFacebookF className="cursor-pointer hover:text-gold" />
          <FaLinkedinIn className="cursor-pointer hover:text-gold" />
          <FaXTwitter className="cursor-pointer hover:text-gold" />
          <FaInstagram className="cursor-pointer hover:text-gold" />
        </div> */}

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
          <a href="#" className="block py-2 border-b border-gray-600">About Us</a>
          <a href="#" className="block py-2 border-b border-gray-600">Properties</a>
          <a href="#" className="block py-2 border-b border-gray-600">Research Center</a>
          <a href="#" className="block py-2 border-b border-gray-600">Strategic Consulting</a>
          <a href="#" className="block py-2 border-b border-gray-600">Career</a>
          <a href="#" className="block py-2">Contact Us</a>
        </div>
      </motion.nav>
    </header>
  );
}
