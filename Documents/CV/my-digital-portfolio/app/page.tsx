'use client'

import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="border-b border-beige-200 bg-gradient-to-br from-beige-50 to-beige-100 dark:border-dark-green-800 dark:from-dark-green-800 dark:to-dark-green-900 px-6 py-12 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-3 md:gap-12 items-center">
            {/* Avatar */}
            <div className="flex justify-center md:col-span-1">
              <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-dark-green-500 dark:border-beige-400 shadow-lg">
                <div className="h-full w-full bg-gradient-to-br from-dark-green-500 to-dark-green-700 dark:from-beige-400 dark:to-beige-600 flex items-center justify-center">
                  <span className="text-4xl font-bold text-beige-100 dark:text-dark-green-800">DM</span>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <h1 className="text-4xl md:text-5xl font-bold text-dark-green-900 dark:text-beige-50 mb-3">
                Dwight Richard T. Mongaya
              </h1>
              <p className="text-lg text-dark-green-700 dark:text-beige-300 mb-4">
                Computer Science Student | Web Developer | Technology Enthusiast
              </p>
              <p className="text-base text-dark-green-600 dark:text-beige-400 leading-relaxed mb-6">
                Dedicated Computer Science student at St. Paul University Philippines with a passion for web development and emerging technologies.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 text-sm text-dark-green-700 dark:text-beige-300">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-dark-green-500 dark:text-beige-400" />
                  <span>0915-528-1202</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-dark-green-500 dark:text-beige-400" />
                  <a href="mailto:dwightmongaya@spup.edu.ph" className="hover:text-dark-green-900 dark:hover:text-beige-100">
                    dwightmongaya@spup.edu.ph
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-dark-green-500 dark:text-beige-400" />
                  <span>Centro West, Allacapan, Cagayan, Philippines</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 mt-6">
                <a
                  href="https://github.com/DwightRTM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-dark-green-600 text-beige-50 hover:bg-dark-green-700 dark:bg-beige-500 dark:text-dark-green-900 dark:hover:bg-beige-400 font-medium transition-colors"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/dwightrt-mongaya-9085552b4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-dark-green-600 text-dark-green-600 hover:bg-dark-green-100 dark:border-beige-500 dark:text-beige-400 dark:hover:bg-dark-green-800 font-medium transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="border-b border-beige-200 dark:border-dark-green-800 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-green-900 dark:text-beige-50 mb-8">Technical Skills</h2>

          <div className="grid gap-6 md:grid-cols-2">
            {/* Frontend */}
            <div className="rounded-lg border border-beige-200 bg-beige-50 p-6 dark:border-dark-green-700 dark:bg-dark-green-800">
              <h3 className="font-semibold text-dark-green-800 dark:text-beige-300 mb-3">Frontend Development</h3>
              <ul className="space-y-2 text-sm text-dark-green-700 dark:text-beige-400">
                <li>• HTML5, CSS3, JavaScript (ES6+)</li>
                <li>• React & Next.js</li>
                <li>• Responsive Web Design</li>
                <li>• UI/UX Design Principles</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="rounded-lg border border-beige-200 bg-beige-50 p-6 dark:border-dark-green-700 dark:bg-dark-green-800">
              <h3 className="font-semibold text-dark-green-800 dark:text-beige-300 mb-3">Backend Development</h3>
              <ul className="space-y-2 text-sm text-dark-green-700 dark:text-beige-400">
                <li>• Python, Java & C++</li>
                <li>• Database fundamentals</li>
                <li>• RESTful APIs</li>
                <li>• Server-side programming</li>
              </ul>
            </div>
          </div>

          {/* Programming Languages */}
          <div className="mt-8">
            <h3 className="font-semibold text-dark-green-800 dark:text-beige-300 mb-4">Programming Languages</h3>
            <div className="flex flex-wrap gap-3">
              {['Python', 'C++', 'Java', 'JavaScript', 'HTML/CSS', 'React', 'Next.js', 'PHP'].map((lang) => (
                <span
                  key={lang}
                  className="rounded-full bg-dark-green-100 px-3 py-1 text-sm font-medium text-dark-green-700 dark:bg-dark-green-700 dark:text-beige-300"
                >
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience & Leadership Section */}
      <section className="border-b border-beige-200 dark:border-dark-green-800 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-green-900 dark:text-beige-50 mb-8">Experience & Leadership</h2>

          <div className="space-y-6">
            <div className="rounded-lg border border-beige-200 p-6 dark:border-dark-green-700 dark:bg-dark-green-800/50">
              <h3 className="text-xl font-bold text-dark-green-800 dark:text-beige-300">Current Roles (2025-Present)</h3>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="font-semibold text-dark-green-700 dark:text-beige-400">Vice-President for Internal Affairs</p>
                  <p className="text-sm text-dark-green-600 dark:text-beige-400">Junior Philippine Computer Society</p>
                </div>
                <div>
                  <p className="font-semibold text-dark-green-700 dark:text-beige-400">Councilor</p>
                  <p className="text-sm text-dark-green-600 dark:text-beige-400">Paulian Student Government</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="border-b border-beige-200 dark:border-dark-green-800 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-green-900 dark:text-beige-50 mb-8">Education</h2>

          <div className="space-y-4">
            <div className="rounded-lg border border-beige-200 p-4 dark:border-dark-green-700 dark:bg-dark-green-800/50">
              <h3 className="font-semibold text-dark-green-800 dark:text-beige-300">Bachelor of Science in Computer Science</h3>
              <p className="text-sm text-dark-green-700 dark:text-beige-400">St. Paul University Philippines (Current - 2nd Year)</p>
            </div>
            <div className="rounded-lg border border-beige-200 p-4 dark:border-dark-green-700 dark:bg-dark-green-800/50">
              <h3 className="font-semibold text-dark-green-800 dark:text-beige-300">Senior High School (2022–2024)</h3>
              <p className="text-sm text-dark-green-700 dark:text-beige-400">St. Paul University Philippines - STEM</p>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Projects & Learning Section */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-green-900 dark:text-beige-50 mb-8">Academic Projects & Learning</h2>

          <p className="text-dark-green-700 dark:text-beige-400 mb-6">
            Currently developing skills through coursework and hands-on projects focused on web development, programming, and software engineering principles.
          </p>

          <div className="space-y-3">
            {[
              { title: 'Web Development', description: 'Building responsive websites with HTML5, CSS3, JavaScript, and modern frameworks' },
              { title: 'Programming', description: 'Working with Python, C++, and Java on algorithms, data structures, and application development' },
              { title: 'Portfolio Projects', description: 'Actively creating projects to demonstrate full-stack development capabilities (in development)' },
            ].map((project, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-beige-200 p-4 dark:border-dark-green-700 dark:bg-dark-green-800/50 hover:bg-beige-100 dark:hover:bg-dark-green-700 transition-colors"
              >
                <h3 className="font-semibold text-dark-green-800 dark:text-beige-300">{project.title}</h3>
                <p className="text-sm text-dark-green-600 dark:text-beige-400 mt-1">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Development Section */}
      <section className="border-t border-beige-200 dark:border-dark-green-800 px-6 py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-dark-green-900 dark:text-beige-50 mb-8">Seminars & Conventions</h2>

          <div className="space-y-3">
            {[
              { title: 'Regional ITE Convention', year: '2025' },
              { title: 'Regional ITE Convention', year: '2024' },
              { title: 'MDIS AI Immersion Programme – Malaysia & Singapore', year: '2024' },
              { title: 'Immersion Training: Robotic & Programming', year: '2024' },
              { title: 'CyberSummit Convention', year: '2023' },
            ].map((event, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-beige-200 p-4 dark:border-dark-green-700 dark:bg-dark-green-800/50 hover:bg-beige-100 dark:hover:bg-dark-green-700 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <h3 className="font-semibold text-dark-green-800 dark:text-beige-300">{event.title}</h3>
                  <span className="text-sm font-medium text-dark-green-600 dark:text-beige-400">{event.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
