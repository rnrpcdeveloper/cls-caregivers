import { Star } from 'lucide-react'

const testimonials = [
  {
    name: "Richard James",
    role: "Family Member",
    text: "Michael was amazing, returning my call promptly and delivering assistance when we needed it most. His kindness and compassion will never be forgotten.",
    rating: 5
  },
  {
    name: "Wendy Crommelin",
    role: "Family Member",
    text: "Michael and Jill were very professional and provided us with an amazing caregiver. We were so pleased with the care that our mom received.",
    rating: 5
  },
  {
    name: "Kathleen Nelson",
    role: "Nurse & Family Member",
    text: "Michael & Jill are incredibly responsive to any inquiries. They are very hands-on and truly want their clients to thrive.",
    rating: 5
  },
  {
    name: "Howard Tabackman",
    role: "Family Member",
    text: "Unlike other caregiving services, CLS truly lives up to their name. We were thoughtfully matched with caregivers who are consistent and a great fit.",
    rating: 5
  },
  {
    name: "Karen Kelley",
    role: "Family Member",
    text: "CLSC provides supportive caregivers who give my mother excellent in-home care. They are a true godsend and a significant relief daily.",
    rating: 5
  },
  {
    name: "David Batteri",
    role: "Neighbor",
    text: "CLS has been a great help when my neighbor needed it most. Michael and Jill really do care about helping seniors in our community.",
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Families Love CLS Caregivers
          </h2>
          <p className="text-xl text-gray-600">
            Hear directly from families who've experienced our compassionate care and professional service.
          </p>
          <div className="mt-6 flex items-center justify-center gap-2">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={24} className="fill-[#7bb52d] text-[#7bb52d]" />
              ))}
            </div>
            <p className="font-semibold text-gray-900">Based on 19+ verified reviews</p>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-8 border-l-4 border-[#7bb52d]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-[#7bb52d] text-[#7bb52d]" />
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

        {/* Trust Badge */}
        <div className="mt-16 bg-white rounded-xl shadow-lg p-12 text-center border-2 border-[#7bb52d]/20">
          <p className="text-gray-600 mb-2">Google Reviews Rating</p>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={28} className="fill-[#7bb52d] text-[#7bb52d]" />
              ))}
            </div>
            <p className="text-3xl font-bold text-gray-900">4.9</p>
            <p className="text-gray-600">(19+ reviews)</p>
          </div>
          <p className="text-gray-700 font-semibold">Rated Excellent by Families Across Coachella Valley</p>
        </div>
      </div>
    </section>
  )
}
