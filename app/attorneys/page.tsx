export default function AttorneysPage() {
  const attorneys = [
    {
      name: "Martin Lipton",
      title: "Founding Partner",
      practice: "Mergers & Acquisitions, Corporate Law",
    },
    {
      name: "Herbert M. Wachtell",
      title: "Founding Partner",
      practice: "Corporate Law, Securities",
    },
    {
      name: "Leonard Rosen",
      title: "Founding Partner",
      practice: "Litigation, Corporate Law",
    },
    {
      name: "George A. Katz",
      title: "Founding Partner",
      practice: "Tax Law, Corporate Transactions",
    },
  ]

  return (
    <div className="pt-16 min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-light text-gray-900 mb-12 tracking-wide">ATTORNEYS</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => (
            <div key={index} className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-medium text-gray-900 mb-2">{attorney.name}</h3>
              <p className="text-gray-600 mb-2">{attorney.title}</p>
              <p className="text-gray-500 text-sm">{attorney.practice}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <p className="text-gray-600 text-center">
            For a complete directory of our attorneys, please contact our office.
          </p>
        </div>
      </div>
    </div>
  )
}
