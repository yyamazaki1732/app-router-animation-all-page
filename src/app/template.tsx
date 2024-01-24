'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { TransitionButton } from '@/app/componets/TransitionButton';

export default function Template({ children }: { children: React.ReactNode }) {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const slideInRef = useRef<HTMLDivElement>(null);
  const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };
  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible,
  };
  const router = useRouter();
  useEffect(() => {
    gsap.set(slideInRef.current, { scaleX: 0 });
    buttonRef.current?.addEventListener('click', (e) => {
      e.preventDefault();

      gsap.to(slideInRef.current, {
        scaleX: 1,
        duration: 0.8,
        ease: 'power3.inOut',
        onComplete: () => {
          router.push('/about');
        },
      });
    });
  }, []);

  return (
    <main>
      <div className='my-element'>
        <Link ref={buttonRef} href={'/about'} passHref>
          Hello, world!
        </Link>
      </div>
      <TransitionButton href={'/about'}>AboutTest</TransitionButton>
      <div
        ref={slideInRef}
        className='slide-in w-full h-screen bg-blue-200 fixed top-0 left-0 origin-left  '
      ></div>
      {children}
    </main>
  );
}
