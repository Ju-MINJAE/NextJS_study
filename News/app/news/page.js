import Link from 'next/link';

export default function NewsPage() {
  return (
    <>
      <h1>New Page</h1>
      <ul>
        <li>
          <Link href="/news/a">First Link Item</Link>
        </li>
        <li>
          <Link href="/news/b">Second Link Item</Link>
        </li>
        <li>
          <Link href="/news/c">Third Link Item</Link>
        </li>
      </ul>
    </>
  );
}
