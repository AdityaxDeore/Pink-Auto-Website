import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  once?: boolean;
}

export default function FadeIn({ children, className = '' }: Props) {
  // Global removal of heavy scroll animations to de-vibecode the site
  if (className) {
    return <div className={className}>{children}</div>;
  }
  return <>{children}</>;
}
