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
    image:
      'https://readdy.ai/api/search-image?query=futuristic%20artificial%20intelligence%20neural%20network%20visualization%20with%20glowing%20nodes%20interconnected%20pathways%20digital%20brain%20structure%20luminous%20synapses%20flowing%20data%20streams%20in%20cyan%20and%20teal%20colors%20against%20dark%20background%20with%20depth%20and%20volumetric%20lighting&width=800&height=480&seq=cat-ai-002&orientation=landscape',
  },
  {
    slug: 'blockchain',
    label: 'Blockchain',
    icon: '⛓',
    articleCategory: 'Blockchain',
    description:
      'Distributed ledger technology, smart contracts, DeFi, and decentralized applications.',
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
    description:
      'Connected devices, edge processing, smart systems, and industrial IoT solutions.',
    image:
      'https://readdy.ai/api/search-image?query=internet%20of%20things%20network%20visualization%20with%20connected%20smart%20devices%20sensors%20processors%20glowing%20data%20pathways%20in%20emerald%20and%20green%20colors%20against%20dark%20background%20with%20circuit%20patterns%20and%20edge%20computing%20nodes&width=800&height=480&seq=cat-iot-002&orientation=landscape',
  },
  {
    slug: 'cybersecurity',
    label: 'Cybersecurity',
    icon: '🔒',
    articleCategory: 'Security',
    description:
      'Threat detection, encryption, zero trust architecture, and security best practices.',
    image:
      'https://readdy.ai/api/search-image?query=cybersecurity%20digital%20fortress%20visualization%20with%20protective%20shields%20encryption%20locks%20firewall%20barriers%20glowing%20security%20nodes%20in%20rose%20and%20pink%20tones%20against%20dark%20matrix%20background%20with%20binary%20code%20streams&width=800&height=480&seq=cat-security-002&orientation=landscape',
  },
  {
    slug: 'ar-vr',
    label: 'AR/VR',
    icon: '🥽',
    articleCategory: 'AR/VR',
    description:
      'Augmented reality, virtual reality, spatial computing, and immersive experiences.',
    image:
      'https://readdy.ai/api/search-image?query=virtual%20reality%20metaverse%20visualization%20with%20immersive%20digital%20worlds%20holographic%20interfaces%20floating%20UI%20elements%20glowing%20portals%20in%20cyan%20and%20teal%20colors%20against%20dark%20space%20with%20depth%20layers%20and%20volumetric%20effects&width=800&height=480&seq=cat-arvr-002&orientation=landscape',
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
