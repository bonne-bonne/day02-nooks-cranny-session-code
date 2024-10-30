// ========== Imports ========== //
import styles from './Product.module.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react'

// Component and image imports
import Navbar from '../../common/Navbar/Navbar';
import Footer from '../../common/Footer/Footer';
import bells from '../../assets/bells.png';

export default function Product() {
  const [productData, setProductData] = useState("");

  // We can take the id number that was passed in 
  // This was defined using the dynamic route parameter from the Card Link component
  const params = useParams(); // E.g { productId: "9"}
  

  useEffect(() => {
    // We can use the id that we got from the url to send to the backend as part of the fetch
    fetch(`http://localhost:4000/api/product/${params.productId}`)
    .then((res) => res.json())
    .then((data) => setProductData(data))
  }, [])


  return (
    <div className={styles.outerContainer}>
      <Navbar />

        {/* ===== Main Section - with individual product info ====== */}
        <main className={styles.productMain}>
          <h1>{productData.productName}</h1>

          <div className={styles.imageContainer}>
            <img src={productData.img} alt={productData.productName} />
          </div>

          <p>{productData.blurb}</p>

          <div className={styles.priceSection}>
            <h3>Price: {productData.price} bells</h3>
            <img src={bells} alt="bells" className={styles.bellsImage} />
          </div>

          <button className={styles.ctaBtn}>Add to Cart</button>
        </main>

      <Footer />
    </div>
  )
}