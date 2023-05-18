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
        <Menu />
        <NavBar />
        <div id="home" className={styles.photoBox}>
          <div className={styles.bio}>
          <h2>
            My name is Grant Omohundro and I am a product, real estate, and fashion
            photographer! If you click the hamburger menu in the top right, you will be able
            to checkout some of my different photos! If you would like to
            reach out to me about anything, you can do that through the contact
            for on there as well.
          </h2>
        </div>
        </div>
        {/* <div className={styles.bio}>
          <h2>
            My name is Grant and Im a product, real estate, and fashion
            photographer. If you click the hamburger menu in the top right, you will be able
            to checkout some of my different photos! If you have would like to
            reach out to me about anything, you can do that through the contact
            for on there as well.
          </h2>
        </div> */}
      </main>
    </>
  );
}
