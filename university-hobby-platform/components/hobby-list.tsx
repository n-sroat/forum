import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, DollarSign, Users, Star, TrendingUp, Sparkles } from "lucide-react"
import Link from "next/link"

interface HobbyListProps {
  filter?: "trending" | "budget" | "quick" | undefined
}

export default function HobbyList({ filter }: HobbyListProps) {
  // Mock data for hobbies
  const allHobbies = [
    {
      id: 1,
      name: "Photography",
      description:
        "Capture moments and express your creativity through the lens. Perfect for creative minds who enjoy both technical and artistic aspects.",
      image: "/placeholder.svg?height=200&width=300",
      timeCommitment: "3-5 hours/week",
      costRange: "£50-£200",
      communitySize: "Large",
      difficulty: "Beginner-Friendly",
      tags: ["Creative", "Technical", "Outdoors", "Social"],
      rating: 4.8,
      isTrending: true,
      isBudgetFriendly: false,
      isQuickToLearn: true,
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
      difficulty: "Moderate",
      tags: ["Active", "Outdoors", "Social", "Challenge"],
      rating: 4.7,
      isTrending: true,
      isBudgetFriendly: false,
      isQuickToLearn: false,
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
      difficulty: "Beginner-Friendly",
      tags: ["Creative", "Technical", "Indoors", "Flexible"],
      rating: 4.6,
      isTrending: false,
      isBudgetFriendly: true,
      isQuickToLearn: true,
      color: "#9B51E0",
    },
    {
      id: 4,
      name: "Board Games",
      description:
        "Enjoy strategic thinking and social interaction through various board games. A great way to make friends and exercise your mind.",
      image: "/placeholder.svg?height=200&width=300",
      timeCommitment: "2-4 hours/week",
      costRange: "£20-£100",
      communitySize: "Large",
      difficulty: "Beginner-Friendly",
      tags: ["Social", "Indoors", "Strategic", "Relaxing"],
      rating: 4.9,
      isTrending: true,
      isBudgetFriendly: true,
      isQuickToLearn: true,
      color: "#3DA9FC",
    },
    {
      id: 5,
      name: "Cooking",
      description:
        "Learn to prepare delicious meals while developing a valuable life skill. Impress friends and save money on takeout!",
      image: "/placeholder.svg?height=200&width=300",
      timeCommitment: "3-8 hours/week",
      costRange: "£10-£50/week",
      communitySize: "Large",
      difficulty: "Beginner-Friendly",
      tags: ["Practical", "Creative", "Indoors", "Social"],
      rating: 4.7,
      isTrending: false,
      isBudgetFriendly: true,
      isQuickToLearn: true,
      color: "#FFC83D",
    },
    {
      id: 6,
      name: "Yoga",
      description:
        "Improve flexibility, strength, and mental wellbeing through this ancient practice. Perfect for busy students looking to reduce stress.",
      image: "/placeholder.svg?height=200&width=300",
      timeCommitment: "2-5 hours/week",
      costRange: "£0-£50",
      communitySize: "Large",
      difficulty: "Beginner-Friendly",
      tags: ["Fitness", "Mindfulness", "Flexible", "Indoor/Outdoor"],
      rating: 4.8,
      isTrending: true,
      isBudgetFriendly: true,
      isQuickToLearn: true,
      color: "#9B51E0",
    },
    {
      id: 7,
      name: "Music Production",
      description:
        "Create your own beats, songs, and mixes using digital audio workstations. Express yourself through sound!",
      image: "/placeholder.svg?height=200&width=300",
      timeCommitment: "5-15 hours/week",
      costRange: "£100-£500",
      communitySize: "Medium",
      difficulty: "Moderate",
      tags: ["Creative", "Technical", "Indoors", "Artistic"],
      rating: 4.6,
      isTrending: true,
      isBudgetFriendly: false,
      isQuickToLearn: false,
      color: "#3DA9FC",
    },
    {
      id: 8,
      name: "Hiking",
      description:
        "Explore nature, get exercise, and enjoy stunning views. A great way to escape campus and clear your mind.",
      image: "/placeholder.svg?height=200&width=300",
      timeCommitment: "3-8 hours/week",
      costRange: "£20-£100",
      communitySize: "Medium",
      difficulty: "Beginner-Friendly",
      tags: ["Outdoors", "Active", "Nature", "Social"],
      rating: 4.7,
      isTrending: false,
      isBudgetFriendly: true,
      isQuickToLearn: true,
      color: "#FFC83D",
    },
  ]

  // Filter hobbies based on the selected filter
  const hobbies =
    filter === "trending"
      ? allHobbies.filter((hobby) => hobby.isTrending)
      : filter === "budget"
        ? allHobbies.filter((hobby) => hobby.isBudgetFriendly)
        : filter === "quick"
          ? allHobbies.filter((hobby) => hobby.isQuickToLearn)
          : allHobbies

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">
          {filter === "trending"
            ? "Trending Hobbies"
            : filter === "budget"
              ? "Budget-Friendly Hobbies"
              : filter === "quick"
                ? "Quick to Learn Hobbies"
                : "Popular Hobbies"}
        </h2>
        <div className="text-sm text-gray-500">Showing {hobbies.length} hobbies</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {hobbies.map((hobby) => (
          <Card key={hobby.id} className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-40 overflow-hidden">
              <img src={hobby.image || "/placeholder.svg"} alt={hobby.name} className="w-full h-full object-cover" />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(to bottom, ${hobby.color}00, ${hobby.color}40)`,
                }}
              ></div>

              {hobby.isTrending && (
                <div className="absolute top-2 right-2">
                  <Badge className="bg-[#FFC83D] text-black flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    Trending
                  </Badge>
                </div>
              )}

              {hobby.isQuickToLearn && (
                <div className="absolute top-2 left-2">
                  <Badge className="bg-[#9B51E0] text-white flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    Quick to Learn
                  </Badge>
                </div>
              )}
            </div>

            <CardHeader className="p-4 pb-0">
              <CardTitle>{hobby.name}</CardTitle>
              <CardDescription className="line-clamp-2">{hobby.description}</CardDescription>
            </CardHeader>

            <CardContent className="p-4 pt-2 pb-0">
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1 text-gray-500" />
                    <span>{hobby.timeCommitment}</span>
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1 text-gray-500" />
                    <span>{hobby.costRange}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-1 text-gray-500" />
                    <span>{hobby.communitySize}</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="h-4 w-4 mr-1 text-[#FFC83D] fill-[#FFC83D]" />
                    <span>{hobby.rating}/5</span>
                  </div>
                </div>
              </div>
            </CardContent>

            <CardFooter className="p-4">
              <Link href={`/hobbies/${hobby.id}`} className="w-full">
                <Button className="w-full" style={{ backgroundColor: hobby.color }}>
                  Learn More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

