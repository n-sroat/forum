import OnboardingQuiz from "@/components/onboarding-quiz"

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-[#F9FAFB] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Let's Find Your Perfect Hobby</h1>
            <p className="text-lg text-gray-600">
              Answer a few questions to get personalized hobby recommendations that match your personality, interests,
              and student lifestyle.
            </p>
          </div>

          <OnboardingQuiz />
        </div>
      </div>
    </div>
  )
}

