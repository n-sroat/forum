import Link from "next/link"
import { Button } from "@/components/ui/button"
import HobbyRecommendations from "@/components/hobby-recommendations"
import CommunityGroups from "@/components/community-groups"
import MarketplacePreview from "@/components/marketplace-preview"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Your Hobby Dashboard</h1>
              <p className="text-gray-600">Based on your preferences, we've found some perfect hobbies for you!</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link href="/onboarding">
                <Button variant="outline" className="border-[#3DA9FC] text-[#3DA9FC]">
                  Retake Quiz
                </Button>
              </Link>
            </div>
          </div>

          <HobbyRecommendations />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <CommunityGroups />
            <MarketplacePreview />
          </div>
        </div>
      </div>
    </div>
  )
}

