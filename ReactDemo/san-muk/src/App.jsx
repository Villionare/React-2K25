import { useEffect } from "react";
import FirstComponent from "./components/classBasedComponents";
import FunctionalComponent from "./components/FunctionalComponents";
import Products from "./components/products/product";

// const products = ["Sampoo", "ginger", "Garlic", "Toothpaste"];
let fetchedProductsData = [];

const App = () => {
  const FetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products", {
        method: "GET",
      });

      if (!response.ok) {
        // Always check for a successful response (status 200-299)
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json(); // Parse the JSON response
      console.log(data);

      const products = await data.products;

      fetchedProductsData = await products;

      // fetchedProductsData.forEach((element) => {
      //   console.log(element);
      // });
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
      <Products products={fetchedProductsData} />
    </div>
  );
};

export default App;
