import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import PhotoConst from './components/PhotoConst';
import ContactForm from './components/ContactForm';
import NavBar from './components/NavBar';
import PhotoNavBar from './components/PhotoNavBar';
import Menu from './components/Menu'

export default function Home() {
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <>
      <Head>
        <title>Omohundro Photos</title>
        <meta name="description" content="Omohundro Photos Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/omoLogo.ico" />
      </Head>
      <main className={styles.main}>
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
              <Link href="/contact">
                <h5 className={styles.menuItem}>Contact</h5>
              </Link>
            </div>
          </div>
        </div>
        <NavBar />
        <div id="home" className={styles.photoBox}>
          <div className={styles.photoHolder}>
            <div className={styles.logo}>
              <Image
                id={styles.logo1}
                src="/omoPhotosLogoSansSerif.svg"
                fill
                alt="home page logo number 1"
              />
            </div>
            <div className={styles.logo}>
              <Image
                id={styles.logo2}
                src="/omoPhotosLogoSansSerif.svg"
                fill
                alt="home page logo number 1"
              />
            </div>
            <div className={styles.logo}>
              <Image
                id={styles.logo3}
                src="/omoPhotosLogoSansSerif.svg"
                fill
                alt="home page logo number 1"
              />
            </div>
            <div className={styles.logo}>
              <h2>
                My name is Grant and Im a product, real estate, and fashion
                photographer.
              </h2>
              <h2>
                If you click the hamburger menu in the top right, you will be
                able to checkout some of my different photos! If you have would
                like to reach out to me about anything, you can do that through
                the contact for on there as well.
              </h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
