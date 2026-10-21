'use client';

import { forwardRef } from 'react';
import type { HTMLAttributes, ReactNode, Ref } from 'react';
import '../CardSwap.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  customClass?: string;
  className?: string;
  children?: ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(({ customClass, className, children, ...rest }, ref) => (
  <div ref={ref} {...rest} className={['card-swap-card', customClass, className].filter(Boolean).join(' ')}>
    {children}
    <span className="card-swap-card-rim" aria-hidden="true" />
  </div>
));
Card.displayName = 'Card';

export default Card;
