import styles from '@/styles/Home.module.css';
import Link from 'next/link';

export default function Menu(props) {
  function menuClose(e) {
    e.target.parentElement.style.display = 'none';
  }

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuBox}>
        <div className={styles.menuItemHolder}>
          <Link href="/">
            <h5 className={styles.menuItem}>Home</h5>
          </Link>
          <Link href="/about">
            <h5 className={styles.menuItem}>About</h5>
          </Link>
          <Link href="/realestate">
            <h5 className={styles.menuItem}>Real Estate</h5>
          </Link>
          <Link href="/product">
            <h5 className={styles.menuItem}>Product</h5>
          </Link>
          <Link href="/travel">
            <h5 className={styles.menuItem}>Travel</h5>
          </Link>
          <Link href="/art">
            <h5 className={styles.menuItem}>Art</h5>
          </Link>
          <Link href = "/contact">
            <h5 className={styles.menuItem}>Contact</h5>
          </Link>
        </div>
      </div>
    </div>
  );
}
