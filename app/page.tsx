import AttorneysAndCareers from "@/components/attorneys-and-careers"
import Footer from "@/components/Footer"
import Hero from "@/components/hero"
import Navigation from "@/components/navigation"
import NewsCarousel from "@/components/NewsCarousel"
import NewsCarousels from "@/components/NewsCarousels"

export default function HomePage() {
  return (
    <div>
       <Navigation />
       
      <Hero />
      <NewsCarousel />
      <NewsCarousels/>
      <AttorneysAndCareers/>
     
    </div>
  )
}
