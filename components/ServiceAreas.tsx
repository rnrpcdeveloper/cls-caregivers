import { MapPin, Clock } from "lucide-react";

export default function ServiceAreas() {
  const areas = [
    "Palm Springs",
    "Palm Desert",
    "Rancho Mirage",
    "Indian Wells",
    "La Quinta",
    "Cathedral City",
    "Indio",
    "Desert Hot Springs",
    "Bermuda Dunes",
  ];

  return (
    <section id="areas" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#532B9D] mb-4">
            Trusted Home Care Throughout Coachella Valley
          </h2>
          <p className="text-xl text-gray-700">
            Personalized, Compassionate Home Care—Designed for Your Family's
            Needs
          </p>
          <div className="w-20 h-1 bg-[#7bb52d] mx-auto mt-4"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Service Areas */}
          <div>
            <h3 className="text-2xl font-bold text-[#532B9D] mb-8 flex items-center gap-3">
              <MapPin className="w-8 h-8 text-[#7bb52d]" />
              Service Areas
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-lg p-4 border-l-4 border-[#7bb52d] hover:bg-gray-100 transition-colors"
                >
                  <p className="font-semibold text-gray-900">{area}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Service Details */}
          <div>
            <h3 className="text-2xl font-bold text-[#532B9D] mb-8 flex items-center gap-3">
              <Clock className="w-8 h-8 text-[#7bb52d]" />
              Available Services
            </h3>
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-[#532B9D]/10 to-[#7bb52d]/10 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">
                  Full 24-Hour Care
                </h4>
                <p className="text-gray-700">
                  Round-the-clock caregiver assistance for continuous support
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#532B9D]/10 to-[#7bb52d]/10 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">
                  Part-Time Support
                </h4>
                <p className="text-gray-700">
                  Flexible schedules to fit your family's specific needs
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#532B9D]/10 to-[#7bb52d]/10 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">Respite Care</h4>
                <p className="text-gray-700">
                  Temporary relief so families can recharge and spend quality
                  time together
                </p>
              </div>
              <div className="bg-gradient-to-r from-[#532B9D]/10 to-[#7bb52d]/10 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-2">
                  24/7 Availability
                </h4>
                <p className="text-gray-700">
                  Services available weekends, holidays, and special occasions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div className="bg-[#532B9D] text-white rounded-lg p-12">
          <h3 className="text-2xl font-bold mb-6">What We Specialize In</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-[#7bb52d]">
                Senior Care
              </h4>
              <p className="text-gray-100">
                Comprehensive care tailored for the specific needs of aging
                seniors
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-[#7bb52d]">
                Post-Hospital Recovery
              </h4>
              <p className="text-gray-100">
                Professional care during recovery period following
                hospitalization
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-[#7bb52d]">
                Companionship Services
              </h4>
              <p className="text-gray-100">
                Emotional support and engaging activities for overall well-being
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
