import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";

export default function NavBar() {
  const menuItems = ["home", "photos", "contact"];

  function handleHover(event) {
    console.log(event.target);
    console.log("hover");
  }

  return (
    <div className={styles.navContainer}>
      {menuItems.map((item) => (
        <a key={`${item} Link`} href={`#${item}`}>
          <img
            key={item}
            height={15}
            className={styles.navItem}
            src={`/menuButtons/${item}HoverIcon.svg`}
          />
        </a>
      ))}
    </div>
  );
}
