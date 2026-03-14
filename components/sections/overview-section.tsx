import { ArrowRight } from 'lucide-react'

export function OverviewSection() {
  return (
    <section id="overview" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient and patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-cyan-950/20 to-slate-950">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Accent line */}
            <div className="flex items-center gap-3">
              <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500" />
              <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Welcome to M1 Media</span>
            </div>

            {/* Main headline */}
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight space-y-2">
                <span className="block">Trusted</span>
                <span className="block">
                  <span className="text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text">
                    Technology
                  </span>
                </span>
                <span className="block">Solutions</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              M1 Media delivers cutting-edge technology solutions that transform how organizations operate. With expertise across digital systems, software development, and strategic consulting, we empower businesses to innovate and succeed in the digital age.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#services">
                <button className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-slate-950 font-semibold rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/30 flex items-center gap-2">
                  Explore Services
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a href="#contact">
                <button className="px-8 py-3 border-2 border-cyan-500/50 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 font-semibold rounded-full transition-all duration-300 hover:bg-cyan-500/5">
                  Get in Touch
                </button>
              </a>
            </div>
          </div>

          {/* Right visual element */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-full aspect-square">
              {/* Animated gradient orb */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl animate-pulse" />
              <div className="absolute inset-12 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-3xl border border-cyan-500/30" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    15+
                  </div>
                  <p className="text-slate-400">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-8 mt-20 pt-20 border-t border-cyan-500/10">
          {[
            { num: '50+', label: 'Global Clients' },
            { num: '200+', label: 'Projects Delivered' },
            { num: '150+', label: 'Tech Professionals' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.num}</div>
              <div className="text-slate-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
