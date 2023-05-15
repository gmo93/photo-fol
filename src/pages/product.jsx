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
          <h1 className={styles.photoTitle}>Travel</h1>
          <div className={styles.column}>
            <div className={styles.columnImage}>
              <Image
                src="/brownChairFront.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.columnImage}>
              <Image
                src="/brownChairBack.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.columnImage}>
              <Image
                src="/threeChairsSideways.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.columnImage}>
              <Image
                src="/threeChairsStraight.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          <div id={styles.middleColumn} className={styles.column}>
            <div className={styles.columnImage}>
              <Image
                src="/brownChairFront.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.columnImage}>
              <Image
                src="/brownChairBack.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.columnImage}>
              <Image
                src="/threeChairsSideways.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.columnImage}>
              <Image
                src="/threeChairsStraight.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.columnImage}>
              <Image
                src="/brownChairFront.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.columnImage}>
              <Image
                src="/brownChairBack.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.columnImage}>
              <Image
                src="/threeChairsSideways.jpg"
                fill
                alt="photo"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.columnImage}>
              <Image
                src="/threeChairsStraight.jpg"
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
