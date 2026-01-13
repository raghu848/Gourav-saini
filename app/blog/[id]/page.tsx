import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import React from 'react'
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react'
import PageAnimationWrapper from '../../../components/PageAnimationWrapper'
import { notFound } from 'next/navigation'

// Define the blog post type
interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  readTime: string
  publishDate: string
  image: string
  author: string
  imageWidth: number
  imageHeight: number
  content: string
}

// Function to get blog post data by ID
function getBlogPost(id: string): BlogPost | undefined {
  const blogPosts: BlogPost[] = [
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
      imageHeight: 800,
      content: `
        <div class="prose max-w-none">
          <p>Knee replacement surgery is a significant decision that shouldn't be taken lightly. However, for many patients suffering from severe knee pain and limited mobility, it can be a life-changing procedure that restores their quality of life.</p>
          
          <h2>Key Indicators for Knee Replacement</h2>
          <p>Here are the primary signs that may indicate you're a candidate for knee replacement surgery:</p>
          
          <ul>
            <li><strong>Severe Pain:</strong> Persistent knee pain that interferes with daily activities, even while resting</li>
            <li><strong>Limited Mobility:</strong> Difficulty walking, climbing stairs, or standing for extended periods</li>
            <li><strong>Stiffness:</strong> Stiffness in the knee joint that limits bending and straightening</li>
            <li><strong>Deformity:</strong> Visible deformity such as bowing of the knee</li>
            <li><strong>Failed Conservative Treatments:</strong> When medications, physical therapy, and injections no longer provide relief</li>
          </ul>
          
          <h2>The Decision-Making Process</h2>
          <p>Your orthopedic surgeon will evaluate several factors before recommending knee replacement:</p>
          
          <ol>
            <li>Medical history and physical examination</li>
            <li>X-rays and other imaging studies</li>
            <li>Response to conservative treatments</li>
            <li>Your overall health and activity level</li>
          </ol>
          
          <h2>What to Expect</h2>
          <p>Modern knee replacement surgery has a high success rate, with most patients experiencing significant pain relief and improved function. Recovery typically takes several weeks to months, with physical therapy playing a crucial role in the process.</p>
          
          <p>If you're experiencing these symptoms, don't hesitate to consult with an orthopedic specialist who can evaluate your specific situation and recommend the best treatment options for you.</p>
        </div>
      `
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
      imageHeight: 800,
      content: `
        <div class="prose max-w-none">
          <p>Knee pain can significantly impact your daily life, but the right exercises can help reduce pain and improve mobility. These exercises are gentle on the joints while strengthening the muscles that support your knees.</p>
          
          <h2>1. Straight Leg Raises</h2>
          <p>Lie on your back with one leg bent and the other straight. Tighten the thigh muscles of the straight leg and lift it about 12 inches off the ground. Hold for 5 seconds, then lower slowly. Repeat 10-15 times for each leg.</p>
          
          <h2>2. Wall Sits</h2>
          <p>Stand with your back against a wall and slowly slide down until your knees are bent at about 45 degrees. Hold for 5-10 seconds, gradually increasing the duration as your strength improves. Repeat 5-10 times.</p>
          
          <h2>3. Hamstring Curls</h2>
          <p>Stand behind a chair for support. Slowly bend one knee, bringing your heel toward your buttocks. Hold for 5 seconds, then lower slowly. Repeat 10-15 times for each leg.</p>
          
          <h2>4. Calf Raises</h2>
          <p>Stand with your feet hip-width apart. Slowly rise up onto your toes, then lower back down. Repeat 10-15 times. As you get stronger, try doing this exercise on one leg at a time.</p>
          
          <h2>5. Step-Ups</h2>
          <p>Use a sturdy step or platform about 6 inches high. Step up with one foot, then bring the other foot up to meet it. Step down with the same foot you started with. Repeat 10 times for each leg.</p>
          
          <h2>Important Tips</h2>
          <ul>
            <li>Start slowly and gradually increase intensity</li>
            <li>Stop if you experience sharp pain</li>
            <li>Warm up before exercising and cool down afterward</li>
            <li>Consistency is key – aim to do these exercises daily</li>
          </ul>
          
          <p>Remember to consult with your healthcare provider before starting any new exercise program, especially if you have existing knee problems.</p>
        </div>
      `
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
      imageHeight: 800,
      content: `
        <div class="prose max-w-none">
          <p>Preparing for orthopedic surgery involves both physical and mental preparation. The better prepared you are, the smoother your recovery will be.</p>
          
          <h2>Pre-Operative Medical Preparation</h2>
          <p>Your surgeon will provide specific instructions, but here are common pre-operative requirements:</p>
          
          <ul>
            <li>Medical evaluations and tests (blood work, EKG, etc.)</li>
            <li>Medication adjustments (especially blood thinners)</li>
            <li>Weight management if recommended</li>
            <li>Smoking cessation (if applicable)</li>
          </ul>
          
          <h2>Home Preparation</h2>
          <p>Set up your recovery space before surgery:</p>
          
          <ul>
            <li>Arrange for help during the first week or two</li>
            <li>Prepare meals in advance and freeze them</li>
            <li>Set up a comfortable area on the main floor</li>
            <li>Remove tripping hazards</li>
            <li>Install grab bars in the bathroom if needed</li>
          </ul>
          
          <h2>What to Bring to the Hospital</h2>
          <ul>
            <li>Comfortable clothing for the ride home</li>
            <li>Personal hygiene items</li>
            <li>List of all medications</li>
            <li>Insurance information</li>
            <li>Entertainment items (book, tablet, etc.)</li>
          </ul>
          
          <h2>Day of Surgery</h2>
          <p>Follow these guidelines:</p>
          
          <ul>
            <li>Do not eat or drink anything after midnight</li>
            <li>Take only medications approved by your surgeon</li>
            <li>Arrive at the hospital at the designated time</li>
            <li>Leave jewelry and valuables at home</li>
          </ul>
          
          <p>Proper preparation can significantly impact your surgical outcome and recovery time. Don't hesitate to ask your surgical team any questions you may have.</p>
        </div>
      `
    },
    {
      id: 'sports-injury-prevention',
      title: 'Sports Injury Prevention: Essential Tips for Athletes',
      excerpt: 'Learn effective strategies to prevent sports injuries and maintain peak performance as an athlete.',
      category: 'Sports Medicine',
      readTime: '6 min read',
      publishDate: '2024-02-10',
      image: '/images/Knee-Arthroscopy-key-hole-surgery.webp',
      author: 'Dr. Gaurav Saini',
      imageWidth: 1200,
      imageHeight: 800,
      content: `
        <div class="prose max-w-none">
          <p>Sports injuries can be devastating for athletes at any level. Prevention is always better than treatment, and implementing proper injury prevention strategies can keep you active and performing at your best.</p>
          
          <h2>Common Sports Injuries</h2>
          <p>Understanding the most common sports injuries is the first step in prevention:</p>
          
          <ul>
            <li><strong>ACL injuries:</strong> Often occur during sudden stops or changes in direction</li>
            <li><strong>Meniscus tears:</strong> Typically happen during twisting movements</li>
            <li><strong>Rotator cuff injuries:</strong> Common in sports involving repetitive overhead motions</li>
            <li><strong>Concussions:</strong> Head injuries that require immediate attention</li>
          </ul>
          
          <h2>Prevention Strategies</h2>
          <p>Implement these evidence-based strategies to reduce your risk of sports injuries:</p>
          
          <h3>1. Proper Warm-Up</h3>
          <p>Never skip your warm-up routine. A proper warm-up increases blood flow to muscles and prepares your body for intense activity. Include dynamic stretches and sport-specific movements.</p>
          
          <h3>2. Strength Training</h3>
          <p>Focus on strengthening the muscles that support your joints. A balanced strength program should include exercises for all major muscle groups with special attention to injury-prone areas.</p>
          
          <h3>3. Flexibility and Mobility</h3>
          <p>Maintain good flexibility through regular stretching. Include both dynamic stretching before activity and static stretching after activity.</p>
          
          <h3>4. Proper Equipment</h3>
          <p>Use appropriate, well-fitted protective equipment for your sport. Replace worn equipment promptly and ensure it meets safety standards.</p>
          
          <h3>5. Technique and Form</h3>
          <p>Work with qualified coaches to develop proper technique. Good form reduces stress on joints and muscles, decreasing injury risk.</p>
          
          <h2>Recovery and Rest</h2>
          <p>Adequate recovery is as important as training itself:</p>
          
          <ul>
            <li>Allow sufficient sleep (7-9 hours for adults, more for athletes)</li>
            <li>Include rest days in your training schedule</li>
            <li>Listen to your body and don't ignore pain signals</li>
            <li>Use recovery techniques like ice baths, massage, or compression</li>
          </ul>
          
          <p>By implementing these prevention strategies, you can significantly reduce your risk of sports injuries while maintaining or improving your performance. Remember that injury prevention is an ongoing process that requires consistent attention to detail.</p>
        </div>
      `
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
      imageHeight: 800,
      content: `
        <div class="prose max-w-none">
          <p>When it comes to orthopedic procedures, surgeons have different approaches available. Two of the most common are arthroscopic surgery and open surgery. Both have their advantages and disadvantages, and the choice depends on the specific condition, patient factors, and surgeon expertise.</p>
          
          <h2>What is Arthroscopic Surgery?</h2>
          <p>Arthroscopic surgery, also known as keyhole surgery, involves making small incisions (typically 5-10mm) through which a tiny camera (arthroscope) and specialized instruments are inserted. The camera transmits images to a monitor, allowing the surgeon to visualize and operate inside the joint without making large incisions.</p>
          
          <h2>What is Open Surgery?</h2>
          <p>Open surgery involves making a larger incision to directly access the affected area. This provides the surgeon with direct visualization and access to the joint or tissue, allowing for more complex procedures.</p>
          
          <h2>Key Differences</h2>
          <ul>
            <li><strong>Incision Size:</strong> Arthroscopic uses small incisions; open surgery requires larger ones</li>
            <li><strong>Recovery Time:</strong> Arthroscopic typically has shorter recovery; open surgery may require longer healing</li>
            <li><strong>Pain Level:</strong> Arthroscopic generally causes less postoperative pain</li>
            <li><strong>Risks:</strong> Arthroscopic has lower infection risk; open surgery may offer better access for complex repairs</li>
            <li><strong>Procedure Complexity:</strong> Some complex procedures still require open techniques</li>
          </ul>
          
          <h2>Benefits of Arthroscopic Surgery</h2>
          <p>Arthroscopic procedures offer several advantages:</p>
          <ul>
            <li>Less scarring and tissue damage</li>
            <li>Reduced postoperative pain</li>
            <li>Faster recovery and return to activities</li>
            <li>Lower risk of complications</li>
            <li>Often performed as outpatient procedures</li>
          </ul>
          
          <h2>When Open Surgery is Necessary</h2>
          <p>Despite advances in arthroscopic techniques, some procedures still require open surgery:</p>
          <ul>
            <li>Complex reconstructions</li>
            <li>Revision surgeries</li>
            <li>Certain fracture repairs</li>
            <li>Implant placement in complex cases</li>
          </ul>
          
          <p>Your surgeon will evaluate your specific condition and recommend the most appropriate approach based on your individual needs, anatomy, and the nature of the required procedure.</p>
        </div>
      `
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
      imageHeight: 800,
      content: `
        <div class="prose max-w-none">
          <p>Arthritis is one of the most common chronic conditions affecting millions of people worldwide. It encompasses over 100 different conditions that affect joints, surrounding tissues, and other connective tissues. Understanding the different types, recognizing symptoms early, and exploring treatment options can significantly improve quality of life.</p>
          
          <h2>Types of Arthritis</h2>
          <p>The most common forms include:</p>
          
          <h3>Osteoarthritis (OA)</h3>
          <p>The most prevalent type, often called "wear and tear" arthritis. It occurs when cartilage that cushions the ends of bones deteriorates over time.</p>
          
          <h3>Rheumatoid Arthritis (RA)</h3>
          <p>An autoimmune disorder that causes the immune system to attack the synovium, the lining of the membranes that surround joints.</p>
          
          <h3>Psoriatic Arthritis</h3>
          <p>Affects some people who have psoriasis, an autoimmune skin condition.</p>
          
          <h2>Symptoms to Watch For</h2>
          <p>Common signs of arthritis include:</p>
          <ul>
            <li>Joint pain and tenderness</li>
            <li>Joint stiffness, especially in the morning</li>
            <li>Swelling around joints</li>
            <li>Reduced range of motion</li>
            <li>Warmth and redness around joints</li>
          </ul>
          
          <h2>Treatment Approaches</h2>
          <p>Management strategies vary depending on the type and severity of arthritis:</p>
          
          <h3>Non-Pharmacological Treatments</h3>
          <ul>
            <li>Physical therapy and exercise</li>
            <li>Weight management</li>
            <li>Heat and cold therapy</li>
            <li>Assistive devices</li>
          </ul>
          
          <h3>Medications</h3>
          <p>Depending on the type of arthritis, medications may include NSAIDs, corticosteroids, DMARDs, or biologics.</p>
          
          <h3>Surgical Options</h3>
          <p>In advanced cases, joint replacement or other surgical procedures may be recommended.</p>
          
          <p>Early diagnosis and treatment are crucial for managing arthritis effectively. If you experience persistent joint symptoms, consult with a healthcare professional for proper evaluation and management.</p>
        </div>
      `
    }
  ]

  return blogPosts.find(post => post.id === id)
}

