export interface BlogPost {
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

export const blogPosts: BlogPost[] = [
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
          <li><strong>Severe Pain:</strong> Persistent knee pain that interferes with daily activities, even while resting or trying to sleep.</li>
          <li><strong>Limited Mobility:</strong> Difficulty walking more than a block, climbing stairs, or standing for more than 10-15 minutes.</li>
          <li><strong>Stiffness:</strong> Chronic stiffness in the knee joint that limits bending and straightening, often making it hard to put on shoes or socks.</li>
          <li><strong>Visible Deformity:</strong> Visible bowing (bow-legged) or knock-knee appearance due to advanced joint deterioration.</li>
          <li><strong>Chronic Swelling:</strong> Inflammation that doesn't improve with medication, rest, or ice.</li>
          <li><strong>Failed Conservative Treatments:</strong> When medications, physical therapy, and injections (like hyaluronic acid or steroids) no longer provide relief.</li>
        </ul>
        
        <h2>The Decision-Making Process</h2>
        <p>Your orthopedic surgeon will evaluate several factors before recommending knee replacement:</p>
        
        <ol>
          <li><strong>Medical history:</strong> A comprehensive review of your symptoms and overall health.</li>
          <li><strong>Physical examination:</strong> Testing your knee's range of motion, stability, and strength.</li>
          <li><strong>Imaging studies:</strong> X-rays to determine the extent of joint damage and MRI if necessary.</li>
          <li><strong>Functional Assessment:</strong> Evaluating how the pain affects your ability to perform activities of daily living (ADLs).</li>
        </ol>
        
        <h2>Recovery Milestones</h2>
        <p>Modern knee replacement surgery has a high success rate. Here is what a typical recovery looks like:</p>
        <ul>
          <li><strong>Weeks 1-2:</strong> Walking with a walker/crutches, focusing on wound healing and basic mobility.</li>
          <li><strong>Weeks 3-6:</strong> Transitioning to a cane, starting more intensive physical therapy.</li>
          <li><strong>Weeks 7-12:</strong> Returning to most normal activities, including driving and light exercise.</li>
          <li><strong>6-12 Months:</strong> Full recovery and return to all recreational activities like golf or hiking.</li>
        </ul>
        
        <div class="bg-blue-50 p-6 rounded-lg my-8 border-l-4 border-blue-600">
          <h3 class="text-blue-900 mt-0">Expert Tip</h3>
          <p class="mb-0 text-blue-800 italic">"The best time for surgery is when the pain starts dictating your life. Don't wait until you've lost significant muscle strength or mobility, as this can make recovery more challenging." — Dr. Gaurav Saini</p>
        </div>
        
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
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="mt-0">1. Straight Leg Raises</h3>
            <p>Lie on your back with one leg bent and the other straight. Tighten the thigh muscles of the straight leg and lift it about 12 inches off the ground. Hold for 5 seconds, then lower slowly. Repeat 10-15 times.</p>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="mt-0">2. Wall Sits</h3>
            <p>Stand with your back against a wall and slowly slide down until your knees are bent at about 45 degrees. Hold for 5-10 seconds, gradually increasing the duration as your strength improves. Repeat 5-10 times.</p>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="mt-0">3. Hamstring Curls</h3>
            <p>Stand behind a chair for support. Slowly bend one knee, bringing your heel toward your buttocks. Hold for 5 seconds, then lower slowly. Repeat 10-15 times for each leg.</p>
          </div>
          <div class="bg-gray-50 p-4 rounded-lg">
            <h3 class="mt-0">4. Calf Raises</h3>
            <p>Stand with your feet hip-width apart. Slowly rise up onto your toes, then lower back down. Repeat 15 times. As you get stronger, try doing this exercise on one leg at a time.</p>
          </div>
        </div>

        <h2>5. Quadriceps Sets (The Foundation)</h2>
        <p>Lie on your back with your legs straight. Push the back of your knee down into the floor by tightening your thigh muscle. Hold for 5 seconds, then relax. This simple exercise is crucial for maintaining quad strength without joint movement.</p>
        
        <h2>6. Seated Knee Extensions</h2>
        <p>Sit in a sturdy chair. Slowly straighten one leg until it's horizontal. Hold for 3 seconds, then slowly lower. This helps build the vastus medialis, the muscle just above the knee that provides stability.</p>

        <h2>7. Side-Lying Leg Raises</h2>
        <p>Lie on your side with your legs stacked. Lift your top leg toward the ceiling, keeping it straight and slightly behind your hip. This strengthens the hip abductors, which are vital for proper knee alignment.</p>

        <h2>8. Step-Ups</h2>
        <p>Use a sturdy step or platform about 6 inches high. Step up with one foot, then bring the other foot up to meet it. Step down with the same foot you started with. Repeat 10 times for each leg.</p>
        
        <h2 class="text-red-700">Safety Precautions: The "Dos and Don'ts"</h2>
        <ul class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li>✅ <strong>Do:</strong> Warm up with a 5-minute walk before starting.</li>
          <li>✅ <strong>Do:</strong> Use smooth, controlled movements.</li>
          <li>❌ <strong>Don't:</strong> Lock your knees during any exercise.</li>
          <li>❌ <strong>Don't:</strong> Continue if you feel sharp, stabbing pain.</li>
        </ul>
        
        <p>Consistency is key – aim to do these exercises daily for the best results. Remember to consult with your healthcare provider before starting any new exercise program, especially if you have existing knee problems.</p>
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
        <p>Preparing for orthopedic surgery involves both physical and mental preparation. The better prepared you are, the smoother your recovery will be. This guide outlines everything you need to do from 4 weeks out until the morning of your procedure.</p>
        
        <h2>Pre-Operative Medical Preparation</h2>
        <p>Your surgeon will provide specific instructions, but here are common pre-operative requirements:</p>
        
        <ul>
          <li><strong>Medical Clearances:</strong> Evaluations and tests (blood work, EKG, chest X-ray) as required.</li>
          <li><strong>Medication Review:</strong> Discuss all supplements and medications. You'll likely need to stop blood thinners and anti-inflammatories 7-10 days before surgery.</li>
          <li><strong>Smoking Cessation:</strong> Smoking significantly delays bone and wound healing. Stopping even 2 weeks before can make a difference.</li>
        </ul>
        
        <div class="bg-green-50 p-6 rounded-xl my-8">
          <h3 class="text-green-900 mt-0">Home Recovery Station Checklist</h3>
          <p>Set this up on the main floor to avoid stairs for the first few days:</p>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <li>🪑 Firm chair with armrests (no low sofas)</li>
            <li>🔌 Extension cords for phone/laptop chargers</li>
            <li>💊 Medication schedule and pill organizer</li>
            <li>🥤 Reusable water bottle and healthy snacks</li>
            <li>📚 Books, tablet, and remote within reach</li>
          </ul>
        </div>

        <h2>Day Before Surgery Checklist</h2>
        <ul>
          <li>Pack your bag with comfortable, loose-fitting clothes.</li>
          <li>Shower with prescribed antibacterial soap (like Hibiclens) if instructed.</li>
          <li><strong>Fasting:</strong> Do not eat or drink anything after midnight (this includes water, gum, and mints).</li>
          <li>Confirm your ride home and have their number handy.</li>
        </ul>
        
        <h2>Mental Preparation</h2>
        <p>It's normal to feel anxious. Remember that modern orthopedic procedures are highly standardized and safe. Practice deep breathing exercises and focus on the mobility you'll gain after recovery.</p>
        
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
        
        <h2>The R.I.C.E Principle for Immediate Care</h2>
        <p>If an injury occurs, use these steps immediately until you can see an orthopedic specialist:</p>
        <div class="bg-gray-100 p-6 rounded-lg my-6">
          <p><strong>R - Rest:</strong> Stop the activity immediately and protect the injured area.</p>
          <p><strong>I - Ice:</strong> Apply ice for 15-20 minutes every 2-3 hours during the first 48 hours.</p>
          <p><strong>C - Compression:</strong> Use an elastic bandage to help reduce swelling.</p>
          <p><strong>E - Elevation:</strong> Keep the injured limb elevated above the level of your heart.</p>
        </div>

        <h2>Top Prevention Strategies</h2>
        <p>Implement these evidence-based strategies to reduce your risk of sports injuries:</p>
        
        <h3>1. Dynamic Warm-Up</h3>
        <p>Static stretching (holding a stretch) before activity can actually weaken muscles. Instead, use dynamic movements like lunges, high knees, and arm circles to "wake up" your muscles.</p>
        
        <h3>2. Cross-Training</h3>
        <p>Repetitive use injuries are common. If you're a runner, include swimming or cycling in your routine to reduce the constant impact on your knees and hips while maintaining cardiovascular fitness.</p>
        
        <h3>3. Focus on Core Stability</h3>
        <p>A strong core provides a stable base for your limbs. Many ACL injuries occur because of poor hip and core control during landing or pivoting.</p>
        
        <h2>When to See an Orthopedic Surgeon</h2>
        <p>Not every ache requires surgery, but you should seek professional advice if you experience:</p>
        <ul>
          <li>Inability to bear weight on the joint</li>
          <li>Joint instability or "giving way"</li>
          <li>Numbness or tingling in the extremity</li>
          <li>Significant swelling that occurs within 1-2 hours of injury</li>
        </ul>
        
        <p>By implementing these prevention strategies, you can significantly reduce your risk of sports injuries while maintaining or improving your performance.</p>
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
        
        <h2>Comparison at a Glance</h2>
        <div class="overflow-x-auto my-8">
          <table class="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr class="bg-gray-100">
                <th class="border border-gray-200 px-4 py-2 text-left">Feature</th>
                <th class="border border-gray-200 px-4 py-2 text-left">Arthroscopy (Keyhole)</th>
                <th class="border border-gray-200 px-4 py-2 text-left">Open Surgery</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border border-gray-200 px-4 py-2 font-semibold">Incision Size</td>
                <td class="border border-gray-200 px-4 py-2">Small (5-10mm)</td>
                <td class="border border-gray-200 px-4 py-2">Large (5-15cm)</td>
              </tr>
              <tr>
                <td class="border border-gray-200 px-4 py-2 font-semibold">Recovery Time</td>
                <td class="border border-gray-200 px-4 py-2">Fast (2-4 weeks)</td>
                <td class="border border-gray-200 px-4 py-2">Moderate (6-12 weeks)</td>
              </tr>
              <tr>
                <td class="border border-gray-200 px-4 py-2 font-semibold">Hospital Stay</td>
                <td class="border border-gray-200 px-4 py-2">Outpatient (Same day)</td>
                <td class="border border-gray-200 px-4 py-2">1-3 days usually</td>
              </tr>
              <tr>
                <td class="border border-gray-200 px-4 py-2 font-semibold">Infection Risk</td>
                <td class="border border-gray-200 px-4 py-2">Minimal</td>
                <td class="border border-gray-200 px-4 py-2">Slightly Higher</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>What is Arthroscopic Surgery?</h2>
        <p>Arthroscopic surgery involves making small incisions through which a tiny camera (arthroscope) and specialized instruments are inserted. This approach is excellent for meniscus repairs, ACL reconstructions, and shoulder labrum repairs.</p>
        
        <h2>When Open Surgery is Necessary</h2>
        <p>Despite advances in arthroscopic techniques, some procedures still require open surgery, such as complex fractures, joint replacements, or when the surgeon needs a full 360-degree view of the joint for complex reconstruction.</p>
        
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
        <p>Arthritis is one of the most common chronic conditions affecting millions of people worldwide. It encompasses over 100 different conditions that affect joints, surrounding tissues, and other connective tissues. Understanding the different types and recognizing symptoms early is key to successful management.</p>
        
        <h2>The Big Three: Common Types</h2>
        <p>While there are many types, 90% of cases fall into these categories:</p>
        
        <ul>
          <li><strong>Osteoarthritis (OA):</strong> The "wear and tear" type where cartilage wears away.</li>
          <li><strong>Rheumatoid Arthritis (RA):</strong> An inflammatory autoimmune condition where the body attacks its own joints.</li>
          <li><strong>Gout:</strong> Caused by uric acid crystals, often starting in the big toe.</li>
        </ul>
        
        <h2>Management & Lifestyle Tips</h2>
        <p>While arthritis is chronic, it can be managed effectively without always resorting to surgery:</p>
        
        <h3>1. Weight Management</h3>
        <p>Losing just 5-10 pounds can significantly reduce the pressure on your weight-bearing joints like the knees and hips.</p>
        
        <h3>2. Low-Impact Exercise</h3>
        <p>Activities like swimming, water aerobics, and cycling keep joints moving without the impact of running.</p>
        
        <h3>3. Anti-Inflammatory Diet</h3>
        <p>Foods rich in Omega-3 fatty acids (like fish and walnuts) and antioxidants (like berries and leafy greens) can help reduce systemic inflammation.</p>

        <div class="bg-red-50 p-6 rounded-lg my-8 border-l-4 border-red-600">
          <h3 class="text-red-900 mt-0">When to See a Specialist</h3>
          <p>If you experience joint swelling that lasts more than 3 days, or severe joint pain that interferes with sleep, it's time for a professional evaluation.</p>
        </div>
        
        <p>Early diagnosis and treatment are crucial for managing arthritis effectively. If you experience persistent joint symptoms, consult with a healthcare professional for proper evaluation and management.</p>
      </div>
    `
  }
]
