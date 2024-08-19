"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-blue-900 text-white bg-opacity-50 backdrop-blur-md w-full fixed top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="text-yellow text-2xl font-bold">
              Mercatinuum
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Navigation Links */}
              <Link href="/" className="text-mid-blue hover:text-yellow px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-mid-blue hover:text-yellow px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
              <Link href="/jobs" className="text-mid-blue hover:text-yellow px-3 py-2 rounded-md text-sm font-medium">
                Jobs
              </Link>
              <Link href="/contact" className="text-mid-blue hover:text-yellow px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-mid-blue inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-dark-blue focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-mid-blue hover:text-yellow block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/about" className="text-mid-blue hover:text-yellow block px-3 py-2 rounded-md text-base font-medium">
              About
            </Link>
            <Link href="/jobs" className="text-mid-blue hover:text-yellow block px-3 py-2 rounded-md text-base font-medium">
              Jobs
            </Link>
            <Link href="/contact" className="text-mid-blue hover:text-yellow block px-3 py-2 rounded-md text-base font-medium">
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
