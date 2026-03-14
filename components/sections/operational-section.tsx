import { Code2, Cloud, Database, Lock, Lightbulb } from 'lucide-react'

export function OperationalSection() {
  const divisions = [
    {
      icon: Code2,
      title: 'Digital Systems Division',
      description: 'Software & application development',
      color: 'cyan',
    },
    {
      icon: Cloud,
      title: 'Web & Cloud Division',
      description: 'Infrastructure & deployment',
      color: 'blue',
    },
    {
      icon: Database,
      title: 'Data & Intelligence Division',
      description: 'Database and analytics systems',
      color: 'cyan',
    },
    {
      icon: Lock,
      title: 'Security & Surveillance Division',
      description: 'Integrated security solutions',
      color: 'blue',
    },
    {
      icon: Lightbulb,
      title: 'Technology Consulting Division',
      description: 'Advisory & transformation services',
      color: 'cyan',
    },
  ]

  const colorMap = {
    cyan: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: 'text-blue-600',
      hover: 'hover:border-blue-400',
    },
    blue: {
      bg: 'bg-blue-100',
      border: 'border-blue-300',
      icon: 'text-blue-700',
      hover: 'hover:border-blue-500',
    },
  }

  return (
    <section id="operational" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">How We Operate</span>
            <div className="h-1 w-12 bg-blue-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">Operational Structure</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Specialized divisions for efficient service delivery and end-to-end project execution</p>
        </div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((division, idx) => {
            const Icon = division.icon
            const colors = colorMap[division.color as keyof typeof colorMap]
            return (
              <div
                key={idx}
                className={`group relative p-8 rounded-2xl border-2 ${colors.border} bg-white ${colors.hover} transition-all duration-300 hover:shadow-md`}
              >
                {/* Icon */}
                <div className={`mb-4 inline-flex p-3 rounded-lg ${colors.bg} border ${colors.border}`}>
                  <Icon className={`h-6 w-6 ${colors.icon}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-black mb-2">{division.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{division.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
