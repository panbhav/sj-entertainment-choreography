import React, { useId } from 'react';

interface MonogramProps {
  className?: string;
  size?: number;
  interactive?: boolean;
}

export default function Monogram({
  className = '',
  size = 40,
  interactive = false,
}: MonogramProps) {
  const id = useId();
  const goldId = id + '-gold';
  const wineId = id + '-wine';
  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className} ${
        interactive ? 'transition-transform duration-300 hover:scale-105' : ''
      }`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-sm"
      >
        <defs>
          {/* Subtle champagne gold gradient */}
          <linearGradient id={goldId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#D4B272" />
            <stop offset="50%" stopColor="#BD954E" />
            <stop offset="100%" stopColor="#8C6A2E" />
          </linearGradient>

          {/* Deep wine accent */}
          <linearGradient id={wineId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A1525" />
            <stop offset="100%" stopColor="#2C0713" />
          </linearGradient>
        </defs>

        {/* Outer delicate geometric frame */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke={`url(#${goldId})`}
          strokeWidth="1.2"
          strokeDasharray="2 2"
          opacity="0.6"
        />
        <circle
          cx="50"
          cy="50"
          r="42"
          stroke={`url(#${goldId})`}
          strokeWidth="0.8"
          opacity="0.9"
        />

        {/* Corner / Quadrant gold florets */}
        <circle cx="50" cy="8" r="1.5" fill={`url(#${goldId})`} />
        <circle cx="50" cy="92" r="1.5" fill={`url(#${goldId})`} />
        <circle cx="8" cy="50" r="1.5" fill={`url(#${goldId})`} />
        <circle cx="92" cy="50" r="1.5" fill={`url(#${goldId})`} />

        {/* Monogram Interlocking S and J in editorial serif form */}
        <text
          x="36"
          y="62"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="42"
          fontWeight="500"
          fontStyle="italic"
          fill={`url(#${wineId})`}
          textAnchor="middle"
        >
          S
        </text>
        <text
          x="62"
          y="64"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="40"
          fontWeight="600"
          fill={`url(#${goldId})`}
          textAnchor="middle"
        >
          J
        </text>
      </svg>
    </div>
  );
}

