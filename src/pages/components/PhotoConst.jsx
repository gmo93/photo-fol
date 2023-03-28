import React, {Image} from 'react';
import styles from '@/styles/Home.module.css'

export default function PhotoConst() {
    const realEstatePhotos = ['kitchenDoor.jpeg', 'kitchenFromDoor.jpeg', 'livingRoom.jpeg'];
    const productPhotos = ['brownChairBack.jpeg', 'brownChairFront.jpeg', 'threeChairsStraight.jpeg', 'threeChairsSideways.jpeg'];
    const travelPhotos = ['canopy1.jpeg', 'canopy2.jpeg'];
    const renderNames = (names) => {
        return names.map(name => <img alt = {name} key={name} className={styles.photo} width = {400} src = {name}/>)
    }

    return (
        <>
            <h1 className = {styles.headerTest}>REAL ESTATE</h1>
            {renderNames(realEstatePhotos)}
            <h1 className = {styles.headerTest}>PRODUCT</h1>
            {renderNames(productPhotos)}
            <h1 className = {styles.headerTest}>TRAVEL</h1>
            {renderNames(travelPhotos)}
        </ >

    )
}