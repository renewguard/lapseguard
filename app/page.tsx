import { Hero } from '@/components/sections/hero';
import { Problem } from '@/components/sections/problem';
import { Solution } from '@/components/sections/solution';
import { Features } from '@/components/sections/features';
import { DashboardPreview } from '@/components/sections/dashboard-preview';
import { Industries } from '@/components/sections/industries';
import { Pricing } from '@/components/sections/pricing';
import { FAQ } from '@/components/sections/faq';
import { Contact } from '@/components/sections/contact';
import { FinalCTA } from '@/components/sections/final-cta';

export default function HomePage() {
  return (
    <>
      <Hero />
      {/*
        SocialProof (logos, star ratings, customer testimonials, usage stats) is
        intentionally disabled pre-launch — that content was placeholder/fabricated
        and shouldn't go live until you have real customers, reviews, and numbers.
        Re-import SocialProof from '@/components/sections/social-proof' and drop it
        back in here once you do.
      */}
      <Problem />
      <Solution />
      <Features />
      <DashboardPreview />
      <Industries />
      <Pricing />
      <FAQ />
      <Contact />
      <FinalCTA />
    </>
  );
}
