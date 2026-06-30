import { Mail, MessageSquare, Bell } from 'lucide-react';

const NOTIFICATIONS = [
  { icon: Bell, text: 'Master Electrician License renews in 6 days', time: '2m ago' },
  { icon: MessageSquare, text: 'SMS sent to J. Alvarez about expiring license', time: '2m ago' },
  { icon: Mail, text: 'Audit report exported for Q3 review', time: '1h ago' },
];

export function NotificationsFeed() {
  return (
    <ul className="space-y-4">
      {NOTIFICATIONS.map((n, i) => {
        const Icon = n.icon;
        return (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600 dark:bg-brand-900/40 dark:text-brand-300">
              <Icon className="h-4 w-4" />
            </span>
            <div>
              <p className="text-sm leading-snug text-ink-700 dark:text-ink-200">{n.text}</p>
              <p className="mt-0.5 text-xs text-ink-400">{n.time}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
