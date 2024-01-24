// 'use client';

// import { useEffect } from 'react';
// import { animatePageIn } from '@/app/animations';

// export default function Template({ children }: { children: React.ReactNode }) {
//   useEffect(() => {
//     animatePageIn();
//   }, []);

//   return (
//     <div>
//       <div
//         id='transition-element'
//         className='w-screen h-screen bg-black z-100 fixed top-0 left-0'
//       ></div>
//       {children}
//     </div>
//   );
// }

'use client';

import { useEffect, useRef } from 'react';
import { animatePageIn } from '@/app/animations';

export default function Template({ children }: { children: React.ReactNode }) {
  const slideInRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    animatePageIn();
  }, []);
  return (
    <main>
      <div
        id='transition-element'
        ref={slideInRef}
        className='slide-in w-full h-screen bg-blue-200 fixed top-0 left-0 origin-left'
      ></div>
      {children}
    </main>
  );
}
