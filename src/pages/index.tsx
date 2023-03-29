import {useState, useEffect} from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import NavBar from './components/NavBar'
import PhotoNavBar from './components/PhotoNavBar';
import PhotoConst from './components/PhotoConst'
import ContactForm from './components/ContactForm';

export default function Home() {

  return (
    <>
      <Head>
        <title>Omohundro Photos</title>
        <meta name="description" content="Omohundro Photos Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/omoLogo.ico" />
      </Head>
      <main className={styles.main}>
      <NavBar />
      <PhotoNavBar />
        <div id="home" className = {styles.container}>
            <div className={styles.home}>
              <Image
                className={styles.logo}
                src="/omoLOGO.svg"
                alt="OMO Photo Logo"
                width={300}
                height={300}
                priority
              />
            </div>
        </div>
        <div id = "photos" className = {styles.container}>
            <PhotoConst />
        </div>
        <div id = "contact" className = {styles.container}>
        <h1 id = "contactHeader" className = {styles.headerTest}>CONTACT</h1>
            <div className={styles.contactBox}>
              <ContactForm />
            </div>
        </div>
      </main>
    </>
  )
}
