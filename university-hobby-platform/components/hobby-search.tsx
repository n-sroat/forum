"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Search, SlidersHorizontal, X } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

export default function HobbySearch() {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([0, 200])
  const [timeCommitment, setTimeCommitment] = useState([1, 10])
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const popularTags = [
    "Creative",
    "Outdoors",
    "Social",
    "Technical",
    "Physical",
    "Relaxing",
    "Competitive",
    "Intellectual",
    "Artistic",
    "Practical",
  ]

  const handleTagClick = (tag: string) => {
    if (selectedTags.includes(tag)) {
      setSelectedTags(selectedTags.filter((t) => t !== tag))
    } else {
      setSelectedTags([...selectedTags, tag])
    }
  }

  const handleRemoveTag = (tag: string) => {
    setSelectedTags(selectedTags.filter((t) => t !== tag))
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input placeholder="Search hobbies..." className="pl-9" />
        </div>
        <Button variant="outline" className="md:w-auto" onClick={() => setIsFiltersOpen(!isFiltersOpen)}>
          <SlidersHorizontal className="h-4 w-4 mr-2" />
          Filters
        </Button>
        <Button className="bg-[#3DA9FC]">Search</Button>
      </div>

      {isFiltersOpen && (
        <div className="mt-6 pt-6 border-t border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium mb-3">Budget Range</h3>
              <Slider defaultValue={priceRange} max={200} step={10} onValueChange={setPriceRange} className="mb-6" />
              <div className="flex items-center justify-between">
                <span className="text-sm">£{priceRange[0]}</span>
                <span className="text-sm">£{priceRange[1]}</span>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Time Commitment (hours/week)</h3>
              <Slider
                defaultValue={timeCommitment}
                max={20}
                step={1}
                onValueChange={setTimeCommitment}
                className="mb-6"
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">{timeCommitment[0]}h</span>
                <span className="text-sm">{timeCommitment[1]}h</span>
              </div>
            </div>

            <div>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="location">
                  <AccordionTrigger>Location</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="location-indoor" />
                        <Label htmlFor="location-indoor">Indoor</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="location-outdoor" />
                        <Label htmlFor="location-outdoor">Outdoor</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="location-both" />
                        <Label htmlFor="location-both">Both</Label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="skill-level">
                  <AccordionTrigger>Skill Level</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="skill-beginner" />
                        <Label htmlFor="skill-beginner">Beginner-friendly</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="skill-intermediate" />
                        <Label htmlFor="skill-intermediate">Intermediate</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="skill-advanced" />
                        <Label htmlFor="skill-advanced">Advanced</Label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="social">
                  <AccordionTrigger>Social Aspect</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="social-solo" />
                        <Label htmlFor="social-solo">Solo</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="social-partner" />
                        <Label htmlFor="social-partner">Partner/Small Group</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="social-team" />
                        <Label htmlFor="social-team">Team/Large Group</Label>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-medium mb-3">Hobby Characteristics</h3>
            <div className="flex flex-wrap gap-2">
              {popularTags.map((tag) => (
                <Badge
                  key={tag}
                  variant={selectedTags.includes(tag) ? "default" : "outline"}
                  className={`cursor-pointer ${
                    selectedTags.includes(tag) ? "bg-[#9B51E0] hover:bg-[#8A46C9]" : "hover:bg-gray-100"
                  }`}
                  onClick={() => handleTagClick(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}

      {selectedTags.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="text-sm text-gray-500 mb-2">Selected filters:</div>
          <div className="flex flex-wrap gap-2">
            {selectedTags.map((tag) => (
              <Badge key={tag} className="bg-[#9B51E0] flex items-center gap-1">
                {tag}
                <X className="h-3 w-3 cursor-pointer" onClick={() => handleRemoveTag(tag)} />
              </Badge>
            ))}

            <Button variant="link" className="text-xs text-gray-500 h-auto p-0" onClick={() => setSelectedTags([])}>
              Clear all
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

