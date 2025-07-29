import { useEffect } from "react";
import Products from "./components/products/product";
import { useState } from "react";
import Button from "./counter";


const App = () => {
  
  const {ProductsData, setProductsData} = useState(null);
  const FetchProducts = async (ProductsData) => {
    try {
      const response = await fetch("https://dummyjson.com/products");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json(); // Parse the JSON response

      setProductsData(data.products);
    } catch (e) {
      console.log(e);
    }
  };
  
  useEffect(() => {
    FetchProducts();
  }, []);
  
  return (
    <div>
      <center>
        <h2>
          <b>WELCOME TO THE STORE</b>
        </h2>
        <h3>See the List of Products below:</h3>
      </center>
      <h2>The current count is: 0</h2>
      <Button />
      <Button />
      <Button />
      <Button />
      <Products products={productsData} />
    </div>
  );
};

export default App;
