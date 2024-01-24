'use client';
import { TransitionButton, TransitionLink } from '@/app/components/';

export default function Home() {
  return (
    <main className='bg-neutral-100 text-black w-screen h-screen flex flex-col items-center justify-center gap-[50px]'>
      <h1 className='text-5xl'>HOME PAGE</h1>
      <TransitionButton href='/about' label='About ->' />
      <TransitionLink href='/about' label='About ->' />
    </main>
  );
}
