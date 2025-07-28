"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    title: "Kirman and Tetelbaum discuss mentorship on <em>Drinks With the Deal</em> podcast",
    description:
      "Igor Kirman and Elina Tetelbaum, partners in Wachtell Lipton's Corporate department, appeared on the July 17th...",
    href: "#",
  },
  {
    title: 'Eric Feinstein named "Rising Star" by <em>New York Law Journal</em>',
    description:
      'Eric Feinstein, a Partner in Wachtell Lipton\'s Corporate Department, has been named a "Rising Star" for...',
    href: "#",
  },
  {
    title: "Ilene Knable Gotts Honored as a 2025 Power Player in Merger Control",
    description:
      "Ilene Knable Gotts, a partner in Wachtell Lipton's Antitrust department, has been recognized by Financier Worldwide as...",
    href: "#",
  },
  {
    title: "Benjamin Arfa Honored as a Winner of <em>The M&A Advisor's</em> 16th Annual Emerging Leaders Award",
    description:
      "Benjamin Arfa, a partner in Wachtell Lipton's Restructuring and Finance practice, has been honored with The...",
    href: "#",
  },
  {
    title: "Kirman and Tetelbaum discuss mentorship on <em>Drinks With the Deal</em> podcast",
    description:
      "Igor Kirman and Elina Tetelbaum, partners in Wachtell Lipton's Corporate department, appeared on the July 17th...",
    href: "#",
  },
  {
    title: 'Eric Feinstein named "Rising Star" by <em>New York Law Journal</em>',
    description:
      'Eric Feinstein, a Partner in Wachtell Lipton\'s Corporate Department, has been named a "Rising Star" for...',
    href: "#",
  },
  {
    title: "Ilene Knable Gotts Honored as a 2025 Power Player in Merger Control",
    description:
      "Ilene Knable Gotts, a partner in Wachtell Lipton's Antitrust department, has been recognized by Financier Worldwide as...",
    href: "#",
  },
  {
    title: "Benjamin Arfa Honored as a Winner of <em>The M&A Advisor's</em> 16th Annual Emerging Leaders Award",
    description:
      "Benjamin Arfa, a partner in Wachtell Lipton's Restructuring and Finance practice, has been honored with The...",
    href: "#",
  },
  {
    title: "Kirman and Tetelbaum discuss mentorship on <em>Drinks With the Deal</em> podcast",
    description:
      "Igor Kirman and Elina Tetelbaum, partners in Wachtell Lipton's Corporate department, appeared on the July 17th...",
    href: "#",
  },
  {
    title: 'Eric Feinstein named "Rising Star" by <em>New York Law Journal</em>',
    description:
      'Eric Feinstein, a Partner in Wachtell Lipton\'s Corporate Department, has been named a "Rising Star" for...',
    href: "#",
  },
  {
    title: "Ilene Knable Gotts Honored as a 2025 Power Player in Merger Control",
    description:
      "Ilene Knable Gotts, a partner in Wachtell Lipton's Antitrust department, has been recognized by Financier Worldwide as...",
    href: "#",
  },
  {
    title: "Benjamin Arfa Honored as a Winner of <em>The M&A Advisor's</em> 16th Annual Emerging Leaders Award",
    description:
      "Benjamin Arfa, a partner in Wachtell Lipton's Restructuring and Finance practice, has been honored with The...",
    href: "#",
  },
]

export default function NewsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" })
    }
  }

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-sm font-medium text-gray-600 tracking-wider uppercase">News & Publications</h2>
          <Link
            href="#"
            className="bg-slate-600 hover:bg-slate-700 text-white text-sm font-medium py-2.5 px-6 transition-colors duration-200 flex items-center gap-2"
          >
            View More
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border border-gray-200 p-3 shadow-sm transition-colors duration-200 hidden md:flex items-center justify-center"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-5 w-5 text-gray-600" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 border border-gray-200 p-3 shadow-sm transition-colors duration-200 hidden md:flex items-center justify-center"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-5 w-5 text-gray-600" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide px-12 md:px-16"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {newsItems.map((item, idx) => (
              <div
                key={idx}
                className="w-[200px] h-[500px] bg-white p-8 shadow-sm border border-gray-100 flex-shrink-0 flex flex-col justify-between"
              >
                <div className="flex-1">
                  <h3
                    className="text-xl font-serif text-gray-900 leading-tight mb-6 min-h-[3.5rem]"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-8">
                  <Link
                    href={item.href}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium uppercase tracking-wide inline-flex items-center gap-1 transition-colors duration-200"
                  >
                    Read More
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
