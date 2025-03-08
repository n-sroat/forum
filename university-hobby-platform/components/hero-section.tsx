import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="relative bg-[#F9FAFB] overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Discover Your
              <span className="bg-gradient-to-r from-[#FFC83D] via-[#3DA9FC] to-[#9B51E0] text-transparent bg-clip-text">
                {" "}
                Perfect Hobby
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
              Connect with fellow university students, find your passion, and buy/sell hobby gear all in one place.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link href="/onboarding">
                <Button size="lg" className="bg-[#FFC83D] hover:bg-[#FFB400] text-black font-semibold">
                  Find Your Hobby
                </Button>
              </Link>
              <Link href="/explore">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#3DA9FC] text-[#3DA9FC] hover:bg-[#3DA9FC] hover:text-white"
                >
                  Explore Communities
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Students enjoying various hobbies"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#9B51E0]/30 to-transparent mix-blend-multiply"></div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-[#FFC83D] rounded-full p-4 shadow-lg hidden md:block">
              <span className="text-black font-bold">500+ Hobbies</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#3DA9FC] rounded-full p-4 shadow-lg hidden md:block">
              <span className="text-white font-bold">10k+ Students</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#FFC83D]/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-[#9B51E0]/10 rounded-full filter blur-3xl"></div>
    </section>
  )
}

