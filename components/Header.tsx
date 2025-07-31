"use client"
import React, { useState } from "react";
import { Search, Menu, X } from "lucide-react";

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: "FIRMA", href: "/firm" },
    { label: "ADVOKÁTI", href: "/careers" },
    { label: "PRAX", href: "/contact" },
    { label: "AKTUALITY A PUBLIKÁCIE", href: "/attorneys" },
    { label: "KARIÉRA", href: "/news" },
    { label: "KONTAKT", href: "/practices" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-800 text-white">
      {/* Inner wrapper is relative so absolute backgrounds anchor correctly */}
      <div className="relative">
        {/* Geometric background pattern */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.4'%3E%3Cpolygon points='20 20 60 20 40 60'/%3E%3Cpolygon points='20 60 60 60 40 20'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fillOpacity='0.3'%3E%3Cpath d='M20 20h20v20H20V20zm-10-10h20v20H10V10z'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundPosition: "20px 20px",
            }}
          />
        </div>

        {/* Top bar */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            {/* Brand */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-light tracking-wider uppercase">
              FLA advokáti, s. r. o.
            </h1>

            {/* Right controls */}
            <div className="flex items-center gap-4">
              {/* Search (always visible) */}
              <button
                type="button"
                className="inline-flex items-center gap-2 text-sm font-medium hover:text-gray-300 transition-colors"
                aria-label="Search"
              >
                <span className="hidden sm:inline">HĽADAŤ</span>
                <Search className="w-5 h-5" />
              </button>

              {/* Mobile menu button (only < lg) */}
              <button
                type="button"
                className="lg:hidden inline-flex items-center justify-center rounded-md p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
                aria-label="Toggle menu"
                aria-expanded={mobileOpen}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Desktop nav (>= lg) */}
          <div className="hidden lg:flex justify-end mt-4">
            <nav className="flex space-x-8 text-sm font-medium">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="hover:text-gray-300 transition-colors tracking-wide"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Mobile menu panel (< lg) */}
        <div
          className={`
            lg:hidden overflow-hidden transition-[max-height,opacity]
            ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
            bg-slate-800/95 backdrop-blur
          `}
        >
          <nav className="px-4 sm:px-6 lg:px-8 pb-4">
            <ul className="flex flex-col divide-y divide-white/10">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="block py-3 text-sm font-medium tracking-wide hover:text-gray-300"
                    onClick={() => setMobileOpen(false)} // close on select
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
