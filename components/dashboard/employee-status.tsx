import { Avatar } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

interface EmployeeRow {
  initials: string;
  name: string;
  role: string;
  status: 'Compliant' | 'Action needed';
}

const EMPLOYEES: EmployeeRow[] = [
  { initials: 'JA', name: 'Javier Alvarez', role: 'Lead Electrician', status: 'Action needed' },
  { initials: 'MC', name: 'Maya Chen', role: 'Site Supervisor', status: 'Compliant' },
  { initials: 'SO', name: 'Sade Okafor', role: 'RN, Field Care', status: 'Action needed' },
  { initials: 'TR', name: 'Tom Reyes', role: 'HVAC Technician', status: 'Compliant' },
];

export function EmployeeStatus() {
  return (
    <ul className="space-y-3">
      {EMPLOYEES.map((e) => (
        <li key={e.initials} className="flex items-center gap-3">
          <Avatar initials={e.initials} className="h-9 w-9 text-xs" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-ink-900 dark:text-white">{e.name}</p>
            <p className="truncate text-xs text-ink-400">{e.role}</p>
          </div>
          <Badge variant={e.status === 'Compliant' ? 'safe' : 'warn'}>{e.status}</Badge>
        </li>
      ))}
    </ul>
  );
}
