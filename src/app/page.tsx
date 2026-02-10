import Link from 'next/link';

const generators = [
  {
    title: 'Baby Name Generator',
    description: 'Find the perfect name for your baby with meanings and origins',
    href: '/baby-names',
    icon: '👶',
    color: 'from-pink-400 to-rose-500',
  },
  {
    title: 'Business Name Generator',
    description: 'Create professional business names for your company',
    href: '/business-name-generator',
    icon: '💼',
    color: 'from-blue-400 to-indigo-500',
  },
  {
    title: 'Username Generator',
    description: 'Generate unique usernames for social media and gaming',
    href: '/username-generator',
    icon: '👤',
    color: 'from-purple-400 to-pink-500',
  },
  {
    title: 'Gamertag Generator',
    description: 'Epic gaming names for your online persona',
    href: '/gamertag-generator',
    icon: '🎮',
    color: 'from-green-400 to-emerald-500',
  },
  {
    title: 'Fantasy Name Generator',
    description: 'Create names for elves, dwarves, dragons, and more',
    href: '/fantasy-name-generator',
    icon: '🧙',
    color: 'from-violet-400 to-purple-500',
  },
  {
    title: 'Pet Name Generator',
    description: 'Find the perfect name for your furry friend',
    href: '/pet-name-generator',
    icon: '🐾',
    color: 'from-amber-400 to-orange-500',
  },
  {
    title: 'WiFi Name Generator',
    description: 'Funny and creative names for your wireless network',
    href: '/wifi-name-generator',
    icon: '📶',
    color: 'from-cyan-400 to-blue-500',
  },
  {
    title: 'Team Name Generator',
    description: 'Generate team names for sports, work, and trivia',
    href: '/team-name-generator',
    icon: '🏆',
    color: 'from-yellow-400 to-amber-500',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-500 via-orange-600 to-rose-600 bg-clip-text text-transparent">
            Find the Perfect Name
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Free name generators for babies, businesses, usernames, gaming tags, and more. Generate unique names instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {generators.map((generator) => (
            <Link
              key={generator.href}
              href={generator.href}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div
                  className={`w-16 h-16 mb-4 rounded-lg bg-gradient-to-br ${generator.color} flex items-center justify-center text-3xl transform group-hover:scale-110 transition-transform`}
                >
                  {generator.icon}
                </div>
                <h2 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-orange-600 transition-colors">
                  {generator.title}
                </h2>
                <p className="text-gray-600 text-sm">{generator.description}</p>
              </div>
              <div className={`h-1 bg-gradient-to-r ${generator.color} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`} />
            </Link>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Why Use NameSpark?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold mb-2 text-gray-800">Instant Results</h3>
              <p className="text-gray-600 text-sm">Generate hundreds of names in seconds</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold mb-2 text-gray-800">Smart Algorithms</h3>
              <p className="text-gray-600 text-sm">Intelligent name generation based on your preferences</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-3">💯</div>
              <h3 className="font-bold mb-2 text-gray-800">100% Free</h3>
              <p className="text-gray-600 text-sm">No registration or payment required</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
