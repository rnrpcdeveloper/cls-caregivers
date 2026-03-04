"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#532B9D] text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="CLS Caregivers Logo"
            width={40}
            height={40}
            className="h-15 w-auto"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#home" className="hover:text-gray-200 transition">
            Home
          </a>
          <a href="#about" className="hover:text-gray-200 transition">
            About
          </a>
          <a href="#services" className="hover:text-gray-200 transition">
            Services
          </a>
          <a href="#areas" className="hover:text-gray-200 transition">
            Service Areas
          </a>
          <a href="#why-choose" className="hover:text-gray-200 transition">
            Why Choose Us
          </a>
          <a href="#testimonials" className="hover:text-gray-200 transition">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-gray-200 transition">
            Contact
          </a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="tel:(760)333-2215"
            className="flex items-center gap-2 bg-[#7bb52d] hover:bg-[#6a9d25] text-white px-6 py-2.5 rounded-lg font-semibold transition"
          >
            <Phone size={18} />
            (760) 333-2215
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-gray-200 transition"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#3d1f70] px-4 py-4 space-y-4 border-t border-white/10">
          <a
            href="#home"
            className="block hover:text-gray-200 transition text-sm"
          >
            Home
          </a>
          <a
            href="#about"
            className="block hover:text-gray-200 transition text-sm"
          >
            About
          </a>
          <a
            href="#services"
            className="block hover:text-gray-200 transition text-sm"
          >
            Services
          </a>
          <a
            href="#areas"
            className="block hover:text-gray-200 transition text-sm"
          >
            Service Areas
          </a>
          <a
            href="#why-choose"
            className="block hover:text-gray-200 transition text-sm"
          >
            Why Choose Us
          </a>
          <a
            href="#testimonials"
            className="block hover:text-gray-200 transition text-sm"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            className="block hover:text-gray-200 transition text-sm"
          >
            Contact
          </a>
          <a
            href="tel:(760)333-2215"
            className="block bg-[#7bb52d] hover:bg-[#6a9d25] text-white px-4 py-2 rounded-lg font-semibold transition text-center"
          >
            Call: (760) 333-2215
          </a>
        </div>
      )}
    </header>
  );
}
