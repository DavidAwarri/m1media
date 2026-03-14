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
      bg: 'bg-cyan-500/10',
      border: 'border-cyan-500/30',
      icon: 'text-cyan-400',
      hover: 'hover:border-cyan-500/50',
    },
    blue: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/30',
      icon: 'text-blue-400',
      hover: 'hover:border-blue-500/50',
    },
  }

  return (
    <section id="values" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-slate-950 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500" />
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Guiding Principles</span>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-50">Our Core Values</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">The principles that guide every decision and interaction</p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, idx) => {
            const Icon = value.icon
            const colors = colorMap[value.color as keyof typeof colorMap]
            return (
              <div
                key={idx}
                className={`group relative p-7 rounded-xl border ${colors.border} ${colors.bg} backdrop-blur-sm ${colors.hover} transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10`}
              >
                {/* Icon */}
                <div className={`mb-4 inline-flex p-3 rounded-lg ${colors.bg} border ${colors.border}`}>
                  <Icon className={`h-6 w-6 ${colors.icon}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-slate-50 mb-2">{value.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
