import Image from 'next/image';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        className={styles.logo}
        src="/logo.png"
        alt="Logo"
        width={180}
        height={60}
      />
      <nav className={styles.nav}>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}
