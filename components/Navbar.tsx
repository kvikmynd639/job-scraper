"use client";
import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi'; // Importing icons from React Icons

interface NavbarProps {
  authButtons?: React.ReactNode; // Accepting buttons as a prop
}

const Navbar: React.FC<NavbarProps> = ({ authButtons }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white text-black w-full relative top-0 z-50 border-b-[1px] border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="text-blue-600 text-2xl tracking-wider font-semibold font-moonhouse">
              Mercatinuum
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {/* Navigation Links */}
              <Link href="/" className="relative group text-gray-800 hover:text-blue-600">
                Home
                <span className="block h-[2px] bg-blue-600 absolute left-0 bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></span>
              </Link>
              <Link href="/about" className="relative group text-gray-800 hover:text-blue-600">
                About
                <span className="block h-[2px] bg-blue-600 absolute left-0 bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></span>
              </Link>
              <Link href="/jobs" className="relative group text-gray-800 hover:text-blue-600">
                Jobs
                <span className="block h-[2px] bg-blue-600 absolute left-0 bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></span>
              </Link>
              <Link href="/cv" className="relative group text-gray-800 hover:text-blue-600">
                Build your CV
                <span className="block h-[2px] bg-blue-600 absolute left-0 bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></span>
              </Link>
              <Link href="/contact" className="relative group text-gray-800 hover:text-blue-600">
                Contact
                <span className="block h-[2px] bg-blue-600 absolute left-0 bottom-0 w-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out"></span>
              </Link>
              {/* Auth Buttons */}
              {authButtons && <div>{authButtons}</div>}
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 p-2 rounded-md hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-4 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="space-y-6">
          <Link href="/" className="block text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="block text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <Link href="/jobs" className="block text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Jobs
          </Link>
          <Link href="/cv" className="block text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Build your CV
          </Link>
          <Link href="/contact" className="block text-gray-800 hover:text-blue-600" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
          {authButtons && <div>{authButtons}</div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
