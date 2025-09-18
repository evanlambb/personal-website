import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 dark:text-white mb-6">
            Welcome to My
            <span className="block text-blue-600 dark:text-blue-400">
              Personal Space
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
            Explore my professional work and personal playground where ideas come to life.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Professional Section */}
            <Link 
              href="/professional" 
              className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">💼</div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Professional
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Resume, projects, and professional experience that showcases my skills and expertise.
              </p>
              <div className="text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300">
                View Portfolio →
              </div>
            </Link>

            {/* Playground Section */}
            <Link 
              href="/playground" 
              className="group p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-4xl mb-4">🎮</div>
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                Playground
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Notes, experiments, reflections, and cool things I&apos;ve built along the way.
              </p>
              <div className="text-blue-600 dark:text-blue-400 font-semibold group-hover:text-blue-700 dark:group-hover:text-blue-300">
                Explore Ideas →
              </div>
            </Link>
          </div>

          <div className="mt-16 text-gray-500 dark:text-gray-400">
            <p>Built with Next.js • Powered by curiosity</p>
          </div>
        </div>
      </div>
    </main>
  )
}
