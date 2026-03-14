import { Search, Pencil, Zap, Send, Settings } from 'lucide-react'

export function ApproachSection() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Discover',
      description: 'Understanding client needs and operational challenges',
    },
    {
      icon: Pencil,
      number: '02',
      title: 'Design',
      description: 'Developing scalable technology architecture',
    },
    {
      icon: Zap,
      number: '03',
      title: 'Build',
      description: 'Building secure and efficient systems',
    },
    {
      icon: Send,
      number: '04',
      title: 'Deploy',
      description: 'Seamless implementation and integration',
    },
    {
      icon: Settings,
      number: '05',
      title: 'Support',
      description: 'Continuous optimization and maintenance',
    },
  ]

  return (
    <section id="approach" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-slate-950 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500" />
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Our Process</span>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-50">Our Approach</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">A proven methodology that ensures successful outcomes</p>
        </div>

        {/* Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="relative group">
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-2 w-4 h-1 bg-gradient-to-r from-cyan-500 to-transparent" />
                )}

                <div className="p-6 h-full rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20">
                  {/* Step number */}
                  <div className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-3">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 inline-flex p-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30">
                    <Icon className="h-5 w-5 text-cyan-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-bold text-slate-50 mb-1">{step.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
