// ========= Imports ========= //
import styles from './Card.module.css';
import { Link } from 'react-router-dom';
import bells from '../../../assets/bells.png'

export default function Card({ productDetails }) {
    // productDetails is the full object for a specific product e.g. ⬇️
    // {
    //     id: 1,
    //     productName: "Arcade Game",
    //     price: 300,
    //     img: "https://dodo.ac/np/images/7/7d/Arcade_Combat_Game_NH_Icon.png",
    //     type: "furniture",
    //     material: "mixed",
    //     blurb: "Looking for a blast from the past?..... etc"
    // },

  return (
    <div className={styles.outerContainer}>
        {/* ------ Image Section ------ */}
        <Link to={`/product/${productDetails.id}`} className={styles.imgContainer}>
            <img src={productDetails.img} alt={productDetails.productName} className={styles.productImage}/>
        </Link>

        {/* ----- Text Section ------ */}
        <div className={styles.priceContainer}>
            {/* Left side - product name */}
            <h3>{productDetails.productName}</h3>

            {/* Right side - price info */}
            <span>
                <p>{productDetails.price} bells</p>
                <img src={bells} alt="bells" />
            </span>
        </div>

    </div>
  )
}