async function getPostData(paramsPromise: Promise<{ id: string }>) {
  const resolvedParams = await paramsPromise;
  return getBlogPost(resolvedParams.id);
}

// Generate metadata for the blog post
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const { id } = params;
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
  const blogPosts = [
    { id: 'knee-replacement-signs' },
    { id: 'knee-exercises' },
    { id: 'surgery-preparation' },
    { id: 'arthroscopy-vs-open' },
    { id: 'sports-injury-prevention' },
    { id: 'arthritis-guide' }
  ]
  
  return blogPosts
}

// Main component for the blog post page
export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const post = getBlogPost(id);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 relative">
      <Head>
        {/* BlogPosting Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://drgauravsainiortho.com/blog/${post.id}`
              },
              "headline": post.title,
              "description": post.excerpt,
              "image": `https://drgauravsainiortho.com${post.image}`,
              "author": {
                "@type": "Person",
                "name": post.author,
                "url": "https://drgauravsainiortho.com"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Dr. Gaurav Saini - Orthopaedic Practice",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://drgauravsainiortho.com/images/dr-saini-logo.jpg"
                }
              },
              "datePublished": post.publishDate,
              "dateModified": post.publishDate
            })
          }}
        />
      </Head>
      <PageAnimationWrapper />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog Link */}
        <div className="mb-6">
          <Link 
            href="/blog" 
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
              href="/blog" 
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