import React, {useState} from 'react';
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

export default function PhotoConst() {
    const realEstatePhotos = ['/kitchenDoor.jpeg', '/kitchenFromDoor.jpeg', '/livingRoom.jpeg'];
    const productPhotos = ['/brownChairBack.jpeg', '/brownChairFront.jpeg', '/threeChairsStraight.jpeg', '/threeChairsSideways.jpeg'];
    const travelPhotos = ['/canopy1.jpeg', '/canopy2.jpeg'];
    const artPhotos = ['/jordanPainting1.jpeg', '/jordanPainting2.jpeg', '/peter.jpeg', '/peterAndChance.jpeg']
    const renderNames = (names) => {
        return names.map(name => <Image alt = {name} key={name} className={styles.photo} height={500} width={500} src = {name}/>)
    }
    // const [modalOpen, setModalOpen] = useState(false);
    // const [bigImage, setBigImage] = useState();
    // const handleClick = (e) => {
    //     let imageAlt = (e.target.alt).replaceAll('.jpeg', 'Big.jpeg');
    //     setBigImage(imageAlt);
    //     setModalOpen(true);
    // };
    // const handleClose = (e) => {
    //     setModalOpen(false);
    // }

  return (

    <div className={styles.photoSection}>
      <div className={styles.carousel}>
        <div className={styles.carouselItem} id="realestate">
          <h1 className={styles.headerTest}>REAL ESTATE</h1>
          {renderNames(realEstatePhotos)}
        </div>
      </div>
      <div className={styles.productCarousel} id="product">
        {renderNames(productPhotos)}
      </div>
      <div id="travel"></div>
      <h1 className={styles.headerTest}>TRAVEL</h1>
      {renderNames(travelPhotos)}
      <div id="art"></div>
      <h1 className={styles.headerTest}>ART</h1>
      {renderNames(artPhotos)}
    </div>
  );
}
