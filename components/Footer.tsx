/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

function Footer() {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">

            {/* Logo and Firm Name */}
            <div className="flex flex-col items-center space-y-4">
              <img
                src="/unnamed.jpg" // Ensure it's in the /public folder
                className="w-32 h-auto" // Adjust size as needed (128px width)
              />
              <h3 className="text-3xl lg:text-4xl font-serif text-gray-700 tracking-wide">
                FLA advokáti, s. r. o.
              </h3>
            </div>

            {/* Divider */}
            <div className="flex justify-center">
              <div className="w-20 h-px bg-gray-300"></div>
            </div>

            {/* Contact Information */}
            <div className="space-y-2 text-gray-600 text-base">
              <p>Vajnorská 1854/8A</p>
              <p>831 04 Bratislava - m.č. Nové Mesto</p>
              <p>IČO: 56 273 592</p>
              <p>DIČ: 2122254882</p>
              <p>
                Bankové spojenie (Tatrabanka):<br />
                IBAN: SK44 1100 0000 0029 4217 0344
              </p>
              <p>
                <Link
                  href="#"
                  className="text-blue-600 hover:text-blue-700 underline transition-colors duration-200"
                >
                  Attorney Advertising and Other Notices
                </Link>
              </p>
            </div>

          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
