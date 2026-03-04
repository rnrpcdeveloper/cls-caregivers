import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-background.mp4" type="video/mp4" />
        <source src="/videos/hero-background.webm" type="video/webm" />
      </video>

      {/* Dark Overlay (50% opacity) */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white max-w-5xl h-screen flex flex-col justify-center py-20 sm:py-24">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight text-balance">
          Why Families Trust CLS Caregivers as the{" "}
          <span className="text-[#7bb52d]">#1 In Home Caregiving Agency</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl mb-12 sm:mb-16 text-gray-100 leading-relaxed max-w-3xl mx-auto">
          For over 20 years, we've been the trusted name in senior home care
          throughout the Coachella Valley
        </p>

        {/* Key Features - Hidden on Mobile, Visible on Tablet+ */}
        <div className="hidden md:grid grid-cols-3 gap-6 mb-12">
          <div className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6 hover:bg-white/15 transition">
            <CheckCircle className="text-[#7bb52d]" size={28} />
            <p className="font-semibold text-base sm:text-lg">
              Experienced Caregivers
            </p>
            <p className="text-xs sm:text-sm text-gray-200">
              Thoroughly background-checked and trained
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6 hover:bg-white/15 transition">
            <CheckCircle className="text-[#7bb52d]" size={28} />
            <p className="font-semibold text-base sm:text-lg">
              24/7 Availability
            </p>
            <p className="text-xs sm:text-sm text-gray-200">
              Anytime care—weekends, holidays & emergencies
            </p>
          </div>

          <div className="flex flex-col items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-5 md:p-6 hover:bg-white/15 transition">
            <CheckCircle className="text-[#7bb52d]" size={28} />
            <p className="font-semibold text-base sm:text-lg">
              Affordable Quality
            </p>
            <p className="text-xs sm:text-sm text-gray-200">
              Premium care at competitive rates
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col gap-3 items-center">
          <a
            href="tel:(760)333-2215"
            className="inline-flex items-center gap-2 sm:gap-3 bg-[#7bb52d] hover:bg-[#6a9d25] text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-bold text-sm sm:text-base md:text-lg transition transform hover:scale-105 shadow-lg whitespace-nowrap"
          >
            Get Your FREE Consultation
            <ArrowRight size={20} className="hidden sm:block" />
          </a>

          <p className="text-gray-200 text-xs sm:text-sm">
            Call (760) 333-2215 or fill out a form below
          </p>
        </div>
      </div>
    </section>
  );
}
