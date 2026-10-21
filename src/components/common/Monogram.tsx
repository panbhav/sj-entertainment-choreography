'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { withBasePath } from '@/lib/basePath';

interface MonogramProps {
  className?: string;
  size?: number;
  interactive?: boolean;
  variant?: 'gold' | 'white';
}

export default function Monogram({
  className = '',
  size = 40,
  interactive = false,
  variant = 'gold',
}: MonogramProps) {
  const [imgError, setImgError] = useState(false);

  const logoSrc = variant === 'white' 
    ? withBasePath('/media/sj-logo-white-sm.png') 
    : withBasePath('/media/sj-logo-gold-sm.png');

  return (
    <div
      className={`relative inline-flex items-center justify-center select-none ${className} ${
        interactive ? 'transition-transform duration-300 hover:scale-105' : ''
      }`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {!imgError ? (
        <Image
          src={logoSrc}
          alt="SJ Logo"
          width={size}
          height={size}
          unoptimized
          className="w-full h-full object-contain filter drop-shadow-sm"
          onError={() => setImgError(true)}
        />
      ) : (
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
        >
          <circle cx="50" cy="50" r="46" stroke="#BD954E" strokeWidth="1.2" strokeDasharray="2 2" opacity="0.6" />
          <circle cx="50" cy="50" r="42" stroke="#BD954E" strokeWidth="0.8" opacity="0.9" />
          <text
            x="36"
            y="62"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="42"
            fontWeight="500"
            fontStyle="italic"
            fill="#4A1525"
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
            fill="#BD954E"
            textAnchor="middle"
          >
            J
          </text>
        </svg>
      )}
    </div>
  );
}
