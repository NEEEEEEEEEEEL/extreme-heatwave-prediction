import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/project">Project</Link>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
};
