'use client';
import { TransitionButton, TransitionLink } from '@/app/components/';

export default function Service() {
  return (
    <div className='bg-neutral-100 text-black w-screen h-screen flex flex-col items-center justify-center gap-[50px]'>
      <div>Service Page</div>
      <TransitionButton href='/service' label='Service ->' />
      <TransitionLink href='/service' label='Service ->' />
    </div>
  );
}
