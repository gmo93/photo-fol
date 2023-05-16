import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Home.module.css';
import PhotoConst from './components/PhotoConst';
import ContactForm from './components/ContactForm';
import NavBar from './components/NavBar';
import PhotoNavBar from './components/PhotoNavBar';
import Menu from './components/Menu';
import { NextSeo } from 'next-seo';

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
        <meta charSet="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="author" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta property="og:title" content="Omohundro Photos" />
        <meta property="og:image" content="/opOGMObileImage.jpg" />
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />
        <meta
          property="og:description"
          content="Omohundro Photos is a Chicago based photographer specializing in Product, Real Estate, and Travel photography."
        />
        <meta property="og:url" content="www.omohundro.photos" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/omoPhotoIcon.svg" />
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
          </div>
        </div>
        <div className={styles.bio}>
          <h2>
            My name is Grant and Im a product, real estate, and fashion
            photographer. If you click the hamburger menu in the top right, you will be able
            to checkout some of my different photos! If you have would like to
            reach out to me about anything, you can do that through the contact
            for on there as well.
          </h2>
        </div>
      </main>
    </>
  );
}
