import { Phone, Mail, MapPin, Facebook, Linkedin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#532B9D] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link
              href="/"
              className="flex items-center justify-center md:justify-start gap-2"
            >
              <Image
                src="/images/logo.png"
                alt="CLS Caregivers Logo"
                width={40}
                height={40}
                className="h-auto w-auto"
              />
            </Link>
            <p className="text-white/80 leading-relaxed">
              Trusted in-home caregiving services for over 20 years. We're
              dedicated to enhancing the quality of life for seniors and
              individuals requiring professional care.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-white/60 hover:text-[#7bb52d] transition"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-[#7bb52d] transition"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <a href="#home" className="hover:text-[#7bb52d] transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-[#7bb52d] transition"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#7bb52d] transition">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#7bb52d] transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Our Services</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <a href="#" className="hover:text-[#7bb52d] transition">
                  Personal Care Assistance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7bb52d] transition">
                  Companion Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7bb52d] transition">
                  Dementia Care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#7bb52d] transition">
                  24-Hour Care
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Contact Us</h4>

            <div className="space-y-4 text-white/80">
              <div className="flex gap-3">
                <Phone
                  size={20}
                  className="text-[#7bb52d] flex-shrink-0 mt-1"
                />
                <div>
                  <p className="font-semibold text-white">(760) 333-2215</p>
                  <p className="text-sm">24/7 Available</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail size={20} className="text-[#7bb52d] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">
                    info@clscaregivers.com
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <MapPin
                  size={20}
                  className="text-[#7bb52d] flex-shrink-0 mt-1"
                />
                <div>
                  <p className="text-sm">73 Via Las Flores</p>
                  <p className="text-sm">Rancho Mirage, CA 92270</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-12"></div>

        {/* Service Areas */}
        <div className="space-y-4 mb-8">
          <h4 className="text-lg font-bold">Areas We Serve</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-white/80 text-sm">
            <p>Palm Springs</p>
            <p>Palm Desert</p>
            <p>Rancho Mirage</p>
            <p>Indian Wells</p>
            <p>La Quinta</p>
            <p>Cathedral City</p>
            <p>Indio</p>
            <p>Desert Hot Springs</p>
            <p>Bermuda Dunes</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-[#3d1f70] px-4 py-8 border-t border-white/10">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              Copyright © {currentYear} CLS Caregivers. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-white/70">
              <a href="#" className="hover:text-[#7bb52d] transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#7bb52d] transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
