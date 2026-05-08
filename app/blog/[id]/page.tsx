import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import PageAnimationWrapper from '../../../components/PageAnimationWrapper'
import { notFound } from 'next/navigation'
import { blogPosts, BlogPost } from '../blog-data'

// Define the blog post type
// Function to get blog post data by ID
function getBlogPost(id: string): BlogPost | undefined {
  return blogPosts.find(post => post.id === id)
}

async function getPostData(paramsPromise: Promise<{ id: string }>) {
  const resolvedParams = await paramsPromise;
  return getBlogPost(resolvedParams.id);
}

// Generate metadata for the blog post
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const post = getBlogPost(id);
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} | Dr. Gaurav Saini`,
    description: post.excerpt,
    alternates: {
      canonical: `https://drgauravsainiortho.com/blog/${id}/`
    }
  }
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  return blogPosts.map(post => ({ id: post.id }))
}

// Main component for the blog post page
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getBlogPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 relative pt-24 lg:pt-32">
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://drgauravsainiortho.com/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Blog",
                "item": "https://drgauravsainiortho.com/blog/"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": post.title,
                "item": `https://drgauravsainiortho.com/blog/${post.id}/`
              }
            ]
          })
        }}
      />

      {/* BlogPosting Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://drgauravsainiortho.com/blog/${post.id}/`
            },
            "headline": post.title,
            "description": post.excerpt,
            "image": post.image.startsWith('http') ? post.image : `https://drgauravsainiortho.com${post.image}`,
            "author": {
              "@type": "Person",
              "name": post.author,
              "url": "https://drgauravsainiortho.com/about/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Dr. Gaurav Saini - Orthopaedic Practice",
              "logo": {
                "@type": "ImageObject",
                "url": "https://drgauravsainiortho.com/images/dr-saini-logo.webp"
              }
            },
            "datePublished": post.publishDate,
            "dateModified": post.publishDate // Ideally this would be a separate field if available
          })
        }}
      />
      <PageAnimationWrapper />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog Link */}
        <div className="mb-6">
          <Link 
            href="/blog/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Blog Post Header */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src={post.image}
              alt={post.title}
              width={post.imageWidth}
              height={post.imageHeight}
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Article Content */}
          <div className="p-6 md:p-8">
            {/* Category and Metadata */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                {post.category}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <User className="w-4 h-4 mr-2" />
                {post.author}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(post.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <Clock className="w-4 h-4 mr-2" />
                {post.readTime}
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-serif">
              {post.title}
            </h1>

            {/* Content */}
            <div 
              className="prose max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>

        {/* Related Posts Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Related Articles</h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <p className="text-gray-600">Check out our other blog posts for more orthopedic health information.</p>
            <Link 
              href="/blog/" 
              className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              View All Blog Posts
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}