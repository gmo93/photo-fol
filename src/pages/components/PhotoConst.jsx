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
  const countArr = [-150, -50, 50, 150];
  const [count, setCount] = useState(0);
  const pageAdd = (e) => {
    let imageLeft = e.target.parentElement.parentElement.style.left;
    console.log(countArr.length)
    console.log(count)
    if (count < countArr.length - 1) {
      // imageLeft = imageLeft + ''
      setCount(count + 1);
    }
  };
  const pageSubtract = (e) => {
    let imageLeft = e.target.parentElement.parentElement.style.left;
    // imageLeft = imageLeft + ''
    if (count > 0) {
      setCount(count - 1);
    }
  };
  const renderNames = (names) => {
    return names.map((name) => (
      <div className={styles.carouselContainer} key="carouselContainer">
        <div key={`${name} container`} className={styles.carouselItem}>
          <Image
            alt={name}
            key={name}
            className={styles.photo}
            fill
            style={{ objectFit: 'contain' }}
            src={name}
          />
        </div>
        <h5 className={styles.photoCaption}>Photographed By Grant Omohundro</h5>
        <h5 className={styles.photoCaption}>Date: 02/17/22</h5>
        <BiChevronLeft
          style={{
            backgroundColor: 'black',
            margin: '3vh 2vw',
            opacity: '.75',
          }}
          fontSize="8em"
          color="white"
          onClick={pageSubtract}
        />
        <BiChevronRight
          style={{
            backgroundColor: 'black',
            margin: '3vh 2vw',
            opacity: '.75',
          }}
          fontSize="8em"
          color="white"
          onClick={pageAdd}
        />
      </div>
    ));
  };

  return (
    <div className={styles.photoSection}>
      <div
        style={{ left: `${countArr[count]}vw` }}
        className={styles.productCarousel}
        id="product"
      >
        {renderNames(productPhotos)}
      </div>
      {/* <BiChevronLeft fontSize="10em" color="black" />
      <BiChevronRight fontSize="6em" color="black" /> */}
      {/* <div className={styles.productCarousel} id="travel">
        {renderNames(travelPhotos)}
      </div> */}
      <div className={styles.productCarousel} id="art">
        {renderNames(artPhotos)}
      </div>
    </div>
  );
}
