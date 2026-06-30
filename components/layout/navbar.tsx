'use client';

import * as React from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';
import { ThemeToggle } from '@/components/layout/theme-toggle';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300',
        scrolled ? 'glass glass-border border-b shadow-soft' : 'border-b border-transparent bg-transparent'
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="#top" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-ink-900 dark:text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
            <ShieldCheck className="h-[18px] w-[18px]" />
          </span>
          LapseGuard
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-600 transition-colors hover:text-ink-900 dark:text-ink-300 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button variant="ghost" size="sm">
            Log in
          </Button>
          <Button variant="outline" size="sm">
            Book Demo
          </Button>
          <Button variant="primary" size="sm">
            Start Free
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden glass glass-border border-t lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-100 dark:text-ink-200 dark:hover:bg-ink-800"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2 border-t border-ink-100 pt-4 dark:border-ink-800">
                <Button variant="outline" size="md" className="w-full">
                  Book Demo
                </Button>
                <Button variant="primary" size="md" className="w-full">
                  Start Free
                </Button>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

'use client';

import * as React from 'react';
import Link from 'next/link';
import { ShieldCheck, ArrowRight, Twitter, Linkedin, Github } from 'lucide-react';
import { Container } from '@/components/ui/container';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { FOOTER_LINKS } from '@/lib/constants';

export function Footer() {
  const [subscribed, setSubscribed] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubscribe(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const email = new FormData(e.currentTarget).get('email');

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || 'Failed to subscribe.');

      setSubscribed(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <footer className="border-t border-ink-100 bg-ink-50/40 pt-16 dark:border-ink-800 dark:bg-ink-900/40">
      <Container>
        {/* Newsletter */}
        <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-ink-100 bg-white p-7 sm:flex-row sm:items-center dark:border-ink-800 dark:bg-surface-dark-raised">
          <div>
            <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-white">
              Stay ahead of compliance changes
            </h3>
            <p className="mt-1 text-sm text-ink-500 dark:text-ink-400">
              One short email a month: renewal deadlines, regulation updates, product news.
            </p>
          </div>
          {subscribed ? (
            <p className="text-sm font-medium text-safe">You&rsquo;re subscribed &mdash; thank you!</p>
          ) : (
            <div className="w-full sm:w-auto">
              <form onSubmit={handleSubscribe} className="flex w-full max-w-sm gap-2 sm:w-auto">
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <Input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@company.com"
                  className="sm:w-64"
                />
                <Button type="submit" size="md" className="shrink-0" disabled={loading}>
                  {loading ? 'Subscribing\u2026' : 'Subscribe'}
                  {!loading && <ArrowRight className="h-4 w-4" />}
                </Button>
              </form>
              {error && (
                <p role="alert" className="mt-2 text-xs font-medium text-danger">
                  {error}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-10 py-14 sm:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 sm:col-span-4 lg:col-span-1">
            <Link href="#top" className="flex items-center gap-2 font-display text-lg font-semibold text-ink-900 dark:text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600 text-white">
                <ShieldCheck className="h-[18px] w-[18px]" />
              </span>
              LapseGuard
            </Link>
            <p className="mt-3 max-w-xs text-sm text-ink-500 dark:text-ink-400">
              The compliance platform that makes sure your licenses, permits, and insurance never lapse.
            </p>
            <div className="mt-5 flex gap-3">
              {[Twitter, Linkedin, Github].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 text-ink-500 transition-colors hover:border-brand-300 hover:text-brand-600 dark:border-ink-700 dark:text-ink-400"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {(Object.entries(FOOTER_LINKS) as [string, { label: string; href: string }[]][]).map(
            ([heading, links]) => (
            <div key={heading}>
              <h4 className="font-display text-sm font-semibold text-ink-900 dark:text-white">{heading}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-500 transition-colors hover:text-ink-900 dark:text-ink-400 dark:hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            )
          )}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-ink-100 py-8 text-sm text-ink-400 sm:flex-row dark:border-ink-800">
          <p>&copy; {new Date().getFullYear()} LapseGuard, Inc. All rights reserved.</p>
          <p>Made for the people who keep your business compliant.</p>
        </div>
      </Container>
    </footer>
  );
}
