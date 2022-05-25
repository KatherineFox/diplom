import React, { useState, useEffect } from "react";
import "./Keyboard.css";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import KeyboardProducts from "../../../data/KeyboardProducts";
import axios from "axios";

const Keyboard = () => {
  const [KeyboardProducts, setProducts] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get("/api/keyboard_products");
      setProducts(data);
    };
    fetchproducts();
  }, []);

  return (
    <div>
      <div className="shopContainer">
        <div className="shopSection">
          <div className="shopRow">
            <div className="itemContainer row ">
              {KeyboardProducts.map((product) => (
                <div className="items col-lg-3 offset-lg-1" key={product._id}>
                  <div className="item">
                    <Link to={`/products/${product._id}`}>
                      <div className="itemImage">
                        <img src={product.image} alt={product.name} />
                      </div>
                    </Link>
                    <div className="itemText">
                      <Link to={`/products/${product._id}`}>
                        {product.name}
                      </Link>
                    </div>
                    <Rating
                      value={product.rating}
                      text={`${product.numReviews} reviews`}
                    />
                    <h7>${product.price}</h7>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Keyboard;
