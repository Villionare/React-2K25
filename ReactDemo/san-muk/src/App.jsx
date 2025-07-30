// import { useEffect } from "react";
import Products from "./components/products/product";
// import { useState } from "react";
import Button from "./counter";
import { NewContext } from "./context";
import { useState } from "react";

const App = () => {
  // const {ProductsData, setProductsData} = useState(null);
  // const FetchProducts = async (ProductsData) => {
  //   try {
  //     const response = await fetch("https://dummyjson.com/products");

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const data = await response.json(); // Parse the JSON response

  //     setProductsData(data.products);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  // useEffect(() => {
  //   FetchProducts();
  // }, []);

  const [Flag, setFlag] = useState(false);
  const [testMess, setTestMess] = useState(Flag);
  // const testMess = "this is idk";
  return (
    <div>
      <center>
        <h2>
          <b>WELCOME TO THE STORE</b>
        </h2>
        <h3>See the List of Products below:</h3>
      </center>
      <h2>The current count is: 0</h2>
      <button
        onClick={() => {
          // Update Flag first
          setFlag((prevFlag) => {
            const newFlag = !prevFlag;
            // Then, update testMess based on the NEW value of Flag
            setTestMess(newFlag);
            return newFlag; // Return new value for setFlag
          });
          // Or, less ideally for dependency:
          // const newFlagValue = !Flag; // This might use stale Flag if not careful
          // setFlag(newFlagValue);
          // setTestMess(newFlagValue);
        }}
      >
        Change the Texts
      </button>
      <NewContext value={testMess}>
        <Button />
        <Button />
        <Button />
        <Button />
      </NewContext>
      {/* <Products products={productsData} /> */}
    </div>
  );
};

export default App;
