import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import PhotoGenerator from './components/TravelPhotos.jsx';
import NavBar from './components/NavBar.jsx';
import Menu from './components/Menu';
import TravelPhotos from './components/TravelPhotos.jsx';

export default function RealEstate() {
  return (
    <div>
      <Menu />
      <NavBar />
      <div className={styles.photoPage}>
        <div className={styles.portfolioContainer}>
          <div className={styles.travelTitleBox}>
            <h1 id={styles.travelTitle} className={styles.photoTitle}>
              Tra
            </h1>
            <h1 id={styles.travelTitle} className={styles.photoTitle}>
              vel
            </h1>
          </div>
          <div className={styles.column}>
            <div className={styles.columnImage}>
              <Image
                src="/canopy1.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.columnImage}>
              <Image
                src="/canopy2.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.columnImage}>
              <Image
                src="/canopy4.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.columnImage}>
              <Image
                src="/canopy7.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          <div id={styles.middleColumn} className={styles.column}>
            <div className={styles.columnImage}>
              <Image
                src="/canopy4.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.columnImage}>
              <Image
                src="/canopy7.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.columnImage}>
              <Image
                src="/canopy1.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.columnImage}>
              <Image
                src="/canopy2.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.columnImage}>
              <Image
                src="/canopy1.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.columnImage}>
              <Image
                src="/canopy1.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.columnImage}>
              <Image
                src="/canopy7.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.columnImage}>
              <Image
                src="/canopy1.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
