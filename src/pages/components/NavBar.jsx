import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';

export default function NavBar() {
  const menuItems = ['home', 'photos', 'contact'];
  const [scrollTop, setScrollTop] = useState(0);
  const [count, setCount] = useState(0);

  const clickTurn = (e) => {
    let menuItem = e.target.parentElement.parentElement.children[0];
    setCount(count + 1);
    if (count % 2 === 1) {
      e.target.style.transform = 'rotate(90deg)';
      e.target.style.transition = '.5s';
      menuItem.style.transform = 'translateX(100vw)';
      menuItem.style.transition = '.5s';
      e.target.style.color = 'white';
    } else {
      e.target.style.transform = 'rotate(0deg)';
      e.target.style.transition = '.5s';
      menuItem.style.transform = 'translateX(0vw)';
      menuItem.style.transition = '.5s';

      e.target.style.color = 'black';
    }
  };

  return (
    <div className={styles.navContainer}>
      <Image
        onClick={clickTurn}
        className={styles.hamburger}
        alt="hamburger menu"
        width={40}
        height={50}
        src="/hamburgerMenuClosed.svg"
        style={{ stroke: 'red !important' }}
      ></Image>
      {/* <Link href="#home">
        <h5 className={styles.navItem}>Home</h5>
      </Link>
      <Link href="#photos">
        <h5 className={styles.navItem}>Photos</h5>
      </Link>
      <Link href="#contact">
        <h5 className={styles.navItem}>Contact</h5>
      </Link> */}
    </div>
  );
}
