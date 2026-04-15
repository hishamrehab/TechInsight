export type ArticleCategory = 'AI & ML' | 'Blockchain' | 'Quantum' | 'Security' | 'IoT' | 'AR/VR'

export type ArticleSection = {
  heading: string
  paragraph: string
}

export type Article = {
  id: number
  title: string
  excerpt: string
  category: ArticleCategory
  readTime: string
  author: string
  authorTag: string
  date: string
  image: string
  tags: string[]
  sections: ArticleSection[]
  quote: string
}

export const articleCategories = ['All Articles', 'AI & ML', 'Blockchain', 'Quantum', 'Security', 'IoT', 'AR/VR'] as const

export const articles: Article[] = [
  {
    id: 1,
    title: 'The Rise of Generative AI: Transforming Creative Industries',
    excerpt:
      'Explore how generative AI models like GPT-4 and DALL-E are revolutionizing content creation, design, and artistic expression across multiple industries.',
    category: 'AI & ML',
    readTime: '8 min read',
    author: 'Dr. Sarah Mitchell',
    authorTag: 'DSM',
    date: 'Jan 15, 2024',
    image:
      'https://readdy.ai/api/search-image?query=futuristic%20artificial%20intelligence%20neural%20network%20visualization%20with%20glowing%20orange%20and%20amber%20nodes%20connected%20by%20flowing%20data%20streams%20on%20clean%20white%20background%20representing%20machine%20learning%20and%20generative%20AI%20technology&width=800&height=600&seq=article-ai-001&orientation=landscape',
    tags: ['Technology', 'Innovation', 'AI', 'Future'],
    quote:
      'The future belongs to teams who treat AI as a creative partner, not just another software feature.',
    sections: [
      {
        heading: 'Introduction',
        paragraph:
          'Generative AI is shifting how teams brainstorm, prototype, and produce content by reducing repetitive effort and unlocking faster experimentation.',
      },
      {
        heading: 'Key Developments',
        paragraph:
          'Large language and image models now offer stronger context understanding, higher output quality, and easier integration into existing workflows.',
      },
      {
        heading: 'Industry Impact',
        paragraph:
          'Marketing, design, media, and product teams are using AI to scale ideation and shorten delivery cycles while keeping human oversight central.',
      },
    ],
  },
  {
    id: 2,
    title: 'Blockchain Beyond Cryptocurrency: Real-World Applications',
    excerpt:
      'Discover how blockchain technology is being applied in supply chain management, healthcare, voting systems, and digital identity verification.',
    category: 'Blockchain',
    readTime: '10 min read',
    author: 'Marcus Chen',
    authorTag: 'MC',
    date: 'Jan 14, 2024',
    image:
      'https://readdy.ai/api/search-image?query=abstract%20blockchain%20network%20with%20interconnected%20orange%20glowing%20blocks%20and%20chains%20on%20minimalist%20white%20background%20representing%20decentralized%20technology%20and%20distributed%20ledger%20systems&width=800&height=600&seq=article-blockchain-001&orientation=landscape',
    tags: ['Blockchain', 'Web3', 'Enterprise'],
    quote: 'Reliable distributed records are becoming infrastructure, not hype.',
    sections: [
      {
        heading: 'Practical Adoption',
        paragraph:
          'Enterprises are focusing on traceability and auditability, using blockchain where shared trust and tamper resistance matter most.',
      },
      {
        heading: 'Architecture Choices',
        paragraph:
          'Permissioned and hybrid models are becoming the default for organizations balancing transparency, privacy, and throughput.',
      },
      {
        heading: 'What Is Next',
        paragraph:
          'As interoperability improves, blockchain networks will connect with legacy systems more smoothly and support broader production use cases.',
      },
    ],
  },
  {
    id: 3,
    title: 'Quantum Computing: Breaking the Classical Barrier',
    excerpt:
      'An in-depth look at recent quantum computing breakthroughs and their potential to solve complex problems in cryptography, drug discovery, and optimization.',
    category: 'Quantum',
    readTime: '12 min read',
    author: 'Dr. Emily Zhang',
    authorTag: 'DEZ',
    date: 'Jan 13, 2024',
    image:
      'https://readdy.ai/api/search-image?query=quantum%20computing%20visualization%20with%20abstract%20orange%20and%20amber%20quantum%20particles%20and%20wave%20patterns%20on%20clean%20white%20background%20representing%20quantum%20mechanics%20and%20computational%20power&width=800&height=600&seq=article-quantum-001&orientation=landscape',
    tags: ['Quantum', 'Research', 'Computing'],
    quote: 'Quantum advantage is moving from labs to targeted, high-value workloads.',
    sections: [
      {
        heading: 'Current Landscape',
        paragraph:
          'Hardware reliability and error correction remain key challenges, but progress in qubit quality is making benchmark improvements more meaningful.',
      },
      {
        heading: 'Enterprise Relevance',
        paragraph:
          'Organizations are running pilots in optimization and chemistry to understand where quantum accelerators can add measurable business value.',
      },
      {
        heading: 'Long-Term Outlook',
        paragraph:
          'The next phase centers on software tooling and hybrid orchestration that combines classical and quantum systems effectively.',
      },
    ],
  },
  {
    id: 4,
    title: 'IoT Security: Protecting the Connected World',
    excerpt:
      'Learn about the latest security challenges in IoT ecosystems and best practices for securing smart devices, industrial systems, and connected infrastructure.',
    category: 'IoT',
    readTime: '9 min read',
    author: 'James Rodriguez',
    authorTag: 'JR',
    date: 'Jan 12, 2024',
    image:
      'https://readdy.ai/api/search-image?query=internet%20of%20things%20network%20with%20connected%20smart%20devices%20and%20orange%20glowing%20wireless%20signals%20on%20white%20background%20representing%20IoT%20ecosystem%20and%20device%20connectivity&width=800&height=600&seq=article-iot-001&orientation=landscape',
    tags: ['IoT', 'Security', 'Infrastructure'],
    quote: 'Connected devices expand capability and risk at the same time.',
    sections: [
      {
        heading: 'Threat Surface Growth',
        paragraph:
          'Every new sensor and gateway creates additional attack vectors, making visibility and segmentation core requirements for secure IoT programs.',
      },
      {
        heading: 'Hardening Strategy',
        paragraph:
          'Secure boot, signed firmware, and least-privilege access control provide a practical baseline for reducing exploitable weaknesses.',
      },
      {
        heading: 'Operational Readiness',
        paragraph:
          'Continuous monitoring and patch governance are essential for maintaining security across long-lived, distributed device fleets.',
      },
    ],
  },
  {
    id: 5,
    title: 'Zero Trust Architecture: The Future of Cybersecurity',
    excerpt:
      'Understanding zero trust security models and how organizations are implementing them to protect against modern cyber threats and data breaches.',
    category: 'Security',
    readTime: '11 min read',
    author: 'Lisa Anderson',
    authorTag: 'LA',
    date: 'Jan 11, 2024',
    image:
      'https://readdy.ai/api/search-image?query=cybersecurity%20shield%20with%20orange%20glowing%20protection%20layers%20and%20digital%20lock%20symbols%20on%20clean%20white%20background%20representing%20zero%20trust%20security%20and%20data%20protection&width=800&height=600&seq=article-security-001&orientation=landscape',
    tags: ['Security', 'Zero Trust', 'Enterprise'],
    quote: 'Trust must be continuously validated, never assumed.',
    sections: [
      {
        heading: 'Core Principle',
        paragraph:
          'Zero trust replaces perimeter assumptions with strict identity, device, and context verification for every access request.',
      },
      {
        heading: 'Implementation Path',
        paragraph:
          'Most teams start with identity modernization and micro-segmentation, then extend controls to data and workload access policies.',
      },
      {
        heading: 'Business Impact',
        paragraph:
          'When executed well, zero trust improves breach resilience and supports compliance goals without blocking productivity.',
      },
    ],
  },
  {
    id: 6,
    title: 'Metaverse Development: Building Virtual Worlds',
    excerpt:
      'Explore the technologies powering the metaverse, from VR/AR hardware to spatial computing platforms and decentralized virtual economies.',
    category: 'AR/VR',
    readTime: '10 min read',
    author: 'David Kim',
    authorTag: 'DK',
    date: 'Jan 10, 2024',
    image:
      'https://readdy.ai/api/search-image?query=virtual%20reality%20metaverse%20environment%20with%20orange%20and%20amber%20glowing%20digital%20landscapes%20and%20VR%20headset%20elements%20on%20white%20background%20representing%20immersive%20technology%20and%20virtual%20worlds&width=800&height=600&seq=article-vr-001&orientation=landscape',
    tags: ['AR/VR', 'Metaverse', 'Product'],
    quote: 'Immersive products win when utility and comfort meet.',
    sections: [
      {
        heading: 'Platform Foundations',
        paragraph:
          'Spatial engines, real-time networking, and identity systems form the technical foundation for persistent multi-user virtual spaces.',
      },
      {
        heading: 'Creator Economy',
        paragraph:
          'Tooling for world building and digital commerce is expanding, giving creators more ways to publish, monetize, and iterate quickly.',
      },
      {
        heading: 'User Adoption',
        paragraph:
          'Mainstream adoption depends on compelling everyday experiences, lower hardware friction, and clear value beyond novelty.',
      },
    ],
  },
]
