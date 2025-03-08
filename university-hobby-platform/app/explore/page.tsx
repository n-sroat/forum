import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import HobbyCategories from "@/components/hobby-categories"
import HobbyList from "@/components/hobby-list"
import HobbySearch from "@/components/hobby-search"

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Explore Hobbies</h1>
            <p className="text-gray-600">Discover new interests and passions to pursue during your university years</p>
          </div>

          <HobbySearch />

          <Tabs defaultValue="all" className="w-full mt-8">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all">All Hobbies</TabsTrigger>
              <TabsTrigger value="trending">Trending</TabsTrigger>
              <TabsTrigger value="budget">Budget-Friendly</TabsTrigger>
              <TabsTrigger value="quick">Quick to Learn</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <HobbyCategories />
              <HobbyList />
            </TabsContent>

            <TabsContent value="trending">
              <HobbyList filter="trending" />
            </TabsContent>

            <TabsContent value="budget">
              <HobbyList filter="budget" />
            </TabsContent>

            <TabsContent value="quick">
              <HobbyList filter="quick" />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

