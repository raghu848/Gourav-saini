import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, ArrowRight, Clock, User, Tag } from 'lucide-react'
import PageAnimationWrapper from '../../components/PageAnimationWrapper'

import { blogMetadata } from '../seo-metadata'

export const metadata: Metadata = blogMetadata

export default function BlogPage() {
  const blogPosts = [
    {
      id: 'knee-replacement-signs',
      title: 'Signs You Need a Knee Replacement: When to Consider Surgery',
      excerpt: 'Learn about the key indicators that suggest it might be time to consider knee replacement surgery and what to expect from the procedure.',
      category: 'Knee Care',
      readTime: '5 min read',
      publishDate: '2024-01-15',
      image: '/images/Partial-Knee-Replacement.webp',
      author: 'Dr. Gaurav Saini',
      imageWidth: 1200,
      imageHeight: 800
    },
    {
      id: 'knee-exercises',
      title: '5 Exercises for Knee Pain Relief You Can Do at Home',
      excerpt: 'Discover simple yet effective exercises that can help alleviate knee pain and improve joint mobility from the comfort of your home.',
      category: 'Exercise',
      readTime: '7 min read',
      publishDate: '2024-01-10',
      image: '/images/Knee-presentation-surgeries-HTODFO.webp',
      author: 'Dr. Gaurav Saini',
      imageWidth: 1200,
      imageHeight: 800
    },
    {
      id: 'surgery-preparation',
      title: 'Preparing for Your Orthopedic Surgery: A Complete Guide',
      excerpt: 'Everything you need to know before your orthopedic surgery, from pre-operative preparation to setting up your recovery space.',
      category: 'Surgery',
      readTime: '10 min read',
      publishDate: '2024-01-05',
      image: '/images/Total-hip-replacement.webp',
      author: 'Dr. Gaurav Saini',
      imageWidth: 1200,
      imageHeight: 800
    },
    {
      id: 'arthroscopy-vs-open',
      title: 'Arthroscopy vs. Open Surgery: What\'s the Difference?',
      excerpt: 'Understanding the differences between arthroscopic and open surgery procedures, including benefits, risks and recovery times.',
      category: 'Education',
      readTime: '6 min read',
      publishDate: '2023-12-28',
      image: '/images/Knee-Arthroscopy-key-hole-surgery.webp',
      author: 'Dr. Gaurav Saini',
      imageWidth: 1200,
      imageHeight: 800
    },
    {
      id: 'sports-injury-prevention',
      title: 'Sports Injury Prevention: Tips for Athletes',
      excerpt: 'Essential tips and strategies to prevent common sports injuries and maintain peak athletic performance throughout your career.',
      category: 'Sports Medicine',
      readTime: '8 min read',
      publishDate: '2023-12-20',
      image: '/images/Minimally-invasive-knee-replacement.webp',
      author: 'Dr. Gaurav Saini',
      imageWidth: 1200,
      imageHeight: 800
    },
    {
      id: 'arthritis-guide',
      title: 'Understanding Arthritis: Types, Symptoms and Treatment Options',
      excerpt: 'A comprehensive guide to different types of arthritis, their symptoms, and the various treatment approaches available.',
      category: 'Arthritis',
      readTime: '12 min read',
      publishDate: '2023-12-15',
      image: '/images/patient-1 (25).jpg',
      author: 'Dr. Gaurav Saini',
      imageWidth: 1200,
      imageHeight: 800
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

  // Format dates in a hydration-safe way
  const formatDate = (dateString: string) => {
    // For server-side rendering, return a static format
    // For client-side, we could use more advanced formatting if needed
    return new Date(dateString).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  const formatDateShort = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  }

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <PageAnimationWrapper />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 mt-8">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 font-serif mb-6">
            Health & Wellness Blog
          </h1>
          <p className="text-2xl text-gray-600 max-w-4xl mx-auto">
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
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200'
              } shadow-sm`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Post */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 hover:shadow-xl transition-shadow duration-300">
          <div className="md:flex">
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                width={blogPosts[0].imageWidth}
                height={blogPosts[0].imageHeight}
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="md:w-1/2 p-8">
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full">
                  Featured
                </span>
                <span className="ml-4 text-gray-500 text-sm flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  {blogPosts[0].category}
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 font-serif">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-700 mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-500 text-sm">
                  <User className="w-4 h-4 mr-2" />
                  {blogPosts[0].author}
                  <Calendar className="w-4 h-4 ml-4 mr-2" />
                  {formatDate(blogPosts[0].publishDate)}
                  <Clock className="w-4 h-4 ml-4 mr-2" />
                  {blogPosts[0].readTime}
                </div>
                <Link
                  href={`/blog/${blogPosts[0].id}`}
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
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
            <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={post.imageWidth}
                  height={post.imageHeight}
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
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
                <p className="text-gray-700 mb-4 text-sm flex-grow">
                  {post.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-4">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="w-4 h-4 mr-2" />
                    {formatDateShort(post.publishDate)}
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
        <div className="mt-16 bg-gradient-to-r from-blue-900 to-green-800 text-white rounded-xl p-8 text-center shadow-lg">
          <h2 className="text-3xl font-bold mb-4 font-serif">
            Stay Updated with Health Tips
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for the latest orthopedic health insights and tips
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              key="newsletter-email"
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
              autoComplete="off"
            />
            <button 
              key="newsletter-subscribe"
              className="px-8 py-3 bg-white text-blue-900 font-medium rounded-lg hover:bg-gray-100 transition-colors duration-200 shadow-md"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}