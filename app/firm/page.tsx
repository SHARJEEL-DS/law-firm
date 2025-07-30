import Header from "@/components/Header";

export default function FirmPage() {
  return (
    <>
    <Header/>
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-light text-gray-900 mb-8 tracking-wide">THE FIRM</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Wachtell, Lipton, Rosen & Katz is a premier law firm known worldwide for its innovative approach to complex
            legal matters and its unparalleled expertise in mergers and acquisitions, corporate law, restructuring and
            workouts, litigation, and executive compensation and benefits.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Founded in 1965, the firm has built a reputation for providing sophisticated legal advice to major
            corporations, financial institutions, and other entities on their most challenging and significant matters.
          </p>

          <h2 className="text-2xl font-light text-gray-900 mt-12 mb-6">Our Approach</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We believe in maintaining a small, highly selective practice that allows us to provide personalized
            attention to each client while maintaining the highest standards of legal excellence.
          </p>

          <h2 className="text-2xl font-light text-gray-900 mt-12 mb-6">Recognition</h2>
          <p className="text-gray-700 leading-relaxed">
            The firm consistently ranks at the top of league tables for M&A transactions and is regularly recognized by
            leading legal publications for its outstanding work across all practice areas.
          </p>
        </div>
      </div>
    </div>
    </>
  )
}
