import styles from '@/styles/Home.module.css';
import Image from 'next/image';
import NavBar from './NavBar.jsx';

const travelPhotos = [
  '/canopy1.jpg',
  '/canopy2.jpg',
  '/canopy4.jpg',
  '/canopy7.jpg',
];

export default function TravelPhotos() {
  return (
    <div className={styles.column}>
      {travelPhotos.map((photo) => {
        <div className={styles.columnImage}>
          <Image
            src={photo}
            fill
            alt="photo"
            style={{ objectFit: 'contain' }}
            sizes="33vw"
          />
        </div>;
      })}
    </div>
  );
}
