'use client';

import dynamic from 'next/dynamic';

const FlipCard = dynamic(() => import('./FlipCardImpl'), { ssr: false });

export default FlipCard;
