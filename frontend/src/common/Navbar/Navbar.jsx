// ========== Imports ============ //
import styles from './Navbar.module.css';
import bannerImg from '../../assets/blue-banner.png';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className={styles.outerContainer}>

      {/* This div is used to create the dots border that is inset from the edge */}
      <div className={styles.dotsContainer}>

        {/* ======== Decorative Scroll Banner ======== */}
        <div className={styles.banner}>
          <Link to="/" className={styles.link}>
            <h1>Nook&apos;s Cranny</h1>
          </Link>
          <img src={bannerImg} alt="banner" />
        </div>


      </div>

    </nav>
  )
}