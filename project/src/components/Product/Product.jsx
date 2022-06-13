import axios from "axios";
import React, { useState } from "react";
import "./Product.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../Redux/Actions/ProductActions";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router";
import { pinItem, removePin } from "./../../Redux/Actions/pinAction";

const Product = () => {
  const navigate = useNavigate();
  const [qty, setQty] = useState(1);
  const { id } = useParams();
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const pinningItem = useSelector((state) => state.pinningItem);
  const { pinnedItems } = pinningItem;
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(id));
  }, [dispatch, id]);

  const AddToCartHandle = (e) => {
    e.preventDefault();
    navigate(`/cart/${id}?qty=${qty}`);
  };
  const pinHandle = (e) => {
    e.preventDefault();
    dispatch(pinItem(id));
  };
  const removePinHandle = (id) => {
    dispatch(removePin(id));
  };

  return (
    <div>
      {loading ? (
        <Loading />
      ) : error ? (
        <span className="alert-danger messageInfo">Error : {error}</span>
      ) : (
        <>
          {pinnedItems.map((item) => (
            <div
              style={{
                position: "sticky",
                width: "100%",
              }}
              className=""
            >
              <div
                className=""
                style={{
                  width: "100%",
                  border: "1px solid black",
                }}
              >
                <button
                  className="alert-danger removepinButton"
                  style={{ padding: "10px 15px", borderRadius: "5px" }}
                  onClick={() => removePinHandle(item.product)}
                >
                  X
                </button>
                <div className="pinBlock">
                  <div>{item.name}</div>
                  <div>
                    {
                      <img
                        style={{ width: "100px", height: "100px" }}
                        src={item.image}
                      />
                    }
                  </div>
                  <div style={{ marginLeft: "5px" }}>
                    {" "}
                    Price : $ {item.price}
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="productBlock">
            <img
              className="productImage"
              src={product.image}
              style={{ height: "350px", width: "350px" }}
            />
            <div className="productInfo">
              <strong style={{ fontSize: "20px", fontFamily: "sans-serif" }}>
                {product.name}
              </strong>
              <div style={{ fontSize: "20px", marginTop: "10px" }}>
                {" "}
                Price : $ {product.price}
              </div>
              {product.countInStock > 0 ? (
                <>
                  <div style={{ fontSize: "20px", marginTop: "10px" }}>
                    In Stock
                  </div>
                  <div style={{ fontSize: "20px", marginTop: "10px" }}>
                    Quantity
                  </div>
                  <select
                    style={{ marginTop: "10px", fontSize: "20px" }}
                    value={qty}
                    onChange={(e) => setQty(e.target.value)}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={AddToCartHandle}
                    className="btn btn-primary"
                    style={{
                      display: "block",
                      fontSize: "20px",
                      marginTop: "20px",
                    }}
                  >
                    Add to cart
                  </button>

                  <button
                    type="button"
                    onClick={pinHandle}
                    className="btn btn-info"
                    style={{
                      display: "block",
                      fontSize: "20px",
                      marginTop: "10px",
                      color: "white",
                    }}
                  >
                    Pin items
                  </button>
                </>
              ) : (
                <p>Status : Unavailable</p>
              )}
            </div>
            <div></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Product;
