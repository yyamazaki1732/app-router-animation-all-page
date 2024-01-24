import { motion, AnimatePresence } from 'framer-motion';

export const Wrapper = ({ children }: any) => {
  return (
    <>
      <main className='flex min-h-screen flex-col items-center justify-between p-24'>
        {children}
      </main>
    </>
  );
};
