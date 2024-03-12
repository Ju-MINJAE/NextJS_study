'use client'; // usePathname()을 사용하기 위해 추가

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const path = usePathname(); //현재 경로 나타내는 react hook

  const [count, setCount] = useState(0);

  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>Home</Link> {path === '/' ? '🔥' : ''}
        </li>
        <li>
          <Link href='/about-us'>About Us</Link>
          {path === '/about-us' ? '🔥' : ''}
        </li>
      </ul>
    </nav>
  );
}
