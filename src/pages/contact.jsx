import ContactForm from './components/ContactForm';
import styles from '../styles/Home.module.css';
import Menu from './components/Menu';
import NavBar from './components/NavBar';

export default function Contact() {
  return (
    <div className={styles.container}>
      <Menu />
      <NavBar />
      <div className={styles.contactTitleBox}>
        <h1 className={styles.contactTitle}>Con</h1>
        <h1 className={styles.contactTitle}>Tact</h1>
      </div>
      <div className={styles.contactBox}>
        <ContactForm />
      </div>
    </div>
  );
}
