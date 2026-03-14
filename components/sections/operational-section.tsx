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
      bg: 'from-cyan-500/10 to-cyan-500/5',
      border: 'border-cyan-500/30',
      icon: 'text-cyan-400',
      hover: 'hover:border-cyan-500/50',
    },
    blue: {
      bg: 'from-blue-500/10 to-blue-500/5',
      border: 'border-blue-500/30',
      icon: 'text-blue-400',
      hover: 'hover:border-blue-500/50',
    },
  }

  return (
    <section id="operational" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-slate-950 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500" />
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">How We Operate</span>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-50">Operational Structure</h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">Specialized divisions for efficient service delivery and end-to-end project execution</p>
        </div>

        {/* Divisions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {divisions.map((division, idx) => {
            const Icon = division.icon
            const colors = colorMap[division.color as keyof typeof colorMap]
            return (
              <div
                key={idx}
                className={`group relative p-8 rounded-2xl border ${colors.border} bg-gradient-to-br ${colors.bg} backdrop-blur-sm ${colors.hover} transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10`}
              >
                {/* Icon */}
                <div className={`mb-4 inline-flex p-3 rounded-lg bg-gradient-to-br ${colors.bg} border ${colors.border}`}>
                  <Icon className={`h-6 w-6 ${colors.icon}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-50 mb-2">{division.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{division.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
