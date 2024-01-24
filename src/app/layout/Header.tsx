import Link from 'next/link';

export const Header = () => {
  return (
    <ul>
      <li>
        <Link href={'/'}>top</Link>
      </li>
      <li>
        <Link href={'/about'}>about</Link>
      </li>
      <li>
        <Link href={'/service'}>service</Link>
      </li>
    </ul>
  );
};
