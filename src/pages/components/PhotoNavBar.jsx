import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";

export default function PhotoNavBar() {
    const menuItems = ['REAL ESTATE', 'PRODUCT', 'TRAVEL', 'ART'];
//   return (
//     <div className={styles.photoNavContainer}>
//       <div className={styles.photoNavBox}>
//         {menuItems.map((item) => (
//           <a className = {styles.photoLink} key={`${item} Link`} href={`#${item}`}>
//             <img
//               key={item}
//               height={10}
//               className={styles.photoNavItem}
//               src={`/menuButtons/${item}Btn.svg`}
//             />
//           </a>
//         ))}
//       </div>
//     </div>
//   );
  return (
    <div className={styles.photoNavContainer}>
      <div className={styles.photoNavBox}>
        {menuItems.map((item) => (
          <a className = {styles.photoLink} key={`${item} Link`} href={`#${item.replace(" ","").toLowerCase()}`}>
            <h1
              key={item}
              height={10}
              className={styles.photoNavItem}
            >{item}</h1>
          </a>
        ))}
      </div>
    </div>
  );
}
