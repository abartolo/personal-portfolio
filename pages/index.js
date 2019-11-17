import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about" title="About Page">
      <a>About</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;