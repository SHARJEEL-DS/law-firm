"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const newsItems = [
  {
    title: 'Mark Stagliano named “Rising Star” by <em>Law360</em>',
    description:
      "Mark Stagliano, a partner in Wachtell Lipton’s Corporate Department, has been named a 2025 Mergers and...",
    href: "#",
  },
  {
    title: "Kirman and Tetelbaum discuss mentorship on <em>Drinks With the Deal</em> podcast",
    description:
      "Igor Kirman and Elina Tetelbaum, partners in Wachtell Lipton's Corporate department, appeared on the July 17th...",
    href: "#",
  },
  {
    title: 'Eric Feinstein named “Rising Star” by <em>New York Law Journal</em>',
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
    title: 'Mark Stagliano named “Rising Star” by <em>Law360</em>',
    description:
      "Mark Stagliano, a partner in Wachtell Lipton’s Corporate Department, has been named a 2025 Mergers and...",
    href: "#",
  },
  {
    title: "Kirman and Tetelbaum discuss mentorship on <em>Drinks With the Deal</em> podcast",
    description:
      "Igor Kirman and Elina Tetelbaum, partners in Wachtell Lipton's Corporate department, appeared on the July 17th...",
    href: "#",
  },
  {
    title: 'Eric Feinstein named “Rising Star” by <em>New York Law Journal</em>',
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
];

export default function NewsCarousels() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#f5f6f7]  ">
      <div className="">
        {/* Header */}
   {/* Header */}
    <div className="flex justify-between items-center bg-[#d5d5d5] h-[60px]">
      <div className="flex items-center px-6">
        <h2 className="text-xs font-semibold text-gray-700 tracking-widest uppercase">
          Recent Representations
        </h2>
      </div>
      <Link
        href="#"
        className="bg-[#5b76a5] hover:bg-[#405f9c] text-white text-[13px] font-semibold uppercase h-full px-6 flex items-center"
      >
        View More
        <ChevronRight className="ml-1 w-4 h-4" />
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
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide px-8 md:px-12"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {newsItems.map((item, idx) => (
              <div
                key={idx}
                className={`w-[260px] h-[400px] p-8 shadow-sm border border-gray-100 flex-shrink-0 flex flex-col justify-between ${
                  idx % 2 === 0 ? "bg-white" : "bg-[#f5f6f7]"
                }`}
              >
                <div className="flex-1">
                  <h3
                    className="text-[18px] font-serif text-gray-900 leading-snug mb-6 min-h-[3.5rem]"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  />
                  <p className="text-[15px] text-gray-700 leading-relaxed">{item.description}</p>
                </div>
                <div className="mt-8">
                  <Link
                    href={item.href}
                    className="text-[#1d4ed8] hover:text-blue-700 text-sm font-medium uppercase tracking-wide inline-flex items-center gap-1 transition-colors duration-200"
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
  );
}
