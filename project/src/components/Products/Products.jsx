import React, { useEffect, useState } from "react";
import "./Products.css";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../Loading/Loading";
import { NavLink } from "react-router-dom";
import { removePin } from "../../Redux/Actions/pinAction";

const Products = () => {
  const dispatch = useDispatch();
  const pinningItem = useSelector((state) => state.pinningItem);
  const { pinnedItems } = pinningItem;
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProduct());
  }, [dispatch]);
  const removePinHandle = (id) => {
    dispatch(removePin(id));
  };
  const scrollHandler = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="shopContainer">
        <div className="shopSection">
          <div className="shopRow">
            <div className="itemContainer row ">
              {loading ? (
                <Loading />
              ) : error ? (
                <span className="alert-danger messageInfo">
                  Error : {error}
                </span>
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
                  {products.map((product) => (
                    <div
                      className="items col-lg-2 offset-lg-1 col-md-4 offset-md-1 col-sm-6 offset-sm-3"
                      key={product._id}
                    >
                      <div className="item">
                        <div className="itemImage" key={product._id}>
                          <NavLink
                            to={`/products/${product._id}`}
                            onClick={scrollHandler}
                          >
                            <img
                              style={{ height: "200px", width: "200px" }}
                              src={product.image}
                              alt={product.name}
                            />
                          </NavLink>
                        </div>
                        <div className="itemNameBlock" key={product._id}>
                          <NavLink
                            to={`/products/${product._id}`}
                            className="itemText"
                            onClick={scrollHandler}
                          >
                            <div>{product.name}</div>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
