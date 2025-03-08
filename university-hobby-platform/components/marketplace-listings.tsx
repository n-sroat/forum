import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart, MessageCircle } from "lucide-react"
import Link from "next/link"

export default function MarketplaceListings() {
  // Mock data for marketplace listings
  const listings = [
    {
      id: 1,
      title: "Canon EOS 2000D DSLR Camera with 18-55mm Lens",
      description:
        "Perfect for beginners. Used for 1 year, in excellent condition. Comes with original box, charger, and strap.",
      price: 280,
      location: "Manchester",
      university: "University of Manchester",
      condition: "Excellent",
      category: "Photography",
      seller: {
        name: "Alex Johnson",
        rating: 4.8,
        avatar: "/placeholder.svg?height=50&width=50",
      },
      images: ["/placeholder.svg?height=300&width=400"],
      postedDate: "2 days ago",
    },
    {
      id: 2,
      title: "Acoustic Guitar - Yamaha F310",
      description:
        "Great beginner guitar, perfect for learning. Some minor scratches but sounds beautiful. Includes guitar bag and tuner.",
      price: 95,
      location: "Leeds",
      university: "University of Leeds",
      condition: "Good",
      category: "Music & Instruments",
      seller: {
        name: "Emma Wilson",
        rating: 4.9,
        avatar: "/placeholder.svg?height=50&width=50",
      },
      images: ["/placeholder.svg?height=300&width=400"],
      postedDate: "5 days ago",
    },
    {
      id: 3,
      title: "Wacom Intuos Drawing Tablet (Medium)",
      description:
        "Used for digital art projects. Works perfectly with all major software. Includes pen and USB cable.",
      price: 65,
      location: "London",
      university: "University College London",
      condition: "Like New",
      category: "Art Supplies",
      seller: {
        name: "Raj Patel",
        rating: 4.7,
        avatar: "/placeholder.svg?height=50&width=50",
      },
      images: ["/placeholder.svg?height=300&width=400"],
      postedDate: "1 week ago",
    },
    {
      id: 4,
      title: "Climbing Shoes - La Sportiva Size 42",
      description:
        "Used for indoor climbing only. Great grip and comfortable fit. Perfect for beginners to intermediate climbers.",
      price: 45,
      location: "Edinburgh",
      university: "University of Edinburgh",
      condition: "Good",
      category: "Sports Equipment",
      seller: {
        name: "Sarah Campbell",
        rating: 4.6,
        avatar: "/placeholder.svg?height=50&width=50",
      },
      images: ["/placeholder.svg?height=300&width=400"],
      postedDate: "3 days ago",
    },
  ]

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Available Items ({listings.length})</h2>
        <div className="text-sm text-gray-500">
          Sorted by: <span className="font-medium">Most Recent</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {listings.map((listing) => (
          <Card key={listing.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img
                src={listing.images[0] || "/placeholder.svg"}
                alt={listing.title}
                className="w-full h-full object-cover"
              />
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 bg-white/80 hover:bg-white rounded-full h-8 w-8"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <Badge className="absolute top-2 left-2 bg-[#FFC83D] text-black">{listing.condition}</Badge>
            </div>

            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-semibold text-lg line-clamp-1">{listing.title}</h3>
                <span className="font-bold text-lg">£{listing.price}</span>
              </div>

              <p className="text-sm text-gray-600 line-clamp-2 mb-3">{listing.description}</p>

              <div className="flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center">
                  <span>{listing.location}</span>
                  <span className="mx-1">•</span>
                  <span>{listing.postedDate}</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {listing.category}
                </Badge>
              </div>
            </CardContent>

            <CardFooter className="p-4 pt-0 flex justify-between items-center border-t">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                  <img
                    src={listing.seller.avatar || "/placeholder.svg"}
                    alt={listing.seller.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs">{listing.seller.name}</span>
              </div>

              <Link href={`/marketplace/${listing.id}`}>
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

