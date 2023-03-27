import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from './components/NavBar'

const inter = Inter({ subsets: ['latin'] })

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
        <div className = {styles.container}>
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
        <div className = {styles.container}>
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
      </main>
    </>
  )
}
