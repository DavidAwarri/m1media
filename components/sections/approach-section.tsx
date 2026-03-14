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
    <section id="approach" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Our Process</span>
            <div className="h-1 w-12 bg-blue-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">Our Approach</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">A proven methodology that ensures successful outcomes</p>
        </div>

        {/* Steps Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="relative group">
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-2 w-4 h-1 bg-blue-600" />
                )}

                <div className="p-6 h-full rounded-2xl border-2 border-blue-200 bg-white hover:border-blue-400 hover:shadow-md transition-all duration-300">
                  {/* Step number */}
                  <div className="text-sm font-bold text-blue-600 mb-3">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-4 inline-flex p-2 rounded-lg bg-blue-50 border border-blue-200">
                    <Icon className="h-5 w-5 text-blue-600" />
                  </div>

                  {/* Content */}
                  <h3 className="text-base font-bold text-black mb-1">{step.title}</h3>
                  <p className="text-md text-gray-700 leading-relaxed">{step.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
