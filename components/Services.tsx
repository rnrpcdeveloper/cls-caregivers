import {
  Users,
  Heart,
  Home,
  Pill,
  Utensils,
  Navigation,
  Brain,
  Wind,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Users,
      title: "Personal Care Assistance",
      description: "Help with bathing, dressing, grooming, and hygiene",
    },
    {
      icon: Pill,
      title: "Medication Reminders",
      description: "Ensuring timely and proper medication intake",
    },
    {
      icon: Heart,
      title: "Companion Care",
      description: "Engaging activities, conversation, and emotional support",
    },
    {
      icon: Utensils,
      title: "Meal Preparation",
      description: "Healthy, home-cooked meals to promote well-being",
    },
    {
      icon: Home,
      title: "Light Housekeeping",
      description:
        "Assistance with laundry, dishes, and maintaining a clean home",
    },
    {
      icon: Navigation,
      title: "Mobility Support",
      description: "Helping seniors move safely and preventing falls",
    },
    {
      icon: Wind,
      title: "Transportation Services",
      description:
        "Rides to doctor's appointments, grocery stores, and social outings",
    },
    {
      icon: Brain,
      title: "Alzheimer's & Dementia Care",
      description: "Specialized support for memory care patients",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#532B9D] mb-4">
            Our Caregiver Services
          </h2>
          <p className="text-xl text-gray-700 mb-4">
            Comprehensive care tailored to meet your loved one's unique needs
          </p>
          <div className="w-20 h-1 bg-[#7bb52d] mx-auto"></div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <Icon className="w-12 h-12 text-[#7bb52d] mb-4" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Additional Service Info */}
        <div className="mt-16 bg-white rounded-lg p-12 border-l-4 border-[#7bb52d]">
          <h3 className="text-2xl font-bold text-[#532B9D] mb-6">
            Personalized Care Plans
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At CLS Caregivers, we take a personalized approach to caregiving.
            Everyone has unique challenges and preferences, so we create
            customized care plans to meet specific needs. Our caregivers are
            carefully selected and matched based on skills, personality, and
            compatibility with the client.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether your loved one requires full 24-hour caregiver assistance,
            part-time support, or temporary respite care, our dedicated
            caregivers will be here for you.
          </p>
        </div>
      </div>
    </section>
  );
}
