import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function MarketplacePreview() {
  // Mock data for marketplace items
  const items = [
    {
      id: 1,
      name: "Canon EOS 2000D DSLR Camera",
      price: "£280",
      condition: "Like New",
      location: "Manchester",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 2,
      name: "Climbing Shoes - Size 42",
      price: "£45",
      condition: "Good",
      location: "Leeds",
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: 3,
      name: "Wacom Drawing Tablet",
      price: "£65",
      condition: "Excellent",
      location: "London",
      image: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Marketplace Finds</CardTitle>
        <CardDescription>Affordable gear and services from fellow students</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center p-3 rounded-lg hover:bg-gray-50">
              <div className="h-16 w-16 rounded overflow-hidden mr-3 flex-shrink-0">
                <img src={item.image || "/placeholder.svg"} alt={item.name} className="h-full w-full object-cover" />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold truncate">{item.name}</h4>
                <p className="text-sm font-medium text-[#FFC83D]">{item.price}</p>
                <div className="flex items-center mt-1 text-xs text-gray-500">
                  <span>{item.condition}</span>
                  <span className="mx-2">•</span>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link href="/marketplace">
            <Button variant="link" className="text-[#3DA9FC]">
              Browse Marketplace
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

