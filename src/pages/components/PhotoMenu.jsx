import styles from '@/styles/Home.module.css';
import { BiChevronDown } from 'react-icons/bi';
import { useState } from 'react';
import Image from 'next/image';

export default function PhotoMenu() {
  const [clicked, setClicked] = useState(0);

  const clicker = (e) => {
    setClicked(clicked + 1);
    console.log(e);
    const photoPullDown = e.target.parentElement.nextSibling;
    let menuItem = e.target.parentElement.parentElement.parentElement;
    // e.target.parentElement.nextSibling.style.display = "flex";

    if (clicked % 2 === 1) {
      menuItem.style.height = '100%';
      menuItem.style.minHeight = '100vh';
      menuItem.style.transition = 'height .5s';
    } else if (clicked % 2 === 0) {
      menuItem.style.height = '15vh';
      menuItem.style.transition = 'height .5s';
      menuItem.style.minHeight = "0";
    } else {
      return;
    }
    console.log(menuItem.style.height);
    console.log(e.target.parentElement.parentElement.parentElement);
  };

  return (
    <div className={styles.photoMenuHolder}>
      <div clicked="false" className={styles.photoMenu}>
        <h2 className={styles.photoMenuItem}>
          Real Estate <BiChevronDown onClick={clicker} />
        </h2>
        <div className={styles.photoPullDown}>
          <Image
            alt="brown chair picture"
            src="/livingRoomBig.jpeg"
            height={300}
            width={400}
          />
          <Image
            alt="brown chair picture back"
            src="/kitchenFromDoor.jpeg"
            height={300}
            width={400}
          />
          <Image
            alt="brown chair picture"
            src="/fridgeShot.jpeg"
            height={300}
            width={400}
          />
          <Image
            alt="brown chair picture"
            src="/kitchenDoor.jpeg"
            height={300}
            width={400}
          />
        </div>
      </div>
      <div clicked="false" className={styles.photoMenu}>
        <h2 className={styles.photoMenuItem}>
          Product <BiChevronDown onClick={clicker} />
        </h2>
        <div className={styles.photoPullDown}>
          <Image
            alt="brown chair picture"
            src="/brownChairFront.jpeg"
            height={300}
            width={300}
          />
          <Image
            alt="brown chair picture back"
            src="/brownChairBack.jpeg"
            height={300}
            width={300}
          />
          <Image
            alt="brown chair picture"
            src="/threeChairsStraight.jpeg"
            height={300}
            width={300}
          />
          <Image
            alt="brown chair picture"
            src="/threeChairsSideways.jpeg"
            height={300}
            width={300}
          />
        </div>
      </div>
      <div clicked="false" className={styles.photoMenu}>
        <h2 className={styles.photoMenuItem}>
          Travel <BiChevronDown onClick={clicker} />
        </h2>
      </div>
      <div clicked="false" className={styles.photoMenu}>
        <h2 className={styles.photoMenuItem}>
          Art <BiChevronDown onClick={clicker} />
        </h2>
      </div>
    </div>
  );
}
