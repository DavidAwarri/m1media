import { CheckCircle } from 'lucide-react'

export function CapabilitiesSection() {
  const capabilities = {
    'Development Technologies': [
      'Python, Flask, FastAPI',
      'Node.js, Express.js',
      'React, TypeScript, JavaScript',
      'Next.js',
      'Tailwind CSS',
      'WordPress',
      'Prisma ORM',
      'REST API development',
      'Payment gateway integrations (Paystack)',
    ],
    'Mobile Development': [
      'Flutter / Dart',
      'Cross-platform mobile applications',
      'React Native (JavaScript/TypeScript)',
      'Java/Kotlin (Android)',
      'Swift (iOS)',
    ],
    'Database Systems': [
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Relational and NoSQL architecture',
    ],
    'State Management': [
      'Zustand',
      'Redux',
      'Riverpod (Flutter)',
    ],
    'Cloud & Infrastructure': [
      'Cloud deployment and server management',
      'Media storage and CDN integration (Cloudinary)',
      'Development tools (ngrok)',
    ],
    'Security Technologies': [
      'JWT authentication',
      'Role-based access control',
      'Secure password hashing (bcrypt)',
      'Secure API design',
    ],
  }

  return (
    <section id="capabilities" className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 to-slate-950 -z-10">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-gradient-to-r from-cyan-500 to-blue-500" />
            <span className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">Technical Stack</span>
            <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-cyan-500" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-50">Capabilities & Technologies</h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">Modern, industry-standard tools and frameworks</p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(capabilities).map(([category, items]) => (
            <div
              key={category}
              className="group relative p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 backdrop-blur-sm hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300"
            >
              {/* Category title */}
              <h3 className="text-lg font-bold text-slate-50 mb-6 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400" />
                {category}
              </h3>

              {/* Items list */}
              <ul className="space-y-3">
                {items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    <CheckCircle className="h-5 w-5 text-cyan-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-sm text-slate-300 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
