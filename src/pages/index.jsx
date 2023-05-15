import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
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
        <Menu />
        <NavBar />
        <div id="home" className={styles.photoBox}>
          <div className={styles.photoHolder}>
            <div className={styles.logo}>
              <Image
                id = {styles.logo1}
                src="/omoPhotosLogoSansSerif.svg"
                fill
                alt="home page logo number 1"
              />
            </div>
            <div className={styles.logo}>
              <Image
              id = {styles.logo2}
                src="/omoPhotosLogoSansSerif.svg"
                fill
                alt="home page logo number 1"
              />
            </div>
            <div className={styles.logo}>
              <Image
              id = {styles.logo3}
                src="/omoPhotosLogoSansSerif.svg"
                fill
                alt="home page logo number 1"
              />
            </div>
          </div>
        </div>
        <div id="contact" className={styles.container}>
          <h1 id="contactHeader" className={styles.headerTest}>
            CONTACT
          </h1>
          <div className={styles.contactBox}>
            <ContactForm />
          </div>
        </div>
      </main>
    </>
  );
}
