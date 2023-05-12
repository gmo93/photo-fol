import styles from '@/styles/Home.module.css';

export default function Menu(props) {
  function menuClose(e) {
    e.target.parentElement.style.display = "none";
  }

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuBox}>
        <div className={styles.menuItemHolder}>
          <h5 className={styles.menuItem}>Home</h5>
          <h5 className={styles.menuItem}>Photos</h5>
          <h5 className={styles.menuItem}>Contact</h5>
        </div>
      </div>
    </div>
  );
}
