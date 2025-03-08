import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle, Star } from "lucide-react"
import Link from "next/link"

export default function MarketplaceServices() {
  // Mock data for marketplace services
  const services = [
    {
      id: 1,
      title: "Piano Lessons for Beginners",
      description:
        "Learn piano from a music student with 10+ years of experience. Lessons tailored to your level and goals. Online or in-person available.",
      price: 25,
      priceUnit: "per hour",
      location: "London / Online",
      university: "Royal College of Music",
      category: "Music Lessons",
      seller: {
        name: "David Chen",
        rating: 4.9,
        reviewCount: 24,
        avatar: "/placeholder.svg?height=50&width=50",
      },
      image: "/placeholder.svg?height=300&width=400",
      postedDate: "3 days ago",
    },
    {
      id: 2,
      title: "Photography Basics Workshop",
      description:
        "Learn how to use your DSLR camera effectively. Covers composition, lighting, and basic editing. Small group sessions in the park.",
      price: 40,
      priceUnit: "per session",
      location: "Manchester",
      university: "University of Manchester",
      category: "Art & Design",
      seller: {
        name: "Sophia Williams",
        rating: 4.8,
        reviewCount: 16,
        avatar: "/placeholder.svg?height=50&width=50",
      },
      image: "/placeholder.svg?height=300&width=400",
      postedDate: "1 week ago",
    },
    {
      id: 3,
      title: "Tennis Coaching for Students",
      description:
        "Improve your tennis skills with a university team player. All levels welcome. Equipment can be provided if needed.",
      price: 20,
      priceUnit: "per hour",
      location: "Edinburgh",
      university: "University of Edinburgh",
      category: "Sports Coaching",
      seller: {
        name: "James Taylor",
        rating: 4.7,
        reviewCount: 12,
        avatar: "/placeholder.svg?height=50&width=50",
      },
      image: "/placeholder.svg?height=300&width=400",
      postedDate: "2 days ago",
    },
    {
      id: 4,
      title: "Web Development Tutoring",
      description:
        "Get help with HTML, CSS, JavaScript, and React. Personalized sessions to help you build your portfolio or complete assignments.",
      price: 30,
      priceUnit: "per hour",
      location: "Online",
      university: "Imperial College London",
      category: "Tech Support",
      seller: {
        name: "Aisha Khan",
        rating: 5.0,
        reviewCount: 19,
        avatar: "/placeholder.svg?height=50&width=50",
      },
      image: "/placeholder.svg?height=300&width=400",
      postedDate: "5 days ago",
    },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Available Services ({services.length})</h2>
        <div className="text-sm text-gray-500">
          Sorted by: <span className="font-medium">Highest Rated</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full h-8 w-8"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Badge className="absolute top-2 left-2 bg-[#9B51E0] text-white">{service.category}</Badge>
            </div>

            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg line-clamp-1">{service.title}</h3>
                <div className="text-right">
                  <span className="font-bold text-lg">£{service.price}</span>
                  <span className="text-xs text-gray-500"> {service.priceUnit}</span>
                </div>
              </div>

              <p className="text-sm text-gray-600 line-clamp-2 mb-3">{service.description}</p>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center">
                  <span>{service.location}</span>
                  <span className="mx-1">•</span>
                  <span>{service.postedDate}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-3 w-3 text-[#FFC83D] fill-[#FFC83D] mr-1" />
                  <span>
                    {service.seller.rating} ({service.seller.reviewCount} reviews)
                  </span>
                </div>
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-0 flex justify-between items-center border-t">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                  <img
                    src={service.seller.avatar || "/placeholder.svg"}
                    alt={service.seller.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs">{service.seller.name}</span>
              </div>

              <Link href={`/marketplace/services/${service.id}`}>
                <Button size="sm" className="bg-[#3DA9FC]">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  Contact
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

