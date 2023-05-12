import React, { useState, useEffect } from "react";
import styles from "@/styles/Home.module.css";

export default function NavBar() {
  const menuItems = ["home", "photos", "contact"];
  const [scrollTop, setScrollTop] = useState(0);

  return (
    <div className = {styles.navContainer}>
      <h5 className = {styles.navItem}>Home</h5>
      <h5 className = {styles.navItem}>About</h5>
      <h5 className = {styles.navItem}>Contact</h5>
    </div>
  )
}
