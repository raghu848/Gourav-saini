import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import PageAnimationWrapper from '../../../components/PageAnimationWrapper'
import { notFound } from 'next/navigation'
import { blogPosts, BlogPost } from '../blog-data'

const postReferences: Record<string, { title: string, url: string }[]> = {
  'knee-replacement-signs': [
    { title: 'Knee Replacement Surgery - American Academy of Orthopaedic Surgeons (AAOS) OrthoInfo', url: 'https://orthoinfo.aaos.org/en/treatment/total-knee-replacement/' },
    { title: 'Total Knee Arthroplasty Clinical Guidelines - Journal of Bone and Joint Surgery (JBJS)', url: 'https://jbjs.org/' }
  ],
  'knee-exercises': [
    { title: 'Therapeutic Exercise for Knee Osteoarthritis - National Institutes of Health (NIH)', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5074793/' },
    { title: 'Knee Exercises for Joint Pain Relief - Arthritis Foundation', url: 'https://www.arthritis.org/' }
  ],
  'surgery-preparation': [
    { title: 'Preparing for Joint Replacement Surgery - AAOS OrthoInfo', url: 'https://orthoinfo.aaos.org/en/treatment/preparing-for-joint-replacement-surgery/' },
    { title: 'Pre-operative Evaluation for Joint Replacement - PubMed Central', url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7386214/' }
  ]
};

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
    title: `${post.seoTitle ?? post.title} | Dr. Gaurav Saini`,
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
              className="prose max-w-none text-gray-700 mb-12"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* References Section */}
            {(() => {
              const refs = postReferences[post.id] || [
                { title: 'Orthopaedic Information & Patient Resources - American Academy of Orthopaedic Surgeons (AAOS)', url: 'https://orthoinfo.aaos.org/' }
              ];
              return (
                <div className="mt-12 pt-8 border-t border-gray-100">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 font-serif">Medical References & Evidence</h3>
                  <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                    {refs.map((ref, idx) => (
                      <li key={idx}>
                        <a href={ref.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">
                          {ref.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })()}

            {/* Author Profile Bio Card */}
            <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-blue-50/50 p-6 rounded-2xl border border-blue-50">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-blue-200 bg-white shadow-sm flex-shrink-0">
                <Image
                  src="/images/dr-saini-logo.webp"
                  alt="Dr. Gaurav Saini"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h4 className="text-lg font-bold text-gray-900 mb-1">
                  Written & Reviewed by: Dr. Gaurav Saini
                </h4>
                <p className="text-sm font-semibold text-blue-700 mb-3">
                  MBBS, MS (Ortho), DNB (Ortho), MNAMS | Fellowship in Joint Replacement
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Dr. Gaurav Saini is a leading Senior Consultant Orthopaedic & Robotic Joint Replacement Surgeon with nearly 20 years of expertise and over 5,000 successful surgeries. He practices at Max Super Speciality Hospital, Mohali, specializing in advanced CORI robotic-assisted knee and hip replacement surgery, sports arthroscopy, and complex trauma care.
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-xs font-semibold text-gray-500">
                  <span>Practice: Max Hospital, Mohali</span>
                  <span>•</span>
                  <span>Specialty: Orthopaedic & Robotic Surgery</span>
                </div>
              </div>
            </div>

            {/* Medical Disclaimer */}
            <div className="mt-8 p-4 bg-yellow-50/60 rounded-xl border border-yellow-100 text-xs text-yellow-800 leading-relaxed text-left">
              <strong>Disclaimer:</strong> The medical information on this website is provided as an information resource only, and is not to be used or relied on for any diagnostic or treatment purposes. This information is not intended to be patient education, does not create any patient-physician relationship, and should not be used as a substitute for professional diagnosis and treatment. Please consult your health care provider before making any healthcare decisions.
            </div>
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