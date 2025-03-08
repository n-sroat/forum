import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"
import Link from "next/link"

export default function CommunityEvents() {
  // Mock data for community events
  const events = [
    {
      id: 1,
      title: "Photography Walk: Urban Architecture",
      description:
        "Join us for a guided photography walk exploring urban architecture around the city center. All skill levels welcome!",
      date: "Sat, 15 Mar 2025",
      time: "14:00 - 16:30",
      location: "Meeting at University Square",
      attendees: 18,
      maxAttendees: 25,
      tags: ["Photography", "Outdoors"],
      image: "/placeholder.svg?height=300&width=400",
      community: "Photography Enthusiasts",
      isRegistered: false,
    },
    {
      id: 2,
      title: "Open Mic Night: Student Showcase",
      description:
        "Perform your music, poetry, or comedy at our monthly open mic night. Sign up for a 10-minute slot or just come to enjoy the show!",
      date: "Fri, 21 Mar 2025",
      time: "19:00 - 22:00",
      location: "Student Union Bar",
      attendees: 42,
      maxAttendees: 60,
      tags: ["Music", "Performance", "Social"],
      image: "/placeholder.svg?height=300&width=400",
      community: "Music & Jamming Sessions",
      isRegistered: true,
    },
    {
      id: 3,
      title: "Beginner's Climbing Workshop",
      description:
        "Learn the basics of indoor climbing with experienced climbers. Equipment provided. No experience necessary!",
      date: "Sun, 16 Mar 2025",
      time: "10:00 - 12:00",
      location: "University Climbing Wall",
      attendees: 12,
      maxAttendees: 15,
      tags: ["Sports", "Workshop", "Beginner-Friendly"],
      image: "/placeholder.svg?height=300&width=400",
      community: "Beginner Climbers",
      isRegistered: false,
    },
    {
      id: 4,
      title: "Digital Art Workshop: Character Design",
      description:
        "Learn the fundamentals of character design for games, animation, and illustration. Bring your own laptop with drawing software.",
      date: "Wed, 19 Mar 2025",
      time: "18:00 - 20:00",
      location: "Art Department, Room 302",
      attendees: 16,
      maxAttendees: 20,
      tags: ["Art", "Digital", "Workshop"],
      image: "/placeholder.svg?height=300&width=400",
      community: "Digital Artists Collective",
      isRegistered: false,
    },
    {
      id: 5,
      title: "Board Game Marathon",
      description:
        "A full day of board games, from classics to the latest releases. Snacks provided, bring your own games to share if you'd like!",
      date: "Sat, 22 Mar 2025",
      time: "12:00 - 22:00",
      location: "Student Common Room",
      attendees: 28,
      maxAttendees: 40,
      tags: ["Gaming", "Social", "All-Day"],
      image: "/placeholder.svg?height=300&width=400",
      community: "Board Game Nights",
      isRegistered: false,
    },
    {
      id: 6,
      title: "Budget Meal Prep Workshop",
      description:
        "Learn to prepare a week's worth of meals in just a few hours. Budget-friendly recipes and meal planning tips included.",
      date: "Sun, 23 Mar 2025",
      time: "14:00 - 16:00",
      location: "Communal Kitchen, East Residence",
      attendees: 15,
      maxAttendees: 15,
      tags: ["Cooking", "Workshop", "Budget"],
      image: "/placeholder.svg?height=300&width=400",
      community: "Cooking on a Budget",
      isRegistered: false,
      isFull: true,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {events.map((event) => (
        <Card key={event.id} className="overflow-hidden hover:shadow-md transition-shadow">
          <div className="h-48 overflow-hidden">
            <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
            <div className="absolute top-2 right-2">
              <Badge className="bg-[#FFC83D] text-black">
                {event.isFull ? "Full" : `${event.attendees}/${event.maxAttendees} spots`}
              </Badge>
            </div>
          </div>

          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-xl">{event.title}</CardTitle>
            </div>
            <CardDescription className="line-clamp-2">{event.description}</CardDescription>
          </CardHeader>

          <CardContent className="pb-2 space-y-3">
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-gray-100">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="text-sm space-y-1">
              <div className="flex items-center text-gray-700">
                <Calendar className="h-4 w-4 mr-2 text-[#9B51E0]" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <Clock className="h-4 w-4 mr-2 text-[#3DA9FC]" />
                <span>{event.time}</span>
              </div>
              <div className="flex items-center text-gray-700">
                <MapPin className="h-4 w-4 mr-2 text-[#FFC83D]" />
                <span>{event.location}</span>
              </div>
            </div>

            <div className="flex items-center text-sm text-gray-500">
              <Users className="h-4 w-4 mr-1" />
              <span>Hosted by {event.community}</span>
            </div>
          </CardContent>

          <CardFooter className="pt-2">
            <Link href={`/communities/events/${event.id}`} className="w-full">
              <Button
                className="w-full"
                variant={event.isRegistered ? "outline" : "default"}
                disabled={event.isFull && !event.isRegistered}
                style={{
                  backgroundColor: event.isRegistered ? "transparent" : "#3DA9FC",
                  borderColor: event.isRegistered ? "#3DA9FC" : "",
                  color: event.isRegistered ? "#3DA9FC" : "",
                }}
              >
                {event.isFull && !event.isRegistered
                  ? "Event Full"
                  : event.isRegistered
                    ? "Registered"
                    : "Register Now"}
              </Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

