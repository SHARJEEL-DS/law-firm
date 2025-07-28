import AttorneysAndCareers from "@/components/attorneys-and-careers"
import Hero from "@/components/hero"
import NewsCarousel from "@/components/NewsCarousel"

export default function HomePage() {
  return (
    <div>
      <Hero />
      <NewsCarousel />
      <AttorneysAndCareers/>
    </div>
  )
}
