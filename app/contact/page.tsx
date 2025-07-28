import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-light text-gray-900 mb-12 tracking-wide">CONTACT</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-8">Get in Touch</h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-700">
                    51 West 52nd Street
                    <br />
                    New York, NY 10019
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-700">(212) 403-1000</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-gray-400 mt-1" />
                <div>
                  <h3 className="font-medium text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-700">info@wlrk.com</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-light text-gray-900 mb-8">Office Hours</h2>
            <div className="space-y-2 text-gray-700">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday - Sunday: Closed</p>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-light text-gray-900 mb-4">Directions</h2>
              <p className="text-gray-700 leading-relaxed">
                Located in Midtown Manhattan, our office is easily accessible by public transportation and is within
                walking distance of major business centers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
