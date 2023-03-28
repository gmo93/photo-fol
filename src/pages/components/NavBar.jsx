import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css'

export default function NavBar() {
    const menuItems = ['home', 'photos', 'contact'];
    const [hover, setHover] = useState(false);

    function handleHover(event) {
        console.log(event.target);
        console.log('hover')
    }

    return (
        <div className={styles.navContainer}>
            {menuItems.map((item) => 
                <img key={item} onClick={({target}) => console.log(target)} name={item} height={15} className = {styles.navItem} src = {`/menuButtons/${item}HoverIcon.svg`} />
            )}
        </div>
    )
}