import { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Health Blog - Dr. Gaurav Saini | Orthopedic Tips & Information',
  description: 'Stay informed with expert orthopedic advice, knee care tips, and the latest insights from Dr. Gaurav Saini. Your guide to better joint health.',
}

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: 'Signs You Need a Knee Replacement: When to Consider Surgery',
      excerpt: 'Learn about the key indicators that suggest it might be time to consider knee replacement surgery and what to expect from the procedure.',
      category: 'Knee Care',
      readTime: '5 min read',
      publishDate: '2024-01-15',
      image: '/blog/knee-replacement-signs.jpg'
    },
    {
      id: 2,
      title: '5 Exercises for Knee Pain Relief You Can Do at Home',
      excerpt: 'Discover simple yet effective exercises that can help alleviate knee pain and improve joint mobility from the comfort of your home.',
      category: 'Exercise',
      readTime: '7 min read',
      publishDate: '2024-01-10',
      image: '/blog/knee-exercises.jpg'
    },
    {
      id: 3,
      title: 'Preparing for Your Orthopedic Surgery: A Complete Guide',
      excerpt: 'Everything you need to know before your orthopedic surgery, from pre-operative preparation to setting up your recovery space.',
      category: 'Surgery',
      readTime: '10 min read',
      publishDate: '2024-01-05',
      image: '/blog/surgery-preparation.jpg'
    },
    {
      id: 4,
      title: 'Arthroscopy vs. Open Surgery: What\'s the Difference?',
      excerpt: 'Understanding the differences between arthroscopic and open surgery procedures, including benefits, risks, and recovery times.',
      category: 'Education',
      readTime: '6 min read',
      publishDate: '2023-12-28',
      image: '/blog/arthroscopy-vs-open.jpg'
    },
    {
      id: 5,
      title: 'Sports Injury Prevention: Tips for Athletes',
      excerpt: 'Essential tips and strategies to prevent common sports injuries and maintain peak athletic performance throughout your career.',
      category: 'Sports Medicine',
      readTime: '8 min read',
      publishDate: '2023-12-20',
      image: '/blog/sports-injury-prevention.jpg'
    },
    {
      id: 6,
      title: 'Understanding Arthritis: Types, Symptoms, and Treatment Options',
      excerpt: 'A comprehensive guide to different types of arthritis, their symptoms, and the various treatment approaches available.',
      category: 'Arthritis',
      readTime: '12 min read',
      publishDate: '2023-12-15',
      image: '/blog/arthritis-guide.jpg'
    }
  ]

  const categories = [
    'All Posts',
    'Knee Care',
    'Exercise',
    'Surgery',
    'Education',
    'Sports Medicine',
    'Arthritis'
  ]

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 font-serif mb-4">
            Health & Wellness Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, tips, and advice on orthopedic health, knee care, and maintaining an active lifestyle
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                category === 'All Posts'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-12">
          <div className="md:flex">
            <div className="md:w-1/2">
              <div className="h-64 md:h-full bg-gradient-to-r from-blue-500 to-blue-600"></div>
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </span>
                <span className="ml-4 text-gray-500 text-sm">
                  {blogPosts[0].category}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-serif">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-700 mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(blogPosts[0].publishDate).toLocaleDateString()}
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  {blogPosts[0].readTime}
                </div>
                <Link
                  href={`/blog/${blogPosts[0].id}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              
              {/* Image Placeholder */}
              <div className="h-48 bg-gradient-to-r from-gray-200 to-gray-300"></div>
              
              <div className="p-6">
                {/* Category and Read Time */}
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-sm flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-serif">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-700 mb-4 text-sm">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(post.publishDate).toLocaleDateString()}
                  </div>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-16 bg-blue-900 text-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif">
            Stay Updated with Health Tips
          </h2>
          <p className="text-xl mb-6">
            Subscribe to our newsletter for the latest orthopedic health insights and tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="px-8 py-3 bg-white text-blue-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}