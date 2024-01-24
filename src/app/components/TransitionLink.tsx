'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { gsap } from 'gsap';

export const TransitionButton = ({ href, children }: any) => {
  const router = useRouter();

  const handleClick = (e: any) => {
    e.preventDefault();
    // Exitアニメーションの開始
    gsap.to('.page-transition-div', {
      duration: 1,
      opacity: 0,
      onComplete: () => {
        // アニメーション完了後にページ遷移
        router.push(href);
      },
    });
  };

  return (
    <Link href={href} className='p-6 bg-green-200 inline-block' passHref>
      <span onClick={handleClick}>{children}</span>
    </Link>
  );
};
