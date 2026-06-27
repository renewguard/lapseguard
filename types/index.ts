import type { LucideIcon } from 'lucide-react';

export type Urgency = 'safe' | 'warn' | 'danger';

export interface RenewalItem {
  id: string;
  name: string;
  category: string;
  daysLeft: number;
  urgency: Urgency;
  owner: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  rating: number;
}

export interface Industry {
  icon: LucideIcon;
  name: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  price: { monthly: number; yearly: number };
  description: string;
  cta: string;
  highlighted?: boolean;
  features: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Stat {
  value: string;
  label: string;
}
