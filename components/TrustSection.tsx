import { Phone, MapPin, Sparkles } from 'lucide-react'

export default function TrustSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#532B9D] mb-6">
            Your Loved One Deserves the Best Care
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Let Us Help!
          </p>
          <div className="w-20 h-1 bg-[#7bb52d] mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-bold text-[#532B9D] mb-6">Making the Right Choice</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Choosing the right caregiver is one of the most critical decisions for your loved one. At CLS Caregivers, we support, guide, and provide the compassionate care your family deserves.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our caregivers become trusted extensions of your family, delivering not only skilled care but also the warmth and respect you and your loved ones deserve. By handling the day-to-day care with compassion, we allow families to focus on what truly matters—spending quality time together and creating cherished memories.
            </p>
          </div>

          {/* Right Column - Stats/Features */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-[#7bb52d]">
              <Sparkles className="w-8 h-8 text-[#7bb52d] mb-3" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">20+ Years of Excellence</h4>
              <p className="text-gray-700">Proven track record of trusted, compassionate care</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-[#7bb52d]">
              <Phone className="w-8 h-8 text-[#7bb52d] mb-3" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Available 24/7</h4>
              <p className="text-gray-700">Always here when your family needs us most</p>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-md border-l-4 border-[#7bb52d]">
              <MapPin className="w-8 h-8 text-[#7bb52d] mb-3" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Entire Coachella Valley</h4>
              <p className="text-gray-700">Serving all major cities and surrounding areas</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#532B9D] to-purple-700 rounded-lg p-12 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-3xl font-bold mb-8">Ready to Get Started?</h3>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
                <Phone className="w-10 h-10 mx-auto mb-4 text-[#7bb52d]" />
                <p className="text-lg font-semibold mb-2">Call For Free Consultation</p>
                <p className="text-2xl font-bold text-[#7bb52d]">(760) 333-2215</p>
              </div>
              
              <div className="bg-white/10 rounded-lg p-8 backdrop-blur-sm">
                <MapPin className="w-10 h-10 mx-auto mb-4 text-[#7bb52d]" />
                <p className="text-lg font-semibold mb-2">Service Coverage</p>
                <p className="text-sm">Palm Springs, Palm Desert, Rancho Mirage, and more</p>
              </div>
            </div>

            <p className="text-lg leading-relaxed text-gray-100 mb-8">
              Discover the difference with CLS Caregivers—every senior deserves to live with dignity, comfort, and joy.
            </p>

            <button className="bg-[#7bb52d] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors duration-300">
              Request a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
