import { Card, CardContent } from "@/components/ui/card"
import { Camera, Music, Palette, Dumbbell, Gamepad2, Utensils, BookOpen, Mountain, Code, Plane } from "lucide-react"
import Link from "next/link"

export default function HobbyCategories() {
  const categories = [
    {
      name: "Photography",
      icon: <Camera className="h-6 w-6" />,
      color: "#3DA9FC",
      path: "/explore/photography",
    },
    {
      name: "Music",
      icon: <Music className="h-6 w-6" />,
      color: "#FFC83D",
      path: "/explore/music",
    },
    {
      name: "Art & Crafts",
      icon: <Palette className="h-6 w-6" />,
      color: "#9B51E0",
      path: "/explore/art-crafts",
    },
    {
      name: "Sports & Fitness",
      icon: <Dumbbell className="h-6 w-6" />,
      color: "#3DA9FC",
      path: "/explore/sports-fitness",
    },
    {
      name: "Gaming",
      icon: <Gamepad2 className="h-6 w-6" />,
      color: "#FFC83D",
      path: "/explore/gaming",
    },
    {
      name: "Cooking",
      icon: <Utensils className="h-6 w-6" />,
      color: "#9B51E0",
      path: "/explore/cooking",
    },
    {
      name: "Reading & Writing",
      icon: <BookOpen className="h-6 w-6" />,
      color: "#3DA9FC",
      path: "/explore/reading-writing",
    },
    {
      name: "Outdoors",
      icon: <Mountain className="h-6 w-6" />,
      color: "#FFC83D",
      path: "/explore/outdoors",
    },
    {
      name: "Tech & Coding",
      icon: <Code className="h-6 w-6" />,
      color: "#9B51E0",
      path: "/explore/tech-coding",
    },
    {
      name: "Travel",
      icon: <Plane className="h-6 w-6" />,
      color: "#3DA9FC",
      path: "/explore/travel",
    },
  ]

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {categories.map((category) => (
          <Link key={category.name} href={category.path}>
            <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center h-full">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-3"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <div style={{ color: category.color }}>{category.icon}</div>
                </div>
                <span className="font-medium">{category.name}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

