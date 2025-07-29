/* eslint-disable @next/next/no-img-element */
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header with background and firm name */}
      <div
        className="bg-cover bg-center text-white py-20 px-4"
        style={{ backgroundImage: "url('/contact-header.jpg')" }} // Place image in /public
      >
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide uppercase">
            FLA advokáti, s. r. o.
          </h1>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Left - Map Image */}
        <div>
          <img
            src="/befaa0ba-e101-4b5f-8477-818a89e34ae1.png" // Your uploaded map image (move to /public)
            alt="Map to office"
            className="rounded-md w-full shadow"
          />
        </div>

        {/* Right - Contact Info */}
        <div>
          <h2 className="text-3xl font-light text-gray-900 mb-6">Contact Us</h2>
          <div className="space-y-4 text-gray-800 text-base">
            <p className="font-semibold">FLA advokáti, s. r. o.</p>
            <p>Vajnorská 1854/8A</p>
            <p>831 04 Bratislava - m.č. Nové Mesto</p>
            <p>IČO: 56 273 592</p>
            <p>DIČ: 2122254882</p>
            <p>
              Bankové spojenie (Tatrabanka):<br />
              IBAN: SK44 1100 0000 0029 4217 0344
            </p>
          </div>

          <div className="mt-8">
            <img
              src="/contact-badge.png" // Optional contact visual badge (if you want to reuse logo or contact UI image)
              alt="Contact visual"
              className="w-40"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
