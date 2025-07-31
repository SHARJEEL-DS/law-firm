import Header from "@/components/Header"

export default function NewsPage() {
  const news = [
    {
      date: "January 15, 2024",
      title: "Wachtell Lipton Advises on Major Technology Merger",
      summary: "The firm served as legal advisor on a significant technology sector transaction.",
    },
    {
      date: "December 20, 2023",
      title: "New Publication: Corporate Governance Update",
      summary: "Latest insights on corporate governance trends and regulatory developments.",
    },
    {
      date: "November 30, 2023",
      title: "Recognition in Legal 500 Rankings",
      summary: "The firm receives top-tier rankings across multiple practice areas.",
    },
  ]

  return (
    <>
      <Header />  
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-light text-gray-900 mb-12 tracking-wide">NEWS AND PUBLICATIONS</h1>

        <div className="space-y-12">
          {news.map((item, index) => (
            <article key={index} className="border-b border-gray-200 pb-8">
              <div className="text-sm text-gray-500 mb-2">{item.date}</div>
              <h2 className="text-2xl font-light text-gray-900 mb-4">{item.title}</h2>
              <p className="text-gray-700 leading-relaxed">{item.summary}</p>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            For additional publications and news updates, please visit our publications archive.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
