import React, { useEffect } from "react";
import "./CartPage.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeitem } from "./../../Redux/Actions/cartActions";
import { useLocation, useNavigate, useParams } from "react-router";

const CartPage = () => {
  window.scrollTo(0, 0);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const totalSum = cartItems
    .reduce((x, y) => x + y.qty * y.price, 0)
    .toFixed(2);
  useEffect(() => {
    if (id) {
      dispatch(addToCart(id, qty));
    }
  }, [dispatch, id, qty]);

  const checkoutHandler = () => {
    navigate("/login?redirect=shipping");
  };

  const removeItemHandle = (id) => {
    dispatch(removeitem(id));
  };

  return (
    <>
      <div className="cartContainer">
        {cartItems.length === 0 ? (
          <div className="emptyCart">
            <div className="alert-info text-center messageInfo">
              Your cart is empty
            </div>
            <NavLink className="shoppingLink" to="/products">
              <p className="shoppingLink">Start Shopping</p>
            </NavLink>
          </div>
        ) : (
          <div>
            <div className="alert-info totalInfo text-center">
              Total Products : {cartItems.length}
            </div>
            {cartItems.map((item) => (
              <div>
                <div className="cartItem">
                  <div className="">
                    <button
                      className="alert-danger removeButton"
                      onClick={() => removeItemHandle(item.product)}
                    >
                      X
                    </button>
                  </div>
                  <div className="cartInfo">
                    <div style={{ margin: "20px" }}>
                      <NavLink to={`/products/${item.product}`}>
                        <img
                          className="cartImage"
                          src={item.image}
                          alt={item.name}
                          style={{ height: "200px", width: "200px" }}
                        ></img>
                      </NavLink>
                    </div>
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to={`/products/${item.product}`}
                    >
                      <div
                        style={{
                          marginTop: "40px",
                          fontSize: "25px",
                          fontFamily: "sans-serif",
                        }}
                      >
                        {item.name}
                      </div>
                    </NavLink>

                    <div className="quantityCart">
                      <strong className="cartText">Quantity</strong>
                      <select
                        className="quantitySelect"
                        value={item.qty}
                        onChange={(e) =>
                          dispatch(
                            addToCart(item.product, Number(e.target.value))
                          )
                        }
                      >
                        {[...Array(item.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <strong className="cartText">Price</strong>
                      <p className="cartPrice" style={{ marginTop: "20px" }}>
                        ${item.price}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div>
              <div className="totalSum">Total: ${totalSum}</div>
            </div>
            <hr />
            <div className="checkoutButton">
              <button className="btn updateButton" onClick={checkoutHandler}>
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartPage;
