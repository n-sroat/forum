import { Star } from "lucide-react"

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "HobbyHub helped me discover my passion for rock climbing. I've met amazing friends through the platform and even found affordable gear through the marketplace!",
      name: "Alex Johnson",
      role: "Computer Science Student",
      university: "University of Manchester",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      quote:
        "As an international student, I was looking for ways to connect with others. Through HobbyHub, I found a photography group and now we meet weekly for photo walks around campus.",
      name: "Mei Lin",
      role: "Business Administration Student",
      university: "University of Edinburgh",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
    {
      quote:
        "The hobby quiz recommended pottery to me, something I'd never considered before. Six months later, I'm selling my creations on the marketplace and teaching workshops!",
      name: "James Wilson",
      role: "Fine Arts Student",
      university: "University College London",
      avatar: "/placeholder.svg?height=100&width=100",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Students Are Saying</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join thousands of university students who have discovered new passions and connections through HobbyHub.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-[#FFC83D] fill-[#FFC83D]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-sm text-[#3DA9FC]">{testimonial.university}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

