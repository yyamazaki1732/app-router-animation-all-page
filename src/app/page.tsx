'use client';
import { TransitionLink } from '@/app/components/';

export default function Home() {
  return (
    <main className='bg-neutral-100 text-black w-screen h-screen flex flex-col items-center justify-center gap-[50px]'>
      <h1 className='text-5xl'>HOME PAGE</h1>
      <TransitionLink href='/about' label='About ->' />
      <TransitionLink href='/work' label='Work ->' />
    </main>
  );
}
