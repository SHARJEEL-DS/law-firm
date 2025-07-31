// import Header from "@/components/Header"
import { Phone, Search } from "lucide-react"
import Image from "next/image"
import Header from "@/components/navigation";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header with geometric background and navigation */}
<Header/>
      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Map */}
          <div className="space-y-4">
            <div className="bg-gray-100 rounded-lg overflow-hidden shadow-sm">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Mapa k našej kancelárii"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right - Contact Information */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-light text-gray-800 mb-8 tracking-wide">Contact Us</h1>

              <div className="space-y-1 text-gray-700 leading-relaxed">
                <p className="text-lg font-medium text-gray-800 mb-4">
                  To contact the appropriate people or departments, please use the contact information below:
                </p>

                <div className="space-y-3">
                  <p className="text-lg font-semibold text-gray-800">FLA advokáti, s. r. o.</p>
                  <p>Vajnorská 1854/8A</p>
                  <p>831 04 Bratislava - m.č. Nové Mesto</p>
                  <p>IČO: 56 273 592</p>
                  <p>DIČ: 2122254882</p>
                </div>

                <div className="pt-4 space-y-2">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gray-600" />
                    <span>T +421 2 XXX XXX XXX</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gray-600" />
                    <span>F +421 2 XXX XXX XXX</span>
                  </div>
                </div>

                <div className="pt-6">
                  <p className="text-sm text-gray-600">Bankové spojenie (Tatrabanka):</p>
                  <p className="font-mono text-sm">IBAN: SK44 1100 0000 0029 4217 0344</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <p className="text-gray-600">
                For general inquiries, please contact:{" "}
                <a href="mailto:info@fla-advokati.sk" className="text-blue-600 hover:underline">
                  info@fla-advokati.sk
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  )
}
