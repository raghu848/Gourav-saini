import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from 'lucide-react'
import PageAnimationWrapper from '../../../components/PageAnimationWrapper'

// This would typically come from a CMS or database
const getBlogPost = (id: string) => {
  const blogPosts = [
    {
      id: 'knee-replacement-signs',
      title: 'Signs You Need a Knee Replacement: When to Consider Surgery',
      excerpt: 'Learn about the key indicators that suggest it might be time to consider knee replacement surgery and what to expect from the procedure.',
      content: `
        <p>Knee replacement surgery, also known as knee arthroplasty, is a common and highly effective procedure for treating severe knee pain and disability. However, determining the right time for surgery can be challenging. Here are the key signs that indicate you might be a candidate for knee replacement:</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Persistent Pain</h2>
        <p>If you experience severe knee pain that persists even while resting, it may be time to consider knee replacement. This pain often interferes with daily activities and sleep.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Limited Mobility</h2>
        <p>Difficulty walking, climbing stairs, or standing up from a seated position can indicate advanced knee joint damage. When conservative treatments no longer provide relief, surgery may be necessary.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Visible Deformity</h2>
        <p>Bowing of the leg or other visible deformities around the knee joint often indicate severe arthritis or joint damage that may require replacement.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Failed Conservative Treatments</h2>
        <p>If medications, physical therapy, injections, and other non-surgical treatments no longer provide adequate relief, knee replacement may be the next step.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Quality of Life Impact</h2>
        <p>When knee pain significantly affects your ability to enjoy life, participate in activities you love, or maintain independence, it's time to discuss surgical options.</p>
        
        <p class="mt-8">At our practice, we use the latest CORI robotic technology for knee replacement surgery, ensuring precise alignment and optimal outcomes. If you're experiencing any of these signs, schedule a consultation with Dr. Gaurav Saini to discuss your options.</p>
      `,
      category: 'Knee Care',
      readTime: '5 min read',
      publishDate: '2024-01-15',
      image: '/images/Partial-Knee-Replacement.webp',
      author: 'Dr. Gaurav Saini',
      tags: ['knee replacement', 'arthritis', 'surgery', 'pain management']
    },
    {
      id: 'knee-exercises',
      title: '5 Exercises for Knee Pain Relief You Can Do at Home',
      excerpt: 'Discover simple yet effective exercises that can help alleviate knee pain and improve joint mobility from the comfort of your home.',
      content: `
        <p>Knee pain can significantly impact your daily life, but the right exercises can help reduce pain and improve mobility. Here are five effective exercises you can do at home:</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Straight Leg Raises</h2>
        <p>Lie on your back with one leg bent and the other straight. Tighten the thigh muscle of the straight leg and lift it about 12 inches off the ground. Hold for 5 seconds, then lower. Repeat 10-15 times for each leg.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Wall Sits</h2>
        <p>Stand with your back against a wall and slowly slide down until your knees are bent at about 45 degrees. Hold for 5-10 seconds, then slowly rise. Repeat 10 times.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Hamstring Curls</h2>
        <p>Stand behind a chair for support. Bend one knee and bring your heel toward your buttocks. Hold for 5 seconds, then lower. Repeat 10-15 times for each leg.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Calf Raises</h2>
        <p>Stand with your feet hip-width apart. Slowly rise onto your toes, then lower back down. Repeat 15-20 times.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Heel Slides</h2>
        <p>Lie on your back with both legs straight. Slowly slide the heel of one leg toward your buttocks, bending the knee. Hold for 5 seconds, then slide back. Repeat 10 times for each leg.</p>
        
        <p class="mt-8 font-semibold">Remember to start slowly and stop if you experience increased pain. Consult with your orthopedic specialist before beginning any new exercise routine.</p>
      `,
      category: 'Exercise',
      readTime: '7 min read',
      publishDate: '2024-01-10',
      image: '/images/Knee-presentation-surgeries-HTODFO.webp',
      author: 'Dr. Gaurav Saini',
      tags: ['exercise', 'knee pain', 'physical therapy', 'home care']
    },
    {
      id: 'surgery-preparation',
      title: 'Preparing for Your Orthopedic Surgery: A Complete Guide',
      excerpt: 'Everything you need to know before your orthopedic surgery, from pre-operative preparation to setting up your recovery space.',
      content: `
        <p>Preparing for orthopedic surgery can feel overwhelming, but proper preparation can significantly improve your surgical outcome and recovery experience. Here's a comprehensive guide to help you get ready:</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Medical Preparation</h2>
        <p>Several weeks before surgery, your medical team will conduct pre-operative assessments including blood tests, imaging studies, and consultations. Be sure to:</p>
        <ul class="list-disc pl-6 mt-4 space-y-2">
          <li>Provide a complete medical history and list of current medications</li>
          <li>Discuss any allergies or previous adverse reactions</li>
          <li>Stop certain medications as directed by your surgeon</li>
          <li>Complete any required pre-operative physical therapy</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Home Preparation</h2>
        <p>Preparing your home environment is crucial for a smooth recovery:</p>
        <ul class="list-disc pl-6 mt-4 space-y-2">
          <li>Clear pathways and remove tripping hazards</li>
          <li>Install grab bars in bathrooms if needed</li>
          <li>Prepare a comfortable recovery area on the main floor</li>
          <li>Stock up on essentials like groceries and medications</li>
          <li>Arrange for help with daily activities during initial recovery</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Day Before Surgery</h2>
        <ul class="list-disc pl-6 mt-4 space-y-2">
          <li>Follow fasting instructions (typically no food or drink after midnight)</li>
          <li>Shower with antibacterial soap as directed</li>
          <li>Take only approved medications with a small sip of water</li>
          <li>Remove nail polish and jewelry</li>
          <li>Arrive at the hospital on time with identification and insurance information</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">What to Expect</h2>
        <p>Understanding the surgical process can help reduce anxiety:</p>
        <ul class="list-disc pl-6 mt-4 space-y-2">
          <li>Pre-operative preparation takes 1-2 hours</li>
          <li>Surgery typically lasts 1-3 hours depending on complexity</li>
          <li>Recovery room monitoring for 1-3 hours post-surgery</li>
          <li>Most patients can go home the same day or after one night</li>
        </ul>
        
        <p class="mt-8">Our team at Dr. Gaurav Saini's practice uses advanced CORI robotic technology for joint replacement procedures, ensuring precision and optimal outcomes. We'll guide you through every step of the preparation and recovery process.</p>
      `,
      category: 'Surgery',
      readTime: '10 min read',
      publishDate: '2024-01-05',
      image: '/images/Total-hip-replacement.webp',
      author: 'Dr. Gaurav Saini',
      tags: ['surgery', 'preparation', 'recovery', 'joint replacement']
    },
    {
      id: 'arthroscopy-vs-open',
      title: 'Arthroscopy vs. Open Surgery: What\'s the Difference?',
      excerpt: 'Understanding the differences between arthroscopic and open surgery procedures, including benefits, risks, and recovery times.',
      content: `
        <p>When treating joint problems, orthopedic surgeons have two primary surgical approaches: arthroscopy and open surgery. Understanding the differences can help you make informed decisions about your care.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">What is Arthroscopy?</h2>
        <p>Arthroscopy is a minimally invasive surgical technique that uses a small camera (arthroscope) inserted through tiny incisions to visualize and treat joint problems. The surgeon can diagnose and treat conditions using specialized instruments inserted through additional small incisions.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">What is Open Surgery?</h2>
        <p>Open surgery involves making a larger incision to directly access the joint or bone. This approach provides the surgeon with direct visualization and access to the affected area, allowing for more extensive repairs or reconstructions.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Key Differences</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div class="bg-blue-50 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-blue-800 mb-3">Arthroscopy Benefits</h3>
            <ul class="space-y-2">
              <li>• Smaller incisions</li>
              <li>• Less tissue damage</li>
              <li>• Reduced pain</li>
              <li>• Faster recovery</li>
              <li>• Lower infection risk</li>
              <li>• Minimal scarring</li>
            </ul>
          </div>
          
          <div class="bg-green-50 p-6 rounded-lg">
            <h3 class="text-xl font-bold text-green-800 mb-3">Open Surgery Benefits</h3>
            <ul class="space-y-2">
              <li>• Better visualization</li>
              <li>• More extensive repairs</li>
              <li>• Complex reconstructions</li>
              <li>• Direct tissue access</li>
              <li>• Suitable for severe cases</li>
            </ul>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Recovery Comparison</h2>
        <div class="overflow-x-auto mt-6">
          <table class="min-w-full bg-white border border-gray-200">
            <thead>
              <tr class="bg-gray-100">
                <th class="py-2 px-4 border-b text-left">Aspect</th>
                <th class="py-2 px-4 border-b text-left">Arthroscopy</th>
                <th class="py-2 px-4 border-b text-left">Open Surgery</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2 px-4 border-b">Incision Size</td>
                <td class="py-2 px-4 border-b">0.5-1 cm</td>
                <td class="py-2 px-4 border-b">8-12 cm</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="py-2 px-4 border-b">Hospital Stay</td>
                <td class="py-2 px-4 border-b">Same day or 1 night</td>
                <td class="py-2 px-4 border-b">1-3 days</td>
              </tr>
              <tr>
                <td class="py-2 px-4 border-b">Return to Work</td>
                <td class="py-2 px-4 border-b">1-2 weeks</td>
                <td class="py-2 px-4 border-b">4-8 weeks</td>
              </tr>
              <tr class="bg-gray-50">
                <td class="py-2 px-4 border-b">Full Recovery</td>
                <td class="py-2 px-4 border-b">6-12 weeks</td>
                <td class="py-2 px-4 border-b">3-6 months</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <p class="mt-8">Dr. Gaurav Saini specializes in both arthroscopic and open surgical techniques, using the most appropriate approach for each patient's specific condition. Our practice utilizes advanced CORI robotic technology for joint replacement procedures, combining precision with minimally invasive benefits.</p>
      `,
      category: 'Education',
      readTime: '6 min read',
      publishDate: '2023-12-28',
      image: '/images/Knee-Arthroscopy-key-hole-surgery.webp',
      author: 'Dr. Gaurav Saini',
      tags: ['arthroscopy', 'open surgery', 'minimally invasive', 'recovery']
    },
    {
      id: 'sports-injury-prevention',
      title: 'Sports Injury Prevention: Tips for Athletes',
      excerpt: 'Essential tips and strategies to prevent common sports injuries and maintain peak athletic performance throughout your career.',
      content: `
        <p>Sports injuries can sideline athletes and impact performance. However, many injuries are preventable with proper preparation and technique. Here are essential strategies to keep you in the game:</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Proper Warm-Up and Cool-Down</h2>
        <p>Adequate warm-up increases blood flow to muscles and prepares them for activity. Cool-down helps prevent stiffness and promotes recovery:</p>
        <ul class="list-disc pl-6 mt-4 space-y-2">
          <li>Start with 5-10 minutes of light cardio</li>
          <li>Include dynamic stretching (leg swings, arm circles)</li>
          <li>End with static stretching</li>
          <li>Gradually increase intensity</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Strength Training</h2>
        <p>Building muscle strength supports joints and reduces injury risk:</p>
        <ul class="list-disc pl-6 mt-4 space-y-2">
          <li>Focus on core stability</li>
          <li>Strengthen muscles around vulnerable joints</li>
          <li>Include both concentric and eccentric exercises</li>
          <li>Progress gradually to avoid overloading</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Technique and Form</h2>
        <p>Proper technique is crucial for injury prevention:</p>
        <ul class="list-disc pl-6 mt-4 space-y-2">
          <li>Work with qualified coaches or trainers</li>
          <li>Focus on correct form before increasing intensity</li>
          <li>Address biomechanical issues</li>
          <li>Use appropriate equipment and footwear</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Listen to Your Body</h2>
        <p>Recognizing early warning signs can prevent minor issues from becoming major injuries:</p>
        <ul class="list-disc pl-6 mt-4 space-y-2">
          <li>Don't ignore persistent aches or pains</li>
          <li>Allow adequate rest and recovery time</li>
          <li>Address imbalances or weaknesses</li>
          <li>Seek professional help for recurring issues</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Nutrition and Hydration</h2>
        <p>Proper fueling supports performance and recovery:</p>
        <ul class="list-disc pl-6 mt-4 space-y-2">
          <li>Stay hydrated before, during, and after activity</li>
          <li>Eat a balanced diet rich in nutrients</li>
          <li>Time meals appropriately around training</li>
          <li>Consider supplements if needed</li>
        </ul>
        
        <p class="mt-8">Dr. Gaurav Saini specializes in sports medicine and has extensive experience treating athletes of all levels. Our comprehensive approach includes injury prevention, treatment, and performance optimization using advanced techniques like arthroscopy and robotic joint replacement when necessary.</p>
      `,
      category: 'Sports Medicine',
      readTime: '8 min read',
      publishDate: '2023-12-20',
      image: '/images/Minimally-invasive-knee-replacement.webp',
      author: 'Dr. Gaurav Saini',
      tags: ['sports injury', 'prevention', 'athletes', 'performance']
    },
    {
      id: 'arthritis-guide',
      title: 'Understanding Arthritis: Types, Symptoms, and Treatment Options',
      excerpt: 'A comprehensive guide to different types of arthritis, their symptoms, and the various treatment approaches available.',
      content: `
        <p>Arthritis is a common condition that affects millions of people worldwide, causing joint pain and stiffness. Understanding the different types and treatment options can help you manage symptoms effectively and maintain quality of life.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">What is Arthritis?</h2>
        <p>Arthritis refers to inflammation of one or more joints, resulting in pain, stiffness, and reduced mobility. There are over 100 different types of arthritis, with the most common forms being osteoarthritis and rheumatoid arthritis.</p>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Types of Arthritis</h2>
        
        <div class="space-y-6 mt-6">
          <div class="border-l-4 border-blue-500 pl-4 py-2">
            <h3 class="text-xl font-bold text-gray-900">Osteoarthritis (OA)</h3>
            <p class="mt-2">The most common form, caused by wear and tear of joint cartilage over time. Often affects knees, hips, hands, and spine.</p>
          </div>
          
          <div class="border-l-4 border-green-500 pl-4 py-2">
            <h3 class="text-xl font-bold text-gray-900">Rheumatoid Arthritis (RA)</h3>
            <p class="mt-2">An autoimmune condition where the immune system attacks joint linings, causing inflammation and joint damage.</p>
          </div>
          
          <div class="border-l-4 border-purple-500 pl-4 py-2">
            <h3 class="text-xl font-bold text-gray-900">Psoriatic Arthritis</h3>
            <p class="mt-2">Associated with psoriasis, affecting joints and sometimes causing skin symptoms.</p>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Common Symptoms</h2>
        <ul class="list-disc pl-6 mt-4 space-y-2">
          <li>Joint pain and stiffness, especially in the morning</li>
          <li>Swelling and tenderness in joints</li>
          <li>Reduced range of motion</li>
          <li>Warm, red joints (inflammatory types)</li>
          <li>Fatigue and general malaise</li>
        </ul>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Treatment Approaches</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 class="text-lg font-bold text-gray-900 mb-3">Medications</h3>
            <ul class="space-y-2 text-sm">
              <li>• Pain relievers (acetaminophen)</li>
              <li>• NSAIDs (ibuprofen, naproxen)</li>
              <li>• Disease-modifying drugs (RA)</li>
              <li>• Corticosteroids</li>
              <li>• Biologic response modifiers</li>
            </ul>
          </div>
          
          <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 class="text-lg font-bold text-gray-900 mb-3">Physical Therapy</h3>
            <ul class="space-y-2 text-sm">
              <li>• Range of motion exercises</li>
              <li>• Strengthening activities</li>
              <li>• Heat and cold therapy</li>
              <li>• Assistive device training</li>
              <li>• Activity modification</li>
            </ul>
          </div>
          
          <div class="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <h3 class="text-lg font-bold text-gray-900 mb-3">Surgical Options</h3>
            <ul class="space-y-2 text-sm">
              <li>• Joint replacement (knee, hip)</li>
              <li>• Arthroscopic procedures</li>
              <li>• Joint fusion</li>
              <li>• Osteotomy (bone realignment)</li>
            </ul>
          </div>
        </div>
        
        <h2 class="text-2xl font-bold text-gray-900 mt-8 mb-4">Lifestyle Management</h2>
        <ul class="list-disc pl-6 mt-4 space-y-2">
          <li>Maintain a healthy weight to reduce joint stress</li>
          <li>Engage in low-impact exercises like swimming or cycling</li>
          <li>Apply heat or cold to affected joints</li>
          <li>Practice stress management techniques</li>
          <li>Get adequate sleep for healing and recovery</li>
        </ul>
        
        <p class="mt-8">At our practice, Dr. Gaurav Saini specializes in advanced arthritis treatment, including robotic joint replacement with CORI technology for precise outcomes. Early intervention and comprehensive management can significantly improve quality of life for arthritis patients.</p>
      `,
      category: 'Arthritis',
      readTime: '12 min read',
      publishDate: '2023-12-15',
      image: '/images/dr-saini-professional.jpg',
      author: 'Dr. Gaurav Saini',
      tags: ['arthritis', 'osteoarthritis', 'rheumatoid', 'treatment']
    }
  ]

  return blogPosts.find(post => post.id === id) || null
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = getBlogPost(params.id)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
      description: 'The requested blog post could not be found.'
    }
  }

  return {
    title: `${post.title} | Dr. Gaurav Saini`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">The requested blog post could not be found.</p>
            <Link 
              href="/blog" 
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 relative">
      <PageAnimationWrapper />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Blog Link */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </Link>

        {/* Article Header */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="relative h-64 md:h-96">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          
          <div className="p-6 md:p-8">
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
            
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 font-serif mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-700 text-xs font-medium px-2 py-1 rounded">
                  #{tag}
                </span>
              ))}
            </div>
            
            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none text-gray-700"
              dangerouslySetInnerHTML={{ __html: post.content }} 
            />
            
            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src="/images/dr-saini-logo.jpg"
                      alt="Dr. Gaurav Saini"
                      fill
                      className="object-contain"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{post.author}</p>
                    <p className="text-sm text-gray-500">Orthopedic Surgeon</p>
                  </div>
                </div>
                
                <div className="flex space-x-3">
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
                    <Bookmark className="w-5 h-5 text-gray-600" />
                  </button>
                  <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200">
                    <Share2 className="w-5 h-5 text-gray-600" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        {/* Related Posts Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 font-serif">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* We would normally fetch related posts here */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-gray-900 mb-2">Understanding Joint Pain</h3>
              <p className="text-gray-600 text-sm mb-4">Learn about the common causes of joint pain and when to seek medical attention.</p>
              <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Read More
              </Link>
            </div>
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-gray-900 mb-2">Recovery After Knee Surgery</h3>
              <p className="text-gray-600 text-sm mb-4">Essential tips for a successful recovery after knee replacement surgery.</p>
              <Link href="/blog" className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}