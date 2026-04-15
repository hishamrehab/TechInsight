import { CategoryBar } from '../components/home/CategoryBar'
import { ContentSections } from '../components/home/ContentSections'
import { HeroSection } from '../components/home/HeroSection'
import { MissionSection } from '../components/home/MissionSection'
import { NewsletterSection } from '../components/home/NewsletterSection'
import { TestimonialsSection } from '../components/home/TestimonialsSection'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryBar />
      <ContentSections />
      <MissionSection />
      <TestimonialsSection />
      <NewsletterSection />
    </>
  )
}
