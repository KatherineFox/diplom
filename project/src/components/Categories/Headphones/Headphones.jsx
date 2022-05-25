import React from "react";
import "./Headphones.css";
import { Link } from "react-router-dom";
import Rating from "../Rating/Rating";
import HeadphonesProducts from "../../../data/HeadphonesProducts";
import axios from "axios";
import { useState, useEffect } from "react";

const Headphones = () => {
  const [HeadphonesProducts, setProducts] = useState([]);

  useEffect(() => {
    const fetchproducts = async () => {
      const { data } = await axios.get("/api/headphones_products");
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
              {HeadphonesProducts.map((product) => (
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

export default Headphones;
