import { Code2, Globe, Lightbulb } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Custom business software solutions, enterprise management systems, workflow automation platforms, and API integrations.',
      gradient: 'from-cyan-500/20 to-cyan-500/5',
      border: 'border-cyan-500/30',
      iconColor: 'text-cyan-400',
      accentColor: 'bg-cyan-500/10',
    },
    {
      icon: Globe,
      title: 'Web & Mobile Applications',
      description: 'Corporate websites, web-based dashboards, Android & iOS apps, inventory systems, and remote monitoring platforms.',
      gradient: 'from-blue-500/20 to-blue-500/5',
      border: 'border-blue-500/30',
      iconColor: 'text-blue-400',
      accentColor: 'bg-blue-500/10',
    },
    {
      icon: Lightbulb,
      title: 'Technology Consulting',
      description: 'Digital transformation strategy, IT systems advisory, technology audits, and implementation planning.',
      gradient: 'from-cyan-500/20 to-blue-500/5',
      border: 'border-cyan-500/30',
      iconColor: 'text-cyan-400',
      accentColor: 'bg-cyan-500/10',
    },
  ]

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-slate-950 -z-10">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500" />
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">What We Offer</span>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-50">Our Core Services</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Comprehensive solutions designed to drive your business forward</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className={`group relative p-8 rounded-2xl border ${service.border} bg-gradient-to-br ${service.gradient} backdrop-blur-sm hover:border-opacity-100 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden`}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/5 to-transparent -z-10" />

                {/* Icon */}
                <div className={`mb-6 inline-flex p-4 rounded-xl ${service.accentColor} border ${service.border}`}>
                  <Icon className={`h-7 w-7 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-slate-50 mb-3">{service.title}</h3>
                <p className="text-slate-300 leading-relaxed">{service.description}</p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-cyan-500 to-blue-500 group-hover:w-full transition-all duration-500" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
