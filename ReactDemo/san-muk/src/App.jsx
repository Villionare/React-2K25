// import FirstComponent from "./components/classBasedComponents";
// import FunctionalComponent from "./components/FunctionalComponents";
import { useEffect } from "react";
import Products from "./components/products/product";
import { useState } from "react";

const App = () => {
  const [productsData, setProductsData] = useState([]);

  const FetchProducts = async () => {
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
        {/* <FirstComponent />
      <FunctionalComponent /> */}
        <h2>
          <b>WELCOME TO THE STORE</b>
        </h2>
        <h3>See the List of Products below:</h3>
      </center>
      <Products products={productsData} />
    </div>
  );
};

export default App;
