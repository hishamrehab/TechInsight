import type { ArticleCategory } from './articlesData'

export type CategoryItem = {
  slug: string
  label: string
  icon: string
  description: string
  image: string
  articleCategory: ArticleCategory | null
}

export const categories: CategoryItem[] = [
  {
    slug: 'ai',
    label: 'Artificial Intelligence',
    icon: '🤖',
    articleCategory: 'AI & ML',
    description:
      'Machine learning, deep learning, neural networks, and AI applications transforming industries.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'blockchain',
    label: 'Blockchain',
    icon: '⛓',
    articleCategory: 'Blockchain',
    description:
      'Distributed ledger technology, smart contracts, DeFi, and decentralized applications.',
    image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'quantum',
    label: 'Quantum Computing',
    icon: '⚙',
    articleCategory: 'Quantum',
    description: 'Quantum mechanics, qubits, quantum algorithms, and the future of computation.',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'iot',
    label: 'IoT',
    icon: '📶',
    articleCategory: 'IoT',
    description:
      'Connected devices, edge processing, smart systems, and industrial IoT solutions.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'cybersecurity',
    label: 'Cybersecurity',
    icon: '🔒',
    articleCategory: 'Security',
    description:
      'Threat detection, encryption, zero trust architecture, and security best practices.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'ar-vr',
    label: 'AR/VR',
    icon: '🥽',
    articleCategory: 'AR/VR',
    description:
      'Augmented reality, virtual reality, spatial computing, and immersive experiences.',
    image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80',
  },
  {
    slug: 'biotech',
    label: 'BioTech',
    icon: '🧬',
    articleCategory: null,
    description:
      'Biotechnology, synthetic biology, health innovation, and research breakthroughs shaping the future.',
    image:
      'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=1200&q=80',
  },
]
