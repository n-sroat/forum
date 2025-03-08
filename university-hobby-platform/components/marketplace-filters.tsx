"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface MarketplaceFiltersProps {
  isServices?: boolean
}

export default function MarketplaceFilters({ isServices = false }: MarketplaceFiltersProps) {
  const [priceRange, setPriceRange] = useState([0, 500])

  const categories = isServices
    ? [
        { id: "music", label: "Music Lessons" },
        { id: "art", label: "Art & Design" },
        { id: "sports", label: "Sports Coaching" },
        { id: "tech", label: "Tech Support" },
        { id: "academic", label: "Academic Tutoring" },
        { id: "language", label: "Language Learning" },
        { id: "cooking", label: "Cooking Classes" },
        { id: "other", label: "Other Services" },
      ]
    : [
        { id: "photography", label: "Photography" },
        { id: "music", label: "Music & Instruments" },
        { id: "sports", label: "Sports Equipment" },
        { id: "art", label: "Art Supplies" },
        { id: "tech", label: "Tech & Gadgets" },
        { id: "books", label: "Books & Literature" },
        { id: "outdoor", label: "Outdoor Gear" },
        { id: "other", label: "Other Items" },
      ]

  const conditions = [
    { id: "new", label: "New" },
    { id: "like-new", label: "Like New" },
    { id: "good", label: "Good" },
    { id: "fair", label: "Fair" },
  ]

  const locations = [
    { id: "london", label: "London" },
    { id: "manchester", label: "Manchester" },
    { id: "birmingham", label: "Birmingham" },
    { id: "leeds", label: "Leeds" },
    { id: "edinburgh", label: "Edinburgh" },
    { id: "remote", label: "Remote/Online" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div>
          <div className="relative">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
            <Input placeholder={`Search ${isServices ? "services" : "items"}...`} className="pl-8" />
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">Price Range</h3>
          <Slider defaultValue={priceRange} max={500} step={10} onValueChange={setPriceRange} className="mb-6" />
          <div className="flex items-center justify-between">
            <span className="text-sm">£{priceRange[0]}</span>
            <span className="text-sm">£{priceRange[1]}</span>
          </div>
        </div>

        <div>
          <h3 className="font-medium mb-3">Categories</h3>
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox id={`category-${category.id}`} />
                <Label htmlFor={`category-${category.id}`}>{category.label}</Label>
              </div>
            ))}
          </div>
        </div>

        {!isServices && (
          <div>
            <h3 className="font-medium mb-3">Condition</h3>
            <div className="space-y-2">
              {conditions.map((condition) => (
                <div key={condition.id} className="flex items-center space-x-2">
                  <Checkbox id={`condition-${condition.id}`} />
                  <Label htmlFor={`condition-${condition.id}`}>{condition.label}</Label>
                </div>
              ))}
            </div>
          </div>
        )}

        <div>
          <h3 className="font-medium mb-3">Location</h3>
          <div className="space-y-2">
            {locations.map((location) => (
              <div key={location.id} className="flex items-center space-x-2">
                <Checkbox id={`location-${location.id}`} />
                <Label htmlFor={`location-${location.id}`}>{location.label}</Label>
              </div>
            ))}
          </div>
        </div>

        <Button className="w-full bg-[#3DA9FC]">Apply Filters</Button>
      </CardContent>
    </Card>
  )
}

