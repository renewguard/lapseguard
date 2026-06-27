'use client';

import { motion } from 'framer-motion';
import { Container, SectionHeading } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { FEATURES } from '@/lib/constants';

export function Features() {
  return (
    <section id="features" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Everything in one place"
          title="Built for every renewal you're responsible for"
          description="One workspace for licenses, certifications, permits, and insurance — instead of four different systems no one checks."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {FEATURES.map((f) => {
            const Icon = f.icon;
            return (
              <motion.div key={f.title} variants={fadeUp}>
                <Card className="group h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600 transition-colors duration-300 group-hover:bg-brand-600 group-hover:text-white dark:bg-brand-900/40 dark:text-brand-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold text-ink-900 dark:text-white">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-500 dark:text-ink-300">
                    {f.description}
                  </p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
