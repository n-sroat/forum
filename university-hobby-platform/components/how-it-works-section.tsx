import { CheckCircle2 } from "lucide-react"

export default function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Take the Hobby Quiz",
      description: "Answer a few questions about your personality, interests, available time, and budget.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      number: "02",
      title: "Get Personalized Recommendations",
      description: "Our AI suggests hobbies that match your profile, complete with starter guides and cost estimates.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      number: "03",
      title: "Join Community Groups",
      description: "Connect with fellow students who share your interests through topic-based forums and local events.",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      number: "04",
      title: "Buy & Sell in the Marketplace",
      description: "Find affordable gear and services or sell your unused equipment to other students.",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <section className="py-20 bg-[#F9FAFB]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How HobbyHub Works</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our simple process helps you discover, explore, and engage with new hobbies and communities.
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className={`order-2 ${index % 2 === 1 ? "md:order-1" : "md:order-2"}`}>
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <img src={step.image || "/placeholder.svg"} alt={step.title} className="w-full h-auto object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#9B51E0]/20 to-transparent mix-blend-multiply"></div>
                </div>
              </div>

              <div className={`order-1 ${index % 2 === 1 ? "md:order-2" : "md:order-1"}`}>
                <div className="flex items-center mb-4">
                  <span className="text-4xl font-bold text-[#3DA9FC]">{step.number}</span>
                  <div className="ml-4 h-px bg-[#3DA9FC] flex-grow"></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-gray-600 mb-6">{step.description}</p>
                <ul className="space-y-2">
                  {[1, 2, 3].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#FFC83D] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">
                        {index === 0 && item === 1 && "Quick 3-minute quiz"}
                        {index === 0 && item === 2 && "No prior hobby knowledge needed"}
                        {index === 0 && item === 3 && "Tailored to student life"}

                        {index === 1 && item === 1 && "Personalized to your preferences"}
                        {index === 1 && item === 2 && "Detailed cost breakdowns"}
                        {index === 1 && item === 3 && "Beginner-friendly resources"}

                        {index === 2 && item === 1 && "Connect with hobby mentors"}
                        {index === 2 && item === 2 && "Join virtual and in-person events"}
                        {index === 2 && item === 3 && "Ask questions and share progress"}

                        {index === 3 && item === 1 && "Student-to-student transactions"}
                        {index === 3 && item === 2 && "Secure payment system"}
                        {index === 3 && item === 3 && "Verified university users"}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

