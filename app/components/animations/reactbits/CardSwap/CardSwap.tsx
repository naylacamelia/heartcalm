'use client';

import dynamic from 'next/dynamic';

const CardSwap = dynamic(() => import('./CardSwapComp'), { ssr: false });

export { default as Card } from './CardSwapComp/Card';
export default CardSwap;
