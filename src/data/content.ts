import type { Article, Category } from '../types/api'

export const articleCategories: string[] = ['All Articles', 'AI & ML', 'Blockchain', 'Quantum', 'Security', 'IoT', 'AR/VR']

export const categories: Category[] = [
  {
    slug: 'ai',
    label: 'Artificial Intelligence',
    icon: '🤖',
    articleCategory: 'AI & ML',
    description: 'Machine learning, deep learning, neural networks, and AI applications transforming industries.',
    image:
      'https://readdy.ai/api/search-image?query=futuristic%20artificial%20intelligence%20neural%20network%20visualization%20with%20glowing%20nodes%20interconnected%20pathways%20digital%20brain%20structure%20luminous%20synapses%20flowing%20data%20streams%20in%20cyan%20and%20teal%20colors%20against%20dark%20background%20with%20depth%20and%20volumetric%20lighting&width=800&height=480&seq=cat-ai-002&orientation=landscape',
  },
  {
    slug: 'blockchain',
    label: 'Blockchain',
    icon: '⛓',
    articleCategory: 'Blockchain',
    description: 'Distributed ledger technology, smart contracts, DeFi, and decentralized applications.',
    image:
      'https://readdy.ai/api/search-image?query=abstract%20blockchain%20network%20visualization%20with%20interconnected%20golden%20blocks%20glowing%20chain%20links%20distributed%20ledger%20nodes%20luminous%20cryptographic%20patterns%20in%20warm%20amber%20and%20orange%20tones%20against%20dark%20background%20with%20depth%20layers&width=800&height=480&seq=cat-blockchain-002&orientation=landscape',
  },
  {
    slug: 'quantum',
    label: 'Quantum Computing',
    icon: '⚙',
    articleCategory: 'Quantum',
    description: 'Quantum mechanics, qubits, quantum algorithms, and the future of computation.',
    image:
      'https://readdy.ai/api/search-image?query=quantum%20computing%20visualization%20with%20spinning%20qubits%20entangled%20particles%20wave%20functions%20superposition%20states%20glowing%20atomic%20structures%20in%20cyan%20and%20teal%20colors%20against%20deep%20space%20background%20with%20particle%20effects%20and%20light%20trails&width=800&height=480&seq=cat-quantum-002&orientation=landscape',
  },
  {
    slug: 'iot',
    label: 'IoT',
    icon: '📶',
    articleCategory: 'IoT',
    description: 'Connected devices, edge processing, smart systems, and industrial IoT solutions.',
    image:
      'https://readdy.ai/api/search-image?query=internet%20of%20things%20network%20visualization%20with%20connected%20smart%20devices%20sensors%20processors%20glowing%20data%20pathways%20in%20emerald%20and%20green%20colors%20against%20dark%20background%20with%20circuit%20patterns%20and%20edge%20computing%20nodes&width=800&height=480&seq=cat-iot-002&orientation=landscape',
  },
  {
    slug: 'cybersecurity',
    label: 'Cybersecurity',
    icon: '🔒',
    articleCategory: 'Security',
    description: 'Threat detection, encryption, zero trust architecture, and security best practices.',
    image:
      'https://readdy.ai/api/search-image?query=cybersecurity%20digital%20fortress%20visualization%20with%20protective%20shields%20encryption%20locks%20firewall%20barriers%20glowing%20security%20nodes%20in%20rose%20and%20pink%20tones%20against%20dark%20matrix%20background%20with%20binary%20code%20streams&width=800&height=480&seq=cat-security-002&orientation=landscape',
  },
  {
    slug: 'ar-vr',
    label: 'AR/VR',
    icon: '🥽',
    articleCategory: 'AR/VR',
    description: 'Augmented reality, virtual reality, spatial computing, and immersive experiences.',
    image:
      'https://readdy.ai/api/search-image?query=virtual%20reality%20metaverse%20visualization%20with%20immersive%20digital%20worlds%20holographic%20interfaces%20floating%20UI%20elements%20glowing%20portals%20in%20cyan%20and%20teal%20colors%20against%20dark%20space%20with%20depth%20layers%20and%20volumetric%20effects&width=800&height=480&seq=cat-arvr-002&orientation=landscape',
  },
  {
    slug: 'biotech',
    label: 'BioTech',
    icon: '🧬',
    articleCategory: null,
    description: 'Biotechnology, synthetic biology, health innovation, and research breakthroughs shaping the future.',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
  },
]

export const articles: Article[] = [
  {
    id: 1,
    title: 'The Rise of Generative AI: Transforming Creative Industries',
    excerpt: 'Explore how generative AI models are revolutionizing content creation and design.',
    category: 'AI & ML',
    readTime: '8 min read',
    author: 'Dr. Sarah Mitchell',
    authorTag: 'DSM',
    date: 'Jan 15, 2024',
    image:
      'https://readdy.ai/api/search-image?query=futuristic%20artificial%20intelligence%20neural%20network%20visualization%20with%20glowing%20orange%20and%20amber%20nodes%20connected%20by%20flowing%20data%20streams%20on%20clean%20white%20background%20representing%20machine%20learning%20and%20generative%20AI%20technology&width=800&height=600&seq=article-ai-001&orientation=landscape',
    tags: ['Technology', 'Innovation', 'AI', 'Future'],
    quote: 'The future belongs to teams who treat AI as a creative partner, not just another software feature.',
    sections: [
      { heading: 'Introduction', paragraph: 'Generative AI is shifting how teams brainstorm and produce content.' },
      { heading: 'Key Developments', paragraph: 'Modern models offer stronger context understanding and output quality.' },
      { heading: 'Industry Impact', paragraph: 'Marketing, design, and product teams now use AI to accelerate delivery.' },
    ],
  },
  {
    id: 2,
    title: 'Blockchain Beyond Cryptocurrency: Real-World Applications',
    excerpt: 'How blockchain is applied in supply chain, healthcare, and digital identity.',
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
      { heading: 'Practical Adoption', paragraph: 'Enterprises focus on traceability and auditability.' },
      { heading: 'Architecture Choices', paragraph: 'Permissioned and hybrid models balance transparency and privacy.' },
      { heading: 'What Is Next', paragraph: 'Interoperability will improve production use cases.' },
    ],
  },
  {
    id: 3,
    title: 'Quantum Computing: Breaking the Classical Barrier',
    excerpt: 'Recent breakthroughs and potential in cryptography and optimization.',
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
      { heading: 'Current Landscape', paragraph: 'Error correction and hardware reliability remain core challenges.' },
      { heading: 'Enterprise Relevance', paragraph: 'Organizations run pilots to test business value.' },
      { heading: 'Long-Term Outlook', paragraph: 'The next phase centers on tooling and hybrid orchestration.' },
    ],
  },
  {
    id: 4,
    title: 'IoT Security: Protecting the Connected World',
    excerpt: 'Security challenges and best practices for connected ecosystems.',
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
      { heading: 'Threat Surface Growth', paragraph: 'Every new sensor and gateway adds attack vectors.' },
      { heading: 'Hardening Strategy', paragraph: 'Signed firmware and least-privilege controls reduce risk.' },
      { heading: 'Operational Readiness', paragraph: 'Continuous monitoring is essential for distributed fleets.' },
    ],
  },
]
