import { ArrowRight } from 'lucide-react'

export function OverviewSection() {
  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Accent line */}
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-blue-600" />
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Welcome to M1 Media</span>
            </div>

            {/* Main headline */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-black">
                <span className="block">Trusted</span>
                <span className="block">Technology</span>
                <span className="block">Solutions</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed max-w-xl">
              M1 Media delivers cutting-edge technology solutions that transform how organizations operate. With expertise across digital systems, software development, and strategic consulting, we empower businesses to innovate and succeed in the digital age.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#services">
                <button className="group px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition-all duration-300 flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a href="#contact">
                <button className="px-8 py-3 border-2 border-blue-600 hover:border-blue-700 text-blue-600 hover:text-blue-700 font-semibold rounded-full transition-all duration-300 hover:bg-blue-50">
                  Get in Touch
                </button>
              </a>
            </div>
          </div>

          {/* Right visual element */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square">
              <div className="absolute inset-0 bg-blue-50 rounded-3xl" />
              <div className="absolute inset-12 border-2 border-blue-200 rounded-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold text-blue-600">15+</div>
                  <p className="text-gray-600">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-20 border-t border-gray-200">
          {[
            { num: '50+', label: 'Global Clients' },
            { num: '200+', label: 'Projects Delivered' },
            { num: '150+', label: 'Tech Professionals' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.num}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
