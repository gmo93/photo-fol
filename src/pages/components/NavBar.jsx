import React, { useState, useEffect } from "react";
import Link from 'next/link';
import styles from "@/styles/Home.module.css";

export default function NavBar() {
  const menuItems = ["home", "photos", "contact"];
  const [scrollTop, setScrollTop] = useState(0);

  return (
    <div className = {styles.navContainer}>
      <Link href = "#home" ><h5 className = {styles.navItem}>Home</h5></Link>
      <Link href = "#photos" ><h5 className = {styles.navItem}>Photos</h5></Link>
      <Link href = "#contact"><h5 className = {styles.navItem}>Contact</h5></Link>
    </div>
  )
}
