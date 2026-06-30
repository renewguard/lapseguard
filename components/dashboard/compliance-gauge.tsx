'use client';

import { motion } from 'framer-motion';

interface ComplianceGaugeProps {
  score: number; // 0-100
  size?: number;
}

export function ComplianceGauge({ score, size = 120 }: ComplianceGaugeProps) {
  const stroke = 10;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const center = size / 2;

  const color = score >= 90 ? '#16A34A' : score >= 70 ? '#D97706' : '#DC2626';

  return (
    <div className="relative inline-flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          className="stroke-ink-100 dark:stroke-ink-700"
        />
        <motion.circle
          cx={center}
          cy={center}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset: offset }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="font-display font-tabular text-2xl font-bold text-ink-900 dark:text-white">
          {score}
        </span>
        <span className="text-[11px] font-medium text-ink-400">score</span>
      </div>
    </div>
  );
}
