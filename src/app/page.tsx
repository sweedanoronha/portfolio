import { Header } from '@/components/header';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { SkillsSection } from '@/components/sections/skills-section';
import { SideProjectsSection } from '@/components/sections/side-projects-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection/>
        <AboutSection />
        <SkillsSection />
        <SideProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
