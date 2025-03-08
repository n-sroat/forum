import { Camera, Users, ShoppingBag, Brain, Clock, DollarSign } from "lucide-react"

export default function FeatureSection() {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-[#9B51E0]" />,
      title: "AI-Powered Hobby Matching",
      description:
        "Discover hobbies that match your personality, interests, and preferences through our smart recommendation system.",
    },
    {
      icon: <Users className="h-8 w-8 text-[#3DA9FC]" />,
      title: "Community Groups",
      description: "Connect with like-minded students in topic-based forums and local meetups to share your passion.",
    },
    {
      icon: <ShoppingBag className="h-8 w-8 text-[#FFC83D]" />,
      title: "Hobby Marketplace",
      description:
        "Buy and sell secondhand gear, equipment, and services related to your hobbies at student-friendly prices.",
    },
    {
      icon: <Camera className="h-8 w-8 text-[#9B51E0]" />,
      title: "Beginner Guides",
      description: "Access curated resources and step-by-step guides to help you get started with your new hobby.",
    },
    {
      icon: <Clock className="h-8 w-8 text-[#3DA9FC]" />,
      title: "Time Commitment Insights",
      description:
        "See estimated time requirements for different hobbies to find ones that fit your busy student schedule.",
    },
    {
      icon: <DollarSign className="h-8 w-8 text-[#FFC83D]" />,
      title: "Budget-Friendly Options",
      description:
        "Filter hobbies by cost and find affordable ways to pursue your interests without breaking the bank.",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything You Need to Discover and Pursue Your Passions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform is designed specifically for university students looking to explore new hobbies, connect with
            peers, and access affordable resources.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F9FAFB] p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

