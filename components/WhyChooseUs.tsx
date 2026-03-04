import { CheckCircle2, Users, Heart, DollarSign, Clock, MessageCircle } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Users,
      title: 'Experienced & Skilled Caregivers',
      description: 'All our caregivers are thoroughly screened, background-checked, and trained in best caregiving practices.',
    },
    {
      icon: Heart,
      title: 'Holistic Approach',
      description: 'We don\'t just meet physical needs but also focus on emotional, mental, and social well-being.',
    },
    {
      icon: DollarSign,
      title: 'High Quality, Affordable Care',
      description: 'We offer competitive rates without compromising on excellence.',
    },
    {
      icon: Clock,
      title: 'Flexible Scheduling',
      description: 'Services available 24/7, including weekends and holidays, to fit your family\'s needs.',
    },
    {
      icon: MessageCircle,
      title: 'Family Involvement',
      description: 'We work closely with families to ensure open communication and the best care solutions.',
    },
    {
      icon: CheckCircle2,
      title: 'Integrity & Professionalism',
      description: 'Our agency is built on compassion, integrity, and professionalism—values that shape everything we do.',
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#532B9D] mb-4">
            The CLS Caregivers Difference
          </h2>
          <p className="text-xl text-gray-700 mb-4">Why Families Trust Us</p>
          <div className="w-20 h-1 bg-[#7bb52d] mx-auto"></div>
        </div>

        <div className="mb-16">
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            Caregiving is about assisting with daily tasks and creating meaningful connections that enhance seniors' lives. Our agency is built on compassion, integrity, and professionalism—values that shape everything we do.
          </p>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border-t-4 border-[#7bb52d]"
                >
                  <div className="flex items-start gap-4">
                    <Icon className="w-8 h-8 text-[#7bb52d] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Trust Section */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2 gap-0">
            {/* Left Column */}
            <div className="bg-[#532B9D] text-white p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">Reliable, Honest Caregivers</h3>
              <p className="text-lg leading-relaxed text-gray-100">
                We believe care isn't just about tasks; it's about building relationships and supporting both the emotional and physical well-being of your loved ones.
              </p>
            </div>

            {/* Right Column */}
            <div className="p-12 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-[#532B9D] mb-6">Why Our Caregivers Stand Out</h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#7bb52d] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Carefully screened and chosen for professionalism</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#7bb52d] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Genuine empathy and compassionate approach</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#7bb52d] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Trusted extensions of your family</p>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-[#7bb52d] flex-shrink-0 mt-1" />
                  <p className="text-gray-700">Delivering warmth, respect, and skilled care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
