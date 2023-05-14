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
    '/livingRoom.jpeg',
  ];
  const productPhotos = [
    '/brownChairBack.jpeg',
    '/brownChairFront.jpeg',
    '/threeChairsStraight.jpeg',
    '/threeChairsSideways.jpeg',
  ];
  const travelPhotos = [
    '/canopy1.jpeg',
    '/canopy2.jpeg',
    '/canopy4.jpg',
    '/canopy7.jpeg',
  ];
  const artPhotos = [
    '/jordanPainting1.jpeg',
    '/jordanPainting2.jpeg',
    '/peter.jpeg',
    '/peterAndChance.jpeg',
  ];
  const countArr = [-150, -50, 50, 150];
  const [artCount, setArtCount] = useState(0);
  const [travelCount, setTravelCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const mouseHover = (e) => {
    e.target.style.boxShadow = "lightgray -5px 5px 5px"
  }
  const mouseLeave = (e) => {
    e.target.style.boxShadow = "none";
  }
  const pageAdd = (e) => {
    let parentID =
      e.target.parentElement.parentElement.attributes[2].textContent;
    if (parentID === 'art' && artCount < countArr.length) {
      setArtCount(artCount + 1);
    }
    if (parentID === 'product' && productCount < countArr.length) {
      setProductCount(productCount + 1);
    }
    if (parentID === 'travel' && travelCount < countArr.length) {
      setTravelCount(travelCount + 1);
    }
  };
  const pageSubtract = (e) => {
    let parentID =
      e.target.parentElement.parentElement.attributes[2].textContent;
    if (parentID === 'art' && artCount > 0) {
      setArtCount(artCount - 1);
    }
    if (parentID === 'product' && productCount > 0) {
      setProductCount(productCount - 1);
    }
    if (parentID === 'travel' && travelCount > 0) {
      setTravelCount(travelCount - 1);
    }
  };
  const renderNames = (names) => {
    return names.map((name) => (
      <div className={styles.carouselContainer} key={`${name}Container"`}>
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
        <h5
          style={{ color: 'black', width: '80%' }}
          className={styles.photoCaption}
        >
          Photographed By Grant Omohundro
        </h5>
        <h5
          style={{ color: 'black', width: '80%' }}
          className={styles.photoCaption}
        >
          Date: 02/17/22
        </h5>
        <BiChevronLeft
          style={{
            backgroundColor: 'black',
            margin: '3vh 10vw',
            width: '20vw',
          }}
          fontSize="8em"
          color="white"
          onClick={pageSubtract}
          onMouseOver={mouseHover}
          onMouseLeave={mouseLeave}
        />
        <BiChevronRight
          style={{
            backgroundColor: 'black',
            margin: '3vh 10vw',
            width: '20vw',
          }}
          fontSize="8em"
          color="white"
          onClick={pageAdd}
          onMouseOver={mouseHover}
          onMouseLeave={mouseLeave}
        />
      </div>
    ));
  };

  return (
    <div className={styles.photoSection}>
      <div
        style={{
          left: `${countArr[productCount]}vw`,
          width: `${productPhotos.length * 100}vw`,
        }}
        className={styles.productCarousel}
        id="product"
      >
        {renderNames(productPhotos)}
      </div>
      <div
        style={{
          left: `${countArr[travelCount]}vw`,
          width: `${travelPhotos.length * 100}vw`,
        }}
        className={styles.productCarousel}
        id="travel"
      >
        {renderNames(travelPhotos)}
      </div>
      <div
        style={{
          left: `${countArr[artCount]}vw`,
          width: `${artPhotos.length * 100}vw`,
        }}
        className={styles.productCarousel}
        id="art"
      >
        {renderNames(artPhotos)}
      </div>
    </div>
  );
}
