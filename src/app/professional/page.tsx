import Link from 'next/link'

export default function Professional() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              Professional Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Showcasing my skills, experience, and projects
            </p>
          </div>

          <div className="grid gap-8">
            {/* About Section */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">About Me</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Welcome to my professional portfolio! This section will showcase my resume, 
                key projects, and professional experience. I&apos;m passionate about technology and 
                building solutions that make a difference.
              </p>
            </section>

            {/* Quick Navigation */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Resume</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  My experience, education, and skills
                </p>
                <button className="text-blue-600 dark:text-blue-400 font-medium">
                  View Resume →
                </button>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Projects</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Key projects and technical work
                </p>
                <button className="text-blue-600 dark:text-blue-400 font-medium">
                  View Projects →
                </button>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Contact</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Get in touch for opportunities
                </p>
                <button className="text-blue-600 dark:text-blue-400 font-medium">
                  Contact Me →
                </button>
              </div>
            </div>

            {/* Coming Soon Notice */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                🚧 Under Construction
              </h3>
              <p className="text-yellow-700 dark:text-yellow-300">
                This section is being built according to the implementation plan. 
                Individual pages for resume, projects, and contact will be added in Phase 2.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
