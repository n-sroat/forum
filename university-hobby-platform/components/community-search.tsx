"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, X } from "lucide-react"

export default function CommunitySearch() {
  const [selectedTags, setSelectedTags] = useState<string[]>([])

  const popularTags = [
    "Photography",
    "Music",
    "Art",
    "Sports",
    "Gaming",
    "Cooking",
    "Reading",
    "Hiking",
    "Coding",
    "Dance",
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
          <Input placeholder="Search communities..." className="pl-9" />
        </div>
        <Button className="bg-[#3DA9FC]">Search</Button>
      </div>

      <div className="mt-4">
        <div className="text-sm text-gray-500 mb-2">Popular interests:</div>
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

