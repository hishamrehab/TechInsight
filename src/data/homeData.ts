export const heroImageUrl =
  'https://readdy.ai/api/search-image?query=mesmerizing%20abstract%20digital%20technology%20visualization%20featuring%20flowing%20luminous%20data%20streams%20interconnected%20network%20nodes%20glowing%20hexagonal%20patterns%20and%20dynamic%20energy%20waves%20in%20vibrant%20cyan%20teal%20and%20electric%20blue%20colors%20against%20deep%20dark%20gradient%20background%20with%20particle%20effects%20light%20trails%20bokeh%20elements%20and%20futuristic%20holographic%20interface%20creating%20immersive%20high%20tech%20atmosphere%20with%20depth%20layers%20volumetric%20lighting%20and%20cinematic%20composition%20perfect%20for%20cutting%20edge%20technology%20platform&width=1920&height=1080&seq=hero-tech-streams-v4-004&orientation=landscape'

export const categoryPills = [
  { icon: '▦', label: 'All Topics', path: '/categories' },
  { icon: '🤖', label: 'Artificial Intelligence', path: '/categories/ai' },
  { icon: '⛓', label: 'Blockchain', path: '/categories/blockchain' },
  { icon: '⚙', label: 'Quantum Computing', path: '/categories/quantum' },
  { icon: '📶', label: 'IoT', path: '/categories/iot' },
  { icon: '🔒', label: 'Cybersecurity', path: '/categories/cybersecurity' },
  { icon: '🥽', label: 'AR/VR', path: '/categories/ar-vr' },
  { icon: '🧬', label: 'BioTech', path: '/categories/biotech' },
]

export const stats = [
  { value: '3.2M+', label: 'Active Readers' },
  { value: '1,850+', label: 'Published Articles' },
  { value: '75+', label: 'Tech Experts' },
  { value: '98%', label: 'Satisfaction Rate' },
]

export const featuredStories = [
  {
    id: 'quantum-breakthrough',
    title: 'Quantum Chips Reach New Stability Milestone',
    excerpt: 'Researchers cut error rates significantly, bringing practical quantum workloads closer.',
    image:
      'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
    category: 'Quantum',
    readTime: '7 min read',
  },
  {
    id: 'ai-agents',
    title: 'AI Agents Are Reshaping Software Teams',
    excerpt: 'From QA to deployment, autonomous assistants now accelerate end-to-end workflows.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
    category: 'AI & ML',
    readTime: '5 min read',
  },
  {
    id: 'cybersecurity-shift',
    title: 'Zero Trust Becomes the New Default',
    excerpt: 'Enterprises are moving beyond perimeter security with identity-first access control.',
    image:
      'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
    category: 'Security',
    readTime: '6 min read',
  },
]

export const latestUpdates = [
  {
    id: 'iot-edge',
    title: 'Edge AI in Smart Cities Expands Rapidly',
    excerpt: 'Municipal deployments now process traffic and safety data locally for faster response.',
    image:
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80',
    date: 'Apr 15, 2026',
  },
  {
    id: 'blockchain-payments',
    title: 'Blockchain Settlement Times Drop Again',
    excerpt: 'New layer-2 payment rails are handling high-volume merchant traffic with lower fees.',
    image:
      'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
    date: 'Apr 14, 2026',
  },
]

export const missionCards = [
  {
    icon: '👥',
    title: '2M+ Readers',
    text: 'A global community of tech enthusiasts, developers, and innovators who trust our insights to stay ahead of the curve.',
  },
  {
    icon: '📰',
    title: '1,850+ Articles',
    text: 'Comprehensive coverage of AI, blockchain, quantum computing, and emerging technologies that shape our future.',
  },
  {
    icon: '⭐',
    title: '98% Satisfaction',
    text: 'Our readers consistently rate our content as accurate, insightful, and essential for staying informed in tech.',
  },
]

export const testimonials = [
  {
    initials: 'SC',
    name: 'Dr. Sarah Chen',
    role: 'AI Research Lead at DeepMind',
    text: '"TechInsight provides the most comprehensive and accurate coverage of AI developments. Their deep dives into neural architectures and machine learning algorithms are essential reading for anyone in the field."',
  },
  {
    initials: 'MR',
    name: 'Marcus Rodriguez',
    role: 'Blockchain Architect at Ethereum Foundation',
    text: '"The quality of blockchain analysis here is unmatched. They break down complex DeFi protocols and smart contract architectures in ways that are both accessible and technically rigorous."',
  },
  {
    initials: 'PP',
    name: 'Dr. Priya Patel',
    role: 'Quantum Computing Researcher at IBM Quantum',
    text: '"Finally, a tech publication that understands quantum computing beyond the hype. Their coverage of quantum algorithms and error correction is spot-on and incredibly valuable for researchers."',
  },
]

export type RecruiterTrack = {
  id: string
  title: string
  audience: 'Recruiter' | 'Hiring Manager' | 'Engineering Lead'
  summary: string
  outcomes: string[]
  ctaLabel: string
  ctaPath: string
}

export const recruiterTracks: RecruiterTrack[] = [
  {
    id: 'delivery-readiness',
    title: 'Product Delivery Readiness',
    audience: 'Hiring Manager',
    summary: 'Demonstrates how features move from discovery to deployment with clear implementation ownership.',
    outcomes: ['Clear release workflow', 'Production-focused UI standards', 'Reliability-first experience design'],
    ctaLabel: 'View Articles',
    ctaPath: '/articles',
  },
  {
    id: 'architecture-thinking',
    title: 'Architecture and Scale Thinking',
    audience: 'Engineering Lead',
    summary: 'Shows evidence of modular frontend architecture, route-level separation, and reusable UI patterns.',
    outcomes: ['Reusable component strategy', 'Scalable routing setup', 'Readable and typed codebase'],
    ctaLabel: 'Explore Categories',
    ctaPath: '/categories',
  },
  {
    id: 'team-impact',
    title: 'Cross-Team Impact Communication',
    audience: 'Recruiter',
    summary: 'Highlights communication quality through clear product messaging, polished UI, and user-centered structure.',
    outcomes: ['Business-aligned storytelling', 'Strong first-impression UX', 'Portfolio-ready presentation'],
    ctaLabel: 'About This Project',
    ctaPath: '/about',
  },
]

export const enterpriseHighlights = [
  {
    title: 'Executive-ready dashboard UI',
    detail: 'Structured visual hierarchy with metric cards, content sections, and crisp CTAs for quick business scanning.',
  },
  {
    title: 'Interactive content discovery',
    detail: 'Role-based track filtering, category chips, and search-first experience improve navigation across topics.',
  },
  {
    title: 'Production-minded UX decisions',
    detail: 'Form validation, graceful states, and reusable styles mirror standards used in enterprise product teams.',
  },
]
