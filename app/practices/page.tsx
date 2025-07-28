export default function PracticesPage() {
  const practices = [
    {
      title: "Mergers & Acquisitions",
      description: "Leading advisor on the most significant and complex M&A transactions globally.",
    },
    {
      title: "Corporate Law",
      description: "Comprehensive corporate legal services including governance, securities, and compliance.",
    },
    {
      title: "Litigation",
      description: "High-stakes commercial litigation and dispute resolution.",
    },
    {
      title: "Restructuring & Workouts",
      description: "Complex financial restructuring and bankruptcy matters.",
    },
    {
      title: "Executive Compensation",
      description: "Sophisticated executive compensation and employee benefits planning.",
    },
    {
      title: "Tax",
      description: "Complex tax planning and structuring for corporate transactions.",
    },
  ]

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-light text-gray-900 mb-12 tracking-wide">PRACTICES</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {practices.map((practice, index) => (
            <div key={index} className="border-l-2 border-gray-200 pl-6">
              <h2 className="text-2xl font-light text-gray-900 mb-4">{practice.title}</h2>
              <p className="text-gray-700 leading-relaxed">{practice.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
