import { useState, useEffect } from "react"
import './index.css';

const App = () => {
  
  const [products, setProducts] = useState([]);

  
  const [selectedProduct, setSelectedProduct] = useState(null);

  
  
  useEffect(() => {
    const fetchMakeupProducts = async () => {
      try {
       
        let response = await fetch('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=lipstick')
        let products = await response.json()
        setProducts(products)
      } catch (error) {
        console.error("Failed to fetch products:", error)
      }
    }

    fetchMakeupProducts();
  }, []);

  const onChooseRandomProduct = () => {
   
    const randomIndex = Math.floor(Math.random() * products.length)
    const selectedProduct = products[randomIndex]
    setSelectedProduct(selectedProduct);
  }

  return (
    <div>
      <h1 id="mainHeader">Makeup API</h1>

      <div>
        <h2 id="secondHeader">Lipsticks</h2>

        <div>
        <img src="./images/lipstick1.jpg" />



        </div>

        {
          
          selectedProduct != null &&
          <div className="lipsticks-container">
           
            <div className="lipstick-item">
              <h3>ID: {selectedProduct.id}</h3>
              <p>Name: {selectedProduct.name}</p>
              <p>Brand: {selectedProduct.brand}</p>
              <p>Price: {selectedProduct.price}</p>
            </div>
          </div>
        }
      </div>

      <button onClick={onChooseRandomProduct}>Randomise Product</button>
    </div>
  )
}

export default App;
