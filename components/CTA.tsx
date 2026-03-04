'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Loader } from 'lucide-react'

export default function CTA() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus('success')
      setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })
      setIsSubmitting(false)
      
      // Reset message after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000)
    }, 1000)
  }

  return (
    <section id="contact" className="py-20 lg:py-32 bg-[#532B9D] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-white rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#7bb52d] rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Ready to Experience Exceptional Care?
              </h2>
              <p className="text-lg text-white/90 leading-relaxed">
                Get your FREE consultation today. Our team is ready to discuss how we can help your loved one live safely and comfortably at home.
              </p>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <Phone className="text-[#7bb52d] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a href="tel:(760)333-2215" className="text-white/80 hover:text-[#7bb52d] transition text-lg">
                    (760) 333-2215
                  </a>
                  <p className="text-sm text-white/70 mt-1">Available 24/7</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="text-[#7bb52d] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:info@clscaregivers.com" className="text-white/80 hover:text-[#7bb52d] transition">
                    info@clscaregivers.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <MapPin className="text-[#7bb52d] mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="font-semibold text-white">Office Address</p>
                  <p className="text-white/80">73 Via Las Flores</p>
                  <p className="text-white/80">Rancho Mirage, CA 92270</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
            
            {submitStatus === 'success' && (
              <div className="bg-[#7bb52d]/20 border border-[#7bb52d] text-white rounded-lg p-4 mb-6 text-center">
                Thank you! We'll be in touch shortly.
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-500/20 border border-red-500 text-white rounded-lg p-4 mb-6 text-center">
                Something went wrong. Please try again or call us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#7bb52d] transition"
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#7bb52d] transition"
                />
              </div>

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#7bb52d] transition"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#7bb52d] transition"
              />

              <textarea
                name="message"
                placeholder="Tell us about your caregiving needs..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                required
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-[#7bb52d] transition resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#7bb52d] hover:bg-[#6a9d25] disabled:opacity-50 text-white font-bold py-3 rounded-lg transition flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </button>
            </form>

            <p className="text-white/70 text-center text-sm mt-4">
              We respond within 24 hours. For urgent matters, please call.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
