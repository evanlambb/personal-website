import Link from 'next/link'

export default function Playground() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 dark:from-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Link 
              href="/" 
              className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 mb-8"
            >
              ← Back to Home
            </Link>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 dark:text-white mb-6">
              Personal Playground
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Notes, experiments, and creative explorations
            </p>
          </div>

          <div className="grid gap-8">
            {/* Welcome Message */}
            <section className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Welcome to My Playground</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                This is where I share my thoughts, learning notes, daily reflections, and cool experiments. 
                Think of it as my digital garden where ideas grow and evolve. Here you&apos;ll find my 
                Obsidian notes rendered as web pages, interactive experiments, and personal reflections.
              </p>
            </section>

            {/* Category Navigation */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-3">📚</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Class Notes</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Notes from courses and learning
                </p>
                <button className="text-purple-600 dark:text-purple-400 font-medium">
                  Browse Notes →
                </button>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-3">💭</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Reflections</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Daily thoughts and insights
                </p>
                <button className="text-purple-600 dark:text-purple-400 font-medium">
                  Read Reflections →
                </button>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-3">💡</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Ideas</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Random thoughts and concepts
                </p>
                <button className="text-purple-600 dark:text-purple-400 font-medium">
                  Explore Ideas →
                </button>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <div className="text-3xl mb-3">🧪</div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Experiments</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                  Cool things I&apos;ve built
                </p>
                <button className="text-purple-600 dark:text-purple-400 font-medium">
                  Try Experiments →
                </button>
              </div>
            </div>

            {/* Obsidian Integration Info */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-800 dark:text-blue-200 mb-2">
                📝 Obsidian Notes Integration
              </h3>
              <p className="text-blue-700 dark:text-blue-300">
                This playground will render your Obsidian markdown notes as beautiful web pages, 
                complete with internal linking, tags, and metadata. Add your .md files to the 
                content/notes directory to see them here!
              </p>
            </div>

            {/* Coming Soon Notice */}
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                🚧 Under Construction
              </h3>
              <p className="text-yellow-700 dark:text-yellow-300">
                The markdown processing system and note navigation will be built in Phase 3 of the implementation plan. 
                You can start adding markdown files to the content/ directory now!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
