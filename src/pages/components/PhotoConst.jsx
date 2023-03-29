import React, {Image} from 'react';
import styles from '@/styles/Home.module.css'

export default function PhotoConst() {
    const realEstatePhotos = ['kitchenDoor.jpeg', 'kitchenFromDoor.jpeg', 'livingRoom.jpeg'];
    const productPhotos = ['brownChairBack.jpeg', 'brownChairFront.jpeg', 'threeChairsStraight.jpeg', 'threeChairsSideways.jpeg'];
    const travelPhotos = ['canopy1.jpeg', 'canopy2.jpeg'];
    const artPhotos = ['jordanPainting1.jpeg', 'jordanPainting2.jpeg', 'peter.jpeg', 'peterAndChance.jpeg']
    const renderNames = (names) => {
        return names.map(name => <img alt = {name} key={name} className={styles.photo} width = {400} src = {name}/>)
    }

    return (
        <div className = {styles.photoSection}>
            <div id = "realestate">
                <h1 className = {styles.headerTest}>REAL ESTATE</h1>
                {renderNames(realEstatePhotos)}
            </div>
            <div id = "product"></div>
                <h1 className = {styles.headerTest}>PRODUCT</h1>
                {renderNames(productPhotos)}
            <div id = "travel"></div>
                <h1 className = {styles.headerTest}>TRAVEL</h1>
                {renderNames(travelPhotos)}
            <div id = "art"></div>
                <h1 className = {styles.headerTest}>ART</h1>
                {renderNames(artPhotos)}
        </div>

    )
}