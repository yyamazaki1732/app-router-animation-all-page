'use client';
import { TransitionButton, TransitionLink } from '@/app/components/';

export default function About() {
  return (
    <main className='bg-neutral-100 text-black w-screen h-screen flex flex-col items-center justify-center gap-[50px]'>
      <h1 className='text-5xl'>ABOUT PAGE</h1>
      <TransitionButton href='/' label='Home ->' />
      <TransitionLink href='/' label='Home ->' />
    </main>
  );
}
