import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function AttorneysAndCareers() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Attorneys Card */}
          <div className="bg-white p-8 lg:p-12 shadow-sm border border-gray-100 rounded-sm">
            <h2 className="text-4xl lg:text-5xl font-serif text-gray-800 mb-8">Attorneys</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Our distinctive structure defines our approach. We maintain a ratio of associates to partners
              significantly below that of other firms. We focus on matters that require the attention, extensive
              experience and sophistication of our partners.
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm uppercase tracking-wider transition-colors duration-200"
            >
              Find an Attorney
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          {/* Careers Card */}
          <div className="bg-white p-8 lg:p-12 shadow-sm border border-gray-100 rounded-sm">
            <h2 className="text-4xl lg:text-5xl font-serif text-gray-800 mb-8">Careers</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-8">
              Wachtell Lipton is dedicated to providing advice and expertise at the highest levels and achieving
              extraordinary results for our clients. We seek individuals who are talented, motivated and committed in
              order to maintain our record of excellence.
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm uppercase tracking-wider transition-colors duration-200"
            >
              Learn More
              <ChevronRight className="ml-1 w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            {/* Firm Name */}
            <h3 className="text-2xl lg:text-3xl font-serif text-gray-600 tracking-wider">
              WACHTELL, LIPTON, ROSEN & KATZ
            </h3>

            {/* Divider */}
            <div className="flex justify-center">
              <div className="w-16 h-px bg-gray-300"></div>
            </div>

            {/* Contact Information */}
            <div className="space-y-2 text-gray-600">
              <p className="text-sm">51 West 52nd Street, New York, NY 10019</p>
              <p className="text-sm">
                t. 212.403.1000 or 800.848.0301 /{" "}
                <Link href="#" className="text-blue-600 hover:text-blue-700 underline transition-colors duration-200">
                  Attorney Advertising and Other Notices
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
