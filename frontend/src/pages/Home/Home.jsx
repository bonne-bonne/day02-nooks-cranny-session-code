// ========== Imports ========== //
import styles from './Home.module.css';
import { useEffect, useState } from 'react';

// Component imports
import Navbar from '../../common/Navbar/Navbar.jsx';
import Footer from '../../common/Footer/Footer.jsx';
import Card from './components/Card.jsx';

export default function Home() {
  // ===================================== //
  //                STATES                 //
  // ===================================== //
  // These states will hold the names of the checkboxes that are currently checked for each category
  // E.g. selectedMaterialOptions ----> ["natural", "mixed"]
  const [selectedTypeOptions, setSelectedTypeOptions] = useState([]); // Stores which type checkboxes have been selected
  const [selectedMaterialsOptions, setSelectedMaterialsOptions] = useState([]);  // Stores which material checkboxes have been selected

  // This state stores the original data fetched
  const [productData, setProductData] = useState([]); 

  // ======== ARRAYS FOR CHECKBOXES ========= //
  // These are the arrays that will be mapped over to create the checkboxes
  // The checkboxes could also be hard coded
  const materialsArray = ["natural", "metal", "mixed"];
  const typesArray = ["decoration", "furniture"];


  // ===================================== //
  //               FUNCTIONS               //
  // ===================================== //
  // We are still working on this - I will add proper notes later!!!!!
  
  function handleChangeType(checkboxChanged) {
      setSelectedTypeOptions((prevTypes) => {
        return [...prevTypes, checkboxChanged]
      })
  }

  console.log(selectedTypeOptions);

  // ===================================== //
  //               useEffects              //
  // ===================================== //

  // Fetch the full set of product data when the page loads
  useEffect(() => {
    fetch("http://localhost:4000")
    .then((res) => res.json())
    .then((data) => setProductData(data))
  }, [])



  ///////////////////////////////////////////////////////////////////////
  // ========================= JSX BELOW ============================= //
  ///////////////////////////////////////////////////////////////////////
  return (
    <div className={styles.outerContainer}>
      <Navbar />

        <main>
          {/* ========================================== */}
          {/*               FILTER SECTION               */}
          {/* ========================================== */}
          {/* This filter section and the below gallery section could be components */}
          {/* But that would mean more lifting state or passing props, so we will leave it for this exercise */}
          <section className={styles.filterSection}>

            {/* =========== Type Filters ========== */}
            <h3>Filter by Type:</h3>
            {typesArray.map((type, index) => {
              return (
                <div key={index} className={styles.filterCheckboxes}>
                  <input type="checkbox" id={type} onChange={() => handleChangeType(type)} />
                  <label htmlFor={type}>{type}</label>
                </div>
              )
            })}

            {/* =========== Material Filters ========== */}
            <h3>Filter by Material:</h3>
            {materialsArray.map((material, index) => {
              return (
                <div key={index} className={styles.filterCheckboxes}>
                  <input type="checkbox" id={material}/>
                  <label htmlFor={material}>{material}</label>
                </div>
              )
            })}

          </section>

          {/* ========================================== */}
          {/*           PRODUCT GALLERY SECTION          */}
          {/* ========================================== */}
          <section className={styles.gridContainer}>
            {productData.map((product) => {
              return <Card key={product.id} productDetails={product} />
            })}

          
          </section>
        </main>

      <Footer />

    </div>
  )
}