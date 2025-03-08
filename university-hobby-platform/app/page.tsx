import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import FeatureSection from "@/components/feature-section"
import TestimonialSection from "@/components/testimonial-section"
import HowItWorksSection from "@/components/how-it-works-section"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <FeatureSection />
      <HowItWorksSection />
      <TestimonialSection />

      <section className="bg-[#3DA9FC] py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to discover your next passion?</h2>
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of university students who have found new hobbies, friends, and opportunities through
            HobbyHub.
          </p>
          <Link href="/onboarding">
            <Button size="lg" className="bg-[#FFC83D] hover:bg-[#FFB400] text-black font-semibold">
              Get Started — It's Free
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

