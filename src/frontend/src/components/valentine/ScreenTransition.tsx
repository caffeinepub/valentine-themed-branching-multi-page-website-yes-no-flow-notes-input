import { type ReactNode } from 'react';

interface ScreenTransitionProps {
  children: ReactNode;
  direction: 'left' | 'right';
}

export default function ScreenTransition({
  children,
  direction,
}: ScreenTransitionProps) {
  return (
    <div
      className={`${
        direction === 'left' ? 'animate-slide-in-left' : 'animate-slide-in-right'
      }`}
    >
      {children}
    </div>
  );
}
