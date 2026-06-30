import { cn } from '@/lib/utils';

const PALETTE = [
  'bg-brand-100 text-brand-700 dark:bg-brand-900/50 dark:text-brand-300',
  'bg-ink-100 text-ink-700 dark:bg-ink-800 dark:text-ink-200',
  'bg-amber-50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
];

function hashIndex(str: string, mod: number) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) hash = (hash + str.charCodeAt(i)) % mod;
  return hash;
}

export function Avatar({ initials, className }: { initials: string; className?: string }) {
  const palette = PALETTE[hashIndex(initials, PALETTE.length)];
  return (
    <div
      className={cn(
        'flex h-11 w-11 shrink-0 items-center justify-center rounded-full font-display text-sm font-semibold',
        palette,
        className
      )}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
