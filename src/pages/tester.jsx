import NavBar from './components/NavBar';
import styles from '@/styles/Home.module.css';
import Image from 'next/image';

export default function Tester() {
  return (
    <div>
      <NavBar></NavBar>
      <div className={styles.row}>
        <div className={styles.column}>
          <Image
            src="/canopy1.jpg"
            style={{ objectFit: 'contain' }}
            fill
            alt="photo1"
          />
          <Image
            src="/canopy2.jpg"
            style={{ objectFit: 'contain' }}
            fill
            alt="photo1"
          />
          <Image
            src="/canopy4.jpg"
            style={{ objectFit: 'contain' }}
            fill
            alt="photo1"
          />
        </div>
        <div className={styles.column}>
          <Image
            src="/canopy1.jpg"
            style={{ objectFit: 'contain' }}
            fill
            alt="photo1"
          />
          <Image
            src="/canopy2.jpg"
            style={{ objectFit: 'contain' }}
            fill
            alt="photo1"
          />
          <Image
            src="/canopy4.jpg"
            style={{ objectFit: 'contain' }}
            fill
            alt="photo1"
          />
        </div>
        <div className={styles.column}>
          <Image
            src="/canopy1.jpg"
            style={{ objectFit: 'contain' }}
            fill
            alt="photo1"
          />
          <Image
            src="/canopy2.jpg"
            style={{ objectFit: 'contain' }}
            fill
            alt="photo1"
          />
          <Image
            src="/canopy4.jpg"
            style={{ objectFit: 'contain' }}
            fill
            alt="photo1"
          />
        </div>
      </div>
    </div>
  );
}
