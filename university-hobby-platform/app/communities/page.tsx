import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CommunityList from "@/components/community-list"
import CommunityEvents from "@/components/community-events"
import CommunitySearch from "@/components/community-search"

export default function CommunitiesPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Hobby Communities</h1>
            <p className="text-gray-600">Connect with fellow students who share your interests</p>
          </div>

          <CommunitySearch />

          <Tabs defaultValue="groups" className="w-full mt-8">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="groups">Community Groups</TabsTrigger>
              <TabsTrigger value="events">Upcoming Events</TabsTrigger>
            </TabsList>

            <TabsContent value="groups">
              <CommunityList />
            </TabsContent>

            <TabsContent value="events">
              <CommunityEvents />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

