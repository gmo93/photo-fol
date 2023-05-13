import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/styles/Home.module.css';
import { BiChevronLeft } from 'react-icons/bi';
import { BiChevronRight } from 'react-icons/bi';

const style = { size: '3em' };

export default function PhotoConst() {
  const realEstatePhotos = [
    '/kitchenDoor.jpeg',
    '/kitchenFromDoor.jpeg',
    '/livingRoom.jpeg',
  ];
  const productPhotos = [
    '/brownChairBack.jpeg',
    '/brownChairFront.jpeg',
    '/threeChairsStraight.jpeg',
    '/threeChairsSideways.jpeg',
  ];
  const travelPhotos = ['/canopy1.jpeg', '/canopy2.jpeg'];
  const artPhotos = [
    '/jordanPainting1.jpeg',
    '/jordanPainting2.jpeg',
    '/peter.jpeg',
    '/peterAndChance.jpeg',
  ];
  const renderNames = (names) => {
    return names.map((name) => (
      <div key={`${name} container`} className={styles.carouselItem}>
        <BiChevronLeft fontSize="6em" color="white"/>
        <Image
          alt={name}
          key={name}
          className={styles.photo}
          height={533}
          width={800}
          src={name}
        />
        <BiChevronRight fontSize="6em" color="white"/>
      </div>
    ));
  };
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
      <div className={styles.productCarousel} id="product">
        {renderNames(productPhotos)}
      </div>
      <BiChevronLeft fontSize="6em" color="black" />
      <BiChevronRight fontSize="6em" color="black" />
      {/* <div className={styles.productCarousel} id="travel">
        {renderNames(travelPhotos)}
      </div> */}
      <div className={styles.productCarousel} id="art">
        {renderNames(artPhotos)}
      </div>
    </div>
  );
}
