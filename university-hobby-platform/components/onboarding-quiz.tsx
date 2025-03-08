"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { CheckCircle2 } from "lucide-react"

export default function OnboardingQuiz() {
  const router = useRouter()
  const [currentStep, setCurrentStep] = useState(0)
  const [answers, setAnswers] = useState({
    personality: "",
    freeTime: 3,
    budget: 3,
    location: "",
    interests: [] as string[],
  })

  const steps = [
    {
      title: "What best describes your personality?",
      type: "radio",
      options: [
        { value: "creative", label: "Creative & Artistic" },
        { value: "analytical", label: "Analytical & Logical" },
        { value: "social", label: "Social & Outgoing" },
        { value: "adventurous", label: "Adventurous & Active" },
        { value: "relaxed", label: "Relaxed & Contemplative" },
      ],
      field: "personality",
    },
    {
      title: "How much free time do you have per week?",
      type: "slider",
      min: 1,
      max: 5,
      step: 1,
      labels: ["1-2 hours", "3-5 hours", "6-10 hours", "11-15 hours", "15+ hours"],
      field: "freeTime",
    },
    {
      title: "What's your budget for a new hobby?",
      type: "slider",
      min: 1,
      max: 5,
      step: 1,
      labels: ["£0-£20", "£20-£50", "£50-£100", "£100-£200", "£200+"],
      field: "budget",
    },
    {
      title: "Where do you prefer to spend your time?",
      type: "radio",
      options: [
        { value: "indoors", label: "Indoors" },
        { value: "outdoors", label: "Outdoors" },
        { value: "both", label: "Both equally" },
      ],
      field: "location",
    },
    {
      title: "Select areas you're interested in (choose all that apply)",
      type: "checkbox",
      options: [
        { value: "arts", label: "Arts & Crafts" },
        { value: "music", label: "Music & Performance" },
        { value: "tech", label: "Technology & Gaming" },
        { value: "sports", label: "Sports & Fitness" },
        { value: "culinary", label: "Cooking & Culinary" },
        { value: "literature", label: "Reading & Writing" },
        { value: "nature", label: "Nature & Outdoors" },
        { value: "collecting", label: "Collecting & Curating" },
      ],
      field: "interests",
    },
  ]

  const currentQuestion = steps[currentStep]

  const handleRadioChange = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.field]: value })
  }

  const handleSliderChange = (value: number[]) => {
    setAnswers({ ...answers, [currentQuestion.field]: value[0] })
  }

  const handleCheckboxChange = (value: string) => {
    const currentInterests = answers.interests
    const newInterests = currentInterests.includes(value)
      ? currentInterests.filter((item) => item !== value)
      : [...currentInterests, value]

    setAnswers({ ...answers, interests: newInterests })
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Submit answers and navigate to results
      router.push("/dashboard")
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const isNextDisabled = () => {
    const current = currentQuestion
    if (current.type === "radio" && !answers[current.field as keyof typeof answers]) {
      return true
    }
    if (current.type === "checkbox" && answers.interests.length === 0) {
      return true
    }
    return false
  }

  return (
    <Card className="shadow-lg">
      <CardContent className="p-6">
        <div className="mb-6">
          <div className="flex justify-between mb-2">
            {steps.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 mx-1 rounded-full ${index <= currentStep ? "bg-[#3DA9FC]" : "bg-gray-200"}`}
              ></div>
            ))}
          </div>
          <p className="text-sm text-gray-500 text-right">
            Step {currentStep + 1} of {steps.length}
          </p>
        </div>

        <h2 className="text-xl font-semibold mb-6">{currentQuestion.title}</h2>

        {currentQuestion.type === "radio" && (
          <RadioGroup
            value={answers[currentQuestion.field as keyof typeof answers] as string}
            onValueChange={handleRadioChange}
            className="space-y-3"
          >
            {currentQuestion.options.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value} className="cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        )}

        {currentQuestion.type === "slider" && (
          <div className="py-4">
            <Slider
              defaultValue={[answers[currentQuestion.field as keyof typeof answers] as number]}
              max={currentQuestion.max}
              min={currentQuestion.min}
              step={currentQuestion.step}
              onValueChange={handleSliderChange}
              className="mb-6"
            />
            <div className="flex justify-between">
              {currentQuestion.labels.map((label, index) => (
                <span
                  key={index}
                  className={`text-xs ${
                    index + 1 === answers[currentQuestion.field as keyof typeof answers]
                      ? "text-[#3DA9FC] font-semibold"
                      : "text-gray-500"
                  }`}
                >
                  {label}
                </span>
              ))}
            </div>
          </div>
        )}

        {currentQuestion.type === "checkbox" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentQuestion.options.map((option) => (
              <div
                key={option.value}
                className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                  answers.interests.includes(option.value)
                    ? "border-[#9B51E0] bg-[#9B51E0]/10"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                onClick={() => handleCheckboxChange(option.value)}
              >
                <div className="flex items-center">
                  <div
                    className={`w-5 h-5 rounded-full flex items-center justify-center mr-2 ${
                      answers.interests.includes(option.value) ? "bg-[#9B51E0] text-white" : "bg-gray-100"
                    }`}
                  >
                    {answers.interests.includes(option.value) && <CheckCircle2 className="h-4 w-4" />}
                  </div>
                  <span className="font-medium">{option.label}</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-between mt-8">
          <Button variant="outline" onClick={handleBack} disabled={currentStep === 0}>
            Back
          </Button>
          <Button
            onClick={handleNext}
            disabled={isNextDisabled()}
            className="bg-[#FFC83D] hover:bg-[#FFB400] text-black"
          >
            {currentStep === steps.length - 1 ? "Get Recommendations" : "Next"}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

