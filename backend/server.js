// ====== Imports - packages and files ======= //
const express = require('express');
const app = express();
const products = require('./productData.js');
const cors = require('cors');
require('dotenv').config();

// ========== Middleware ========= //
app.use(cors());

// ======= API Endpoints ========= //

// Send back all the product data
app.get('/', (req, res) => {
   return res.status(200).json(products);
})

// Send back the data for just one product
// The product sent back is found using the dynamic route parameter which represents the product id
app.get('/api/product/:productId', (req, res) => {
    console.log(req.params); // e.g. { productId: "3"} - note the id from the url is a string

    // Save the value from the endpoint url into a variable - use the + as a shorthand to change it into a number
    const productId = +req.params.productId;

    // Search the data to see if the id from the request params matches an object within the data
    const singleItem = products.find((product) => product.id === productId);

    // If an object was found, send back the object, otherwise send an error
    if (singleItem) {
        return res.status(200).json(singleItem);
    } else {
        return res.status(404).json({ error: "No product found" })
    }

})


// ========== PORT ========== //
const PORT = process.env.PORT;

app.listen(PORT || 4000, () => {
    console.log(`Server is alive on http://localhost:${PORT}`)
})
.on("error", (err) => {
    console.log(err)
})