import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, MessageSquare, Calendar } from "lucide-react"
import Link from "next/link"

export default function CommunityList() {
  // Mock data for community groups
  const communities = [
    {
      id: 1,
      name: "Photography Enthusiasts",
      description:
        "A community for students interested in photography. Share your work, get feedback, and join photo walks around campus.",
      members: 128,
      posts: 342,
      events: 5,
      tags: ["Photography", "Creative", "Outdoors"],
      image: "/placeholder.svg?height=300&width=400",
      university: "University of Manchester",
      isJoined: false,
    },
    {
      id: 2,
      name: "Music & Jamming Sessions",
      description:
        "Connect with fellow musicians, form bands, and join regular jamming sessions. All skill levels and instruments welcome!",
      members: 215,
      posts: 567,
      events: 12,
      tags: ["Music", "Performance", "Social"],
      image: "/placeholder.svg?height=300&width=400",
      university: "Multiple Universities",
      isJoined: true,
    },
    {
      id: 3,
      name: "Beginner Climbers",
      description:
        "New to climbing? Join us to learn the basics, find climbing buddies, and discover the best climbing spots near campus.",
      members: 86,
      posts: 198,
      events: 8,
      tags: ["Sports", "Outdoors", "Fitness"],
      image: "/placeholder.svg?height=300&width=400",
      university: "University of Leeds",
      isJoined: false,
    },
    {
      id: 4,
      name: "Digital Artists Collective",
      description:
        "A space for digital artists to share work, get feedback, and collaborate on projects. Regular workshops and skill-sharing sessions.",
      members: 152,
      posts: 423,
      events: 6,
      tags: ["Art", "Digital", "Creative"],
      image: "/placeholder.svg?height=300&width=400",
      university: "University College London",
      isJoined: false,
    },
    {
      id: 5,
      name: "Board Game Nights",
      description:
        "Weekly board game nights for students. Extensive game collection available, or bring your own favorites to share!",
      members: 94,
      posts: 256,
      events: 15,
      tags: ["Gaming", "Social", "Indoor"],
      image: "/placeholder.svg?height=300&width=400",
      university: "University of Edinburgh",
      isJoined: false,
    },
    {
      id: 6,
      name: "Cooking on a Budget",
      description:
        "Learn to cook delicious meals on a student budget. Recipe sharing, cooking tips, and occasional group cooking sessions.",
      members: 178,
      posts: 389,
      events: 4,
      tags: ["Cooking", "Budget", "Lifestyle"],
      image: "/placeholder.svg?height=300&width=400",
      university: "Multiple Universities",
      isJoined: false,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {communities.map((community) => (
        <Card key={community.id} className="overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-40 overflow-hidden">
            <img
              src={community.image || "/placeholder.svg"}
              alt={community.name}
              className="w-full h-full object-cover"
            />
          </div>

          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl">{community.name}</CardTitle>
              <Badge variant="outline" className="text-xs">
                {community.university}
              </Badge>
            </div>
            <CardDescription className="line-clamp-2">{community.description}</CardDescription>
          </CardHeader>

          <CardContent className="pb-2">
            <div className="flex flex-wrap gap-2 mb-4">
              {community.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-gray-100">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex justify-between text-sm text-gray-500">
              <div className="flex items-center">
                <Users className="h-4 w-4 mr-1" />
                <span>{community.members} members</span>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-1" />
                <span>{community.posts} posts</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{community.events} events</span>
              </div>
            </div>
          </CardContent>

          <CardFooter className="pt-2">
            <div className="w-full flex justify-between items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <Avatar key={i} className="h-6 w-6 border-2 border-white">
                    <AvatarImage src={`/placeholder.svg?height=50&width=50`} />
                    <AvatarFallback>U{i}</AvatarFallback>
                  </Avatar>
                ))}
                {community.members > 3 && (
                  <div className="h-6 w-6 rounded-full bg-gray-100 flex items-center justify-center text-xs border-2 border-white">
                    +{community.members - 3}
                  </div>
                )}
              </div>

              <Link href={`/communities/${community.id}`}>
                <Button
                  variant={community.isJoined ? "outline" : "default"}
                  className={community.isJoined ? "border-[#3DA9FC] text-[#3DA9FC]" : "bg-[#3DA9FC]"}
                >
                  {community.isJoined ? "View Community" : "Join Community"}
                </Button>
              </Link>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

