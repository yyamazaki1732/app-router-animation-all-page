'use client';
import { TransitionLink } from '@/app/components/';

export default function Work() {
  return (
    <div className='bg-neutral-100 text-black w-screen h-screen flex flex-col items-center justify-center gap-[50px]'>
      <div>Work Page</div>
      <TransitionLink href='/' label='Home ->' />
      <TransitionLink href='/about' label='About ->' />
    </div>
  );
}
