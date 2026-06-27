import Link from 'next/link';
import { ShieldQuestion } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/ui/container';

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center text-center">
      <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-300">
        <ShieldQuestion className="h-7 w-7" />
      </span>
      <h1 className="mt-6 font-display text-3xl font-semibold text-ink-900 dark:text-white">
        This page expired
      </h1>
      <p className="mt-2 max-w-sm text-ink-500 dark:text-ink-400">
        Unlike your licenses, we won&rsquo;t remind you about this one. Let&rsquo;s get you back on track.
      </p>
      <Button asChild size="lg" className="mt-8">
        <Link href="/">Back to homepage</Link>
      </Button>
    </Container>
  );
}
