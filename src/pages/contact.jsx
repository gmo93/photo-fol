import ContactForm from './components/ContactForm';
import styles from '../styles/Home.module.css';
import Menu from './components/Menu';
import NavBar from './components/NavBar';

export default function Contact() {
  return (
    <div className={styles.container}>
        <Menu />
        <NavBar />
      <h1 className={styles.photoTitle}>
        CONTACT
      </h1>
      <div className={styles.contactBox}>
        <ContactForm />
      </div>
    </div>
  );
}
