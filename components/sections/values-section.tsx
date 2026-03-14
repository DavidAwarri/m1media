import { Lightbulb, Shield, Zap, Trophy, Handshake, TrendingUp } from 'lucide-react'

export function ValuesSection() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Driving forward with creative solutions and modern approaches',
      color: 'cyan',
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Building systems you can depend on, day after day',
      color: 'blue',
    },
    {
      icon: Zap,
      title: 'Security',
      description: 'Protecting your data and infrastructure with industry standards',
      color: 'cyan',
    },
    {
      icon: Trophy,
      title: 'Excellence',
      description: 'Delivering quality in every aspect of our work',
      color: 'blue',
    },
    {
      icon: Handshake,
      title: 'Client Partnership',
      description: 'Working together as true partners in your success',
      color: 'cyan',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      description: 'Always learning, evolving, and enhancing our solutions',
      color: 'blue',
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
    <section id="values" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Guiding Principles</span>
            <div className="h-1 w-12 bg-blue-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">Our Core Values</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">The principles that guide every decision and interaction</p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, idx) => {
            const Icon = value.icon
            const colors = colorMap[value.color as keyof typeof colorMap]
            return (
              <div
                key={idx}
                className={`group relative p-7 rounded-xl border-2 ${colors.border} bg-white ${colors.hover} transition-all duration-300 hover:shadow-md`}
              >
                {/* Icon */}
                <div className={`mb-4 inline-flex p-3 rounded-lg ${colors.bg} border ${colors.border}`}>
                  <Icon className={`h-6 w-6 ${colors.icon}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-black mb-2">{value.title}</h3>
                <p className="text-gray-700 text-sm leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
