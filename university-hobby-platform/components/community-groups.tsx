import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CommunityGroups() {
  // Mock data for community groups
  const groups = [
    {
      id: 1,
      name: "Photography Enthusiasts",
      description: "Share tips, techniques, and go on photo walks together.",
      members: 128,
      newPosts: 12,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      name: "Beginner Climbers",
      description: "Learn the basics of climbing and find climbing buddies.",
      members: 86,
      newPosts: 8,
      image: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 3,
      name: "Digital Artists Collective",
      description: "Share your work, get feedback, and learn new techniques.",
      members: 152,
      newPosts: 15,
      image: "/placeholder.svg?height=50&width=50",
    },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Communities</CardTitle>
        <CardDescription>Connect with students who share your interests</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {groups.map((group) => (
            <div key={group.id} className="flex items-start p-3 rounded-lg hover:bg-gray-50">
              <Avatar className="h-10 w-10 mr-3">
                <AvatarImage src={group.image} alt={group.name} />
                <AvatarFallback>{group.name.substring(0, 2)}</AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold">{group.name}</h4>
                <p className="text-xs text-gray-500 truncate">{group.description}</p>
                <div className="flex items-center mt-1 text-xs text-gray-500">
                  <span>{group.members} members</span>
                  <span className="mx-2">•</span>
                  <span className="text-[#3DA9FC]">{group.newPosts} new posts</span>
                </div>
              </div>

              <Button variant="outline" size="sm" className="ml-2 text-xs">
                Join
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <Link href="/communities">
            <Button variant="link" className="text-[#3DA9FC]">
              View All Communities
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}

