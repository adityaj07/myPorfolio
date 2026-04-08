'use client';

import Link from 'next/link';
import { ReactNode } from 'react';
import { cn } from '@/app/utils/cn';

interface NeumorphicCtaButtonProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  target?: string;
  rel?: string;
}

const NeumorphicCtaButton = ({
  href,
  children,
  icon,
  className,
  target,
  rel,
}: NeumorphicCtaButtonProps) => {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(
        'group inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white',
        'border border-violet-300/35 bg-[linear-gradient(180deg,#9f67ff_0%,#7c3aed_52%,#5b21b6_100%)]',
        'shadow-[0_10px_24px_rgba(88,28,135,0.45),0_2px_6px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.32),inset_0_-8px_14px_rgba(0,0,0,0.35)]',
        'transition-all duration-200 hover:brightness-105 hover:shadow-[0_12px_28px_rgba(88,28,135,0.5),0_3px_8px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.34),inset_0_-8px_14px_rgba(0,0,0,0.35)]',
        'active:translate-y-[1px] active:shadow-[inset_0_3px_8px_rgba(0,0,0,0.45),inset_0_-2px_8px_rgba(255,255,255,0.16)]',
        className
      )}
    >
      <span>{children}</span>
      {icon && (
        <span className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
          {icon}
        </span>
      )}
    </Link>
  );
};

export default NeumorphicCtaButton;
