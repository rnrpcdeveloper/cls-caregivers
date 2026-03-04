"use client";

import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Richard James",
    role: "Family Member",
    text: "Michael was amazing, returning my call promptly and delivering assistance when we needed it most. His kindness and compassion will never be forgotten.",
    rating: 5,
  },
  {
    name: "Wendy Crommelin",
    role: "Family Member",
    text: "Michael and Jill were very professional and provided us with an amazing caregiver. We were so pleased with the care that our mom received.",
    rating: 5,
  },
  {
    name: "Kathleen Nelson",
    role: "Nurse & Family Member",
    text: "Michael & Jill are incredibly responsive to any inquiries. They are very hands-on and truly want their clients to thrive.",
    rating: 5,
  },
  {
    name: "Howard Tabackman",
    role: "Family Member",
    text: "Unlike other caregiving services, CLS truly lives up to their name. We were thoughtfully matched with caregivers who are consistent and a great fit.",
    rating: 5,
  },
  {
    name: "Karen Kelley",
    role: "Family Member",
    text: "CLSC provides supportive caregivers who give my mother excellent in-home care. They are a true godsend and a significant relief daily.",
    rating: 5,
  },
  {
    name: "David Batteri",
    role: "Neighbor",
    text: "CLS has been a great help when my neighbor needed it most. Michael and Jill really do care about helping seniors in our community.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlay(false);
    setCurrentIndex(index);
  };

  // Show 1 testimonial on mobile, 2 on tablet, 3 on desktop
  const getVisibleSlides = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) return 1;
      if (window.innerWidth < 1024) return 2;
      return 3;
    }
    return 3;
  };

  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    setVisibleSlides(getVisibleSlides());
    const handleResize = () => setVisibleSlides(getVisibleSlides());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + visibleSlides,
  );

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-[#532B9D] mb-4">
            Why Families Love CLS Caregivers
          </h2>
          <p className="text-xl text-gray-600">
            Hear directly from families who've experienced our compassionate
            care and professional service.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className="fill-[#7bb52d] text-[#7bb52d]"
                />
              ))}
            </div>
            <p className="font-semibold text-gray-900">
              Based on 19+ verified reviews
            </p>
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Carousel Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-8">
            {displayedTestimonials.map((testimonial, idx) => (
              <div
                key={currentIndex + idx}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-6 md:p-8 border-l-4 border-[#7bb52d]"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[#7bb52d] text-[#7bb52d]"
                    />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="border-t border-gray-200 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#532B9D] hover:bg-[#3d1f70] text-white transition transform hover:scale-110"
              aria-label="Previous testimonials"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Dot Indicators */}
            <div className="flex gap-2">
              {[...Array(Math.ceil(testimonials.length / visibleSlides))].map(
                (_, i) => (
                  <button
                    key={i}
                    onClick={() => goToSlide(i * visibleSlides)}
                    className={`w-3 h-3 rounded-full transition ${
                      i === Math.floor(currentIndex / visibleSlides)
                        ? "bg-[#532B9D] w-8"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ),
              )}
            </div>

            <button
              onClick={handleNext}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#532B9D] hover:bg-[#3d1f70] text-white transition transform hover:scale-110"
              aria-label="Next testimonials"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Counter */}
          <div className="text-center text-gray-600 text-sm mb-8">
            {currentIndex + 1} -{" "}
            {Math.min(currentIndex + visibleSlides, testimonials.length)} of{" "}
            {testimonials.length}
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 md:p-12 text-center border-2 border-[#7bb52d]/20">
          <p className="text-gray-600 mb-2">Google Reviews Rating</p>
          <div className="flex items-center justify-center gap-3 mb-4 flex-wrap">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={28}
                  className="fill-[#7bb52d] text-[#7bb52d]"
                />
              ))}
            </div>
            <p className="text-3xl font-bold text-gray-900">4.9</p>
            <p className="text-gray-600">(19+ reviews)</p>
          </div>
          <p className="text-gray-700 font-semibold">
            Rated Excellent by Families Across Coachella Valley
          </p>
        </div>
      </div>
    </section>
  );
}
