import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold bg-gradient-to-r from-[#FFC83D] via-[#3DA9FC] to-[#9B51E0] text-transparent bg-clip-text">
                HobbyHub
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600">
              Connecting university students with hobbies, communities, and resources.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Platform</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/explore" className="text-sm text-gray-600 hover:text-[#3DA9FC]">
                  Explore Hobbies
                </Link>
              </li>
              <li>
                <Link href="/communities" className="text-sm text-gray-600 hover:text-[#3DA9FC]">
                  Communities
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="text-sm text-gray-600 hover:text-[#3DA9FC]">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-sm text-gray-600 hover:text-[#3DA9FC]">
                  Events
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-600 hover:text-[#3DA9FC]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 hover:text-[#3DA9FC]">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm text-gray-600 hover:text-[#3DA9FC]">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 hover:text-[#3DA9FC]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 hover:text-[#3DA9FC]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 hover:text-[#3DA9FC]">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-sm text-gray-600 hover:text-[#3DA9FC]">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} HobbyHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

