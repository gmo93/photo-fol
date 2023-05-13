import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import PhotoMenu from './components/PhotoMenu';
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
        <div id = "home" className={styles.photoBox}>
          <div className={styles.photoHolder}>
            <div className={styles.mainPhoto}></div>
            <h5 className={styles.photoDesc}>Omohundro Photos</h5>
            <h5 className={styles.photoDesc}>
              Photographed by Grant Omohundro
            </h5>
            <h5 className={styles.photoDesc}>07/25/2019</h5>
          </div>
        </div>
        {/* {scrollTop > 600 && scrollTop < 5100 && <PhotoNavBar />} */}
        <PhotoMenu />
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
