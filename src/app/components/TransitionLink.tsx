'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { animatePageOut } from '@/app/animations';

export const TransitionLink = ({ href, label }: any) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const router = useRouter();

  function handleClick() {
    animatePageOut(href, router);
  }

  useEffect(() => {
    linkRef.current?.addEventListener('click', (e) => {
      e.preventDefault();
      handleClick();
    });
  }, []);

  return (
    <Link
      ref={linkRef}
      href={href}
      className='p-4 bg-green-200 inline-block rounded-xl hover:bg-green-300 '
    >
      <span onClick={handleClick}>{label}</span>
    </Link>
  );
};
