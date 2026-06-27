'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Card } from '@/components/ui/card';
import { Avatar } from '@/components/ui/avatar';
import { fadeUp, staggerContainer, viewportOnce } from '@/lib/animations';
import { COMPANY_LOGOS, STATS, TESTIMONIALS } from '@/lib/constants';

export function SocialProof() {
  return (
    <section className="border-y border-ink-100 bg-ink-50/40 py-16 dark:border-ink-800 dark:bg-ink-900/40">
      <Container>
        <p className="text-center text-xs font-semibold uppercase tracking-wider text-ink-400">
          Trusted by licensed teams across the country
        </p>

        <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
          {COMPANY_LOGOS.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center text-center font-display text-sm font-semibold text-ink-400 dark:text-ink-500"
            >
              {name}
            </div>
          ))}
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <motion.div variants={fadeUp} key={stat.label} className="text-center">
              <p className="font-display font-tabular text-3xl font-bold text-ink-900 sm:text-4xl dark:text-white">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.div key={t.name} variants={fadeUp}>
              <Card className="flex h-full flex-col p-6">
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-700 dark:text-ink-200">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar initials={t.initials} />
                  <div>
                    <p className="text-sm font-semibold text-ink-900 dark:text-white">{t.name}</p>
                    <p className="text-xs text-ink-400">
                      {t.role}, {t.company}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
