'use client'; // usePathname()을 사용하기 위해 추가

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '../styles/navigation.module.css';

export default function Navigation() {
  const path = usePathname(); //현재 경로 나타내는 react hook

  return (
    <nav className={styles.nav}>
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
