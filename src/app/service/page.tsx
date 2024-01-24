'use client';
import { TransitionButton } from '@/app/componets/TransitionButton';

export default function Service() {
  return (
    <div>
      <div>Service Page</div>
      <TransitionButton href={'/about'}>AboutTest</TransitionButton>
    </div>
  );
}
