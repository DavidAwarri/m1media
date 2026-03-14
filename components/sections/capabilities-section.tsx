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
    <section id="capabilities" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-12 bg-blue-600" />
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Technical Stack</span>
            <div className="h-1 w-12 bg-blue-600" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-black">Capabilities & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Modern, industry-standard tools and frameworks</p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(capabilities).map(([category, items]) => (
            <div
              key={category}
              className="group relative p-8 rounded-2xl border-2 border-blue-200 bg-blue-50 hover:border-blue-400 hover:shadow-md transition-all duration-300"
            >
              {/* Category title */}
              <h3 className="text-lg font-bold text-black mb-6 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-600" />
                {category}
              </h3>

              {/* Items list */}
              <ul className="space-y-3">
                {items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 group/item">
                    <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
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
