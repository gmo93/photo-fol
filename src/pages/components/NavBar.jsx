import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css'

export default function NavBar() {
    const menuItems = ['home', 'photos', 'contact'];
    const [hover, setHover] = useState('');

    return (
        <div className={styles.navContainer}>
            {menuItems.map((item, props) => 
                <img name={item} height={15} className = {styles.navItem} src = {`/menuButtons/${item}Icon.svg`} />
            )}
        </div>
    )
}