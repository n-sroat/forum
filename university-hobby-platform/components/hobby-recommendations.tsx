import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, DollarSign, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function HobbyRecommendations() {
  // Mock data for hobby recommendations
  const recommendations = [
    {
      id: 1,
      name: "Photography",
      description:
        "Capture moments and express your creativity through the lens. Perfect for creative minds who enjoy both technical and artistic aspects.",
      image: "/placeholder.svg?height=200&width=300",
      timeCommitment: "3-5 hours/week",
      costRange: "£50-£200",
      communitySize: "Large",
      tags: ["Creative", "Technical", "Outdoors", "Social"],
      color: "#3DA9FC",
    },
    {
      id: 2,
      name: "Rock Climbing",
      description:
        "Challenge yourself physically and mentally while enjoying the thrill of reaching new heights. Great for adventurous students.",
      image: "/placeholder.svg?height=200&width=300",
      timeCommitment: "4-6 hours/week",
      costRange: "£80-£150",
      communitySize: "Medium",
      tags: ["Active", "Outdoors", "Social", "Challenge"],
      color: "#FFC83D",
    },
    {
      id: 3,
      name: "Digital Art",
      description:
        "Create stunning digital illustrations and designs. Perfect for creative students who prefer indoor activities.",
      image: "/placeholder.svg?height=200&width=300",
      timeCommitment: "2-10 hours/week",
      costRange: "£0-£100",
      communitySize: "Large",
      tags: ["Creative", "Technical", "Indoors", "Flexible"],
      color: "#9B51E0",
    },
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Recommended Hobbies for You</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map((hobby) => (
          <Card key={hobby.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48 overflow-hidden">
              <img src={hobby.image || "/placeholder.svg"} alt={hobby.name} className="w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, ${hobby.color}00, ${hobby.color}40)`,
                }}
              ></div>
            </div>

            <CardHeader>
              <CardTitle>{hobby.name}</CardTitle>
              <CardDescription>{hobby.description}</CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{hobby.timeCommitment}</span>
                </div>
                <div className="flex items-center text-sm">
                  <DollarSign className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{hobby.costRange}</span>
                </div>
                <div className="flex items-center text-sm">
                  <Users className="h-4 w-4 mr-2 text-gray-500" />
                  <span>{hobby.communitySize} community</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {hobby.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-gray-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>

            <CardFooter>
              <Link href={`/hobbies/${hobby.id}`} className="w-full">
                <Button className="w-full" style={{ backgroundColor: hobby.color }}>
                  <span className="mr-2">Learn More</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

