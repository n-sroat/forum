import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import MarketplaceFilters from "@/components/marketplace-filters"
import MarketplaceListings from "@/components/marketplace-listings"
import MarketplaceServices from "@/components/marketplace-services"

export default function MarketplacePage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Student Marketplace</h1>
            <p className="text-gray-600">Buy and sell hobby gear and services with fellow university students</p>
          </div>

          <Tabs defaultValue="items" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="items">Hobby Gear</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </TabsList>

            <TabsContent value="items">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <MarketplaceFilters />
                </div>
                <div className="md:col-span-3">
                  <MarketplaceListings />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="services">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-1">
                  <MarketplaceFilters isServices />
                </div>
                <div className="md:col-span-3">
                  <MarketplaceServices />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

