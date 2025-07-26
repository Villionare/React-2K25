import TempStyle from "../StyleModules/temp.module.css";
import { useEffect, useState } from "react";

const Button = () => {
  const [buttonValue, setButtonValue] = useState("Info");
  const [Flag, setFlag] = useState(true);

  let ChangeButton = () => {
    Flag ? setButtonValue("Showing Info") : setButtonValue("Info Closed");
    setFlag(!Flag);
  };

  useEffect(() => {
    console.log("this is use Effect");
  }, [Flag]);
  //[] - this will run once when the page loades

  return (
    <>
      <button className={TempStyle.buttons} onClick={ChangeButton}>
        {buttonValue}
      </button>
    </>
  );
};

const Products = (props) => {
  const { products } = props;
  return (
    // style={{ listStyle: "none", justifyItems: "left" }} inline style
    <ul className={TempStyle.product_list}>
      {Array.isArray(products) && products.length > 0 ? (
        products.map((item) => (
          <li key={item.id} className={TempStyle.list_item}>
            <div className={TempStyle.product_details}>
              <h3>{item.title}</h3> {/* Product Title */}
              <p>
                <strong>Price:</strong> ${item.price.toFixed(2)}
              </p>{" "}
              {/* Price, formatted to 2 decimal places */}
              <p>
                <strong>Category:</strong> {item.category}
              </p>{" "}
              {/* Category */}
              <p>
                <strong>Brand:</strong> {item.brand || "N/A"}
              </p>{" "}
              {/* Brand (use || "N/A" as a fallback if brand might be missing) */}
              <p>{item.description}</p> {/* Product Description */}
              {item.thumbnail && ( // Conditionally render image if available
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className={TempStyle.product_thumbnail}
                />
              )}
            </div>
            <Button /> {/* Your Button component */}
          </li>
        ))
      ) : (
        // Render a message if no products are found or still loading
        <p>No products found or still loading...</p>
      )}
    </ul>
  );
};

export default Products;
