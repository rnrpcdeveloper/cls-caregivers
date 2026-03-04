import { ArrowRight, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-white via-gray-50 to-white pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#532B9D] rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#7bb52d] rounded-full opacity-5 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Why Families Trust CLS Caregivers as the <span className="text-[#532B9D]">#1 In Home Caregiving Agency</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                For over 20 years, we've been the trusted name in senior home care throughout the Coachella Valley. Our legacy is built on compassion, reliability, and unparalleled service.
              </p>
            </div>

            {/* Key Features */}
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <CheckCircle className="text-[#7bb52d] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Experienced & Screened Caregivers</p>
                  <p className="text-gray-600">All caregivers thoroughly background-checked and trained</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="text-[#7bb52d] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">24/7 Flexible Scheduling</p>
                  <p className="text-gray-600">Available anytime—weekends, holidays, and emergencies</p>
                </div>
              </div>
              <div className="flex gap-3 items-start">
                <CheckCircle className="text-[#7bb52d] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-gray-900">Affordable Premium Care</p>
                  <p className="text-gray-600">High-quality care at competitive rates</p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="tel:(760)333-2215"
                className="inline-flex items-center gap-2 bg-[#7bb52d] hover:bg-[#6a9d25] text-white px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105"
              >
                Get Your FREE Consultation
                <ArrowRight size={20} />
              </a>
              <p className="text-gray-600 text-sm mt-3">Call (760) 333-2215 or fill out a form</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-96 lg:h-[500px] bg-gradient-to-br from-[#532B9D] to-[#3d1f70] rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-6xl font-bold text-white/20">20+</div>
                <p className="text-white text-2xl font-semibold">Years of Excellence</p>
                <p className="text-white/80 text-lg">Trusted by families across Coachella Valley</p>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#7bb52d] rounded-full opacity-10 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
