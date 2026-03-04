import { Heart, Shield, Smile } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#532B9D] mb-4">
            Discover the Difference in Home Care with CLS Caregivers
          </h2>
          <div className="w-20 h-1 bg-[#7bb52d] mx-auto"></div>
        </div>

        {/* Two Column Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              For over 20 years, CLS Caregivers has been a trusted name in
              senior home care. Our 24-hour caregivers proudly serve Palm
              Springs, Palm Desert, and the entire Coachella Valley. Our legacy
              is built on experience and the heartfelt testimonials of those we
              care for.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our clients' trust and satisfaction inspire us daily to deliver
              compassionate, unparalleled care tailored to the needs of your
              loved one.
            </p>
          </div>

          {/* Right Column with Features */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <Heart className="w-8 h-8 text-[#7bb52d] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Compassionate Care
                </h3>
                <p className="text-gray-700">
                  Delivering personalized in-home care services designed to meet
                  each client's unique needs.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-[#7bb52d] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Professional & Reliable
                </h3>
                <p className="text-gray-700">
                  High-quality care at affordable prices ensuring families
                  receive support without financial strain.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <Smile className="w-8 h-8 text-[#7bb52d] flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-gray-900 mb-2">
                  Quality of Life
                </h3>
                <p className="text-gray-700">
                  We understand staying at home is vital for maintaining
                  independence, dignity, and well-being.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Text */}
        <div className="bg-gradient-to-r from-[#532B9D] to-purple-700 rounded-lg p-12 text-white text-center">
          <p className="text-xl font-semibold mb-2">
            Experience the exceptional caregiver services that countless
            families have come to rely on
          </p>
          <p className="text-lg">Experience CLS Caregivers</p>
        </div>
      </div>
    </section>
  );
}
