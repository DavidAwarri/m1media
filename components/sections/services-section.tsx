import { Code2, Globe, Lightbulb } from 'lucide-react'

export function ServicesSection() {
  const services = [
    {
      icon: Code2,
      title: 'Software Development',
      description: 'Custom business software solutions, enterprise management systems, workflow automation platforms, and API integrations.',
    },
    {
      icon: Globe,
      title: 'Web & Mobile Applications',
      description: 'Corporate websites, web-based dashboards, Android & iOS apps, inventory systems, and remote monitoring platforms.',
    },
    {
      icon: Lightbulb,
      title: 'Technology Consulting',
      description: 'Digital transformation strategy, IT systems advisory, technology audits, and implementation planning.',
    },
  ]

  return (
    <section id="services" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">What We Offer</span>
            <div className="h-1 w-12 bg-blue-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">Our Core Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive solutions designed to drive your business forward</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl border-2 border-gray-200 bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex p-4 rounded-xl bg-blue-50 border border-blue-200">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                <p className="text-gray-700 leading-relaxed">{service.description}</p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-blue-600 group-hover:w-full transition-all duration-500" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
