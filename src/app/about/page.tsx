'use client';
import { TransitionButton } from '@/app/componets/TransitionButton';

export default function About() {
  return (
    <div>
      <div>About Page</div>{' '}
      <TransitionButton href={'/about'}>AboutTest</TransitionButton>
    </div>
  );
}
