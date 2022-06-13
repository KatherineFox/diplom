import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./PlaceorderPage.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { ORDER_CREATE_RESET } from "../../Redux/Constants/OrderConstants";
import { createOrder } from "./../../Redux/Actions/OrderActions";
import { useNavigate } from "react-router";

const PlaceorderPage = () => {
  window.scrollTo(0, 0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  //Calculation on price
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 5);

  cart.totalPrice = (
    Number(cart.itemsPrice) + Number(cart.shippingPrice)
  ).toFixed(2);

  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  useEffect(() => {
    if (success) {
      navigate(`/products`);
      dispatch({ type: ORDER_CREATE_RESET });
    }
  }, [navigate, dispatch, success, order]);

  const placeOrderHandler = (e) => {
    console.log(userInfo);
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        itemsPrice: cart.itemsPrice,
        shippingPrice: cart.shippingPrice,
        totalPrice: cart.totalPrice,
      })
    );
  };
  return (
    <div>
      <div className="alert-info" style={{ padding: "40px  0 20px 50px" }}>
        <div>
          <strong>Customer</strong>
          <p>{userInfo.name}</p>
          <p>{userInfo.email}</p>
        </div>
        <div>
          <strong>Order Info</strong>
          <p>Shipping To: {cart.shippingAddress.country}</p>
          <p>
            Address : {cart.shippingAddress.city},{" "}
            {cart.shippingAddress.address}
          </p>
        </div>
      </div>
      {cart.cartItems.length === 0 ? (
        <p className="alert-info">Your Cart is Empty</p>
      ) : (
        <>
          {" "}
          {cart.cartItems.map((item, index) => (
            <div className="orderItemInfo" key={index}>
              <NavLink to={`/products/${item.product}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  style={{ height: "150px", width: "150px" }}
                />
              </NavLink>

              <NavLink
                style={{
                  textDecoration: "none",
                  color: "black",
                  fontFamily: "sans-serif",
                }}
                to={`/products/${item.product}`}
              >
                <p>{item.name}</p>
              </NavLink>
              <div>
                <strong className="cartText">Quantity</strong>
                <p className="cartPrice">{item.qty}</p>
              </div>
              <div>
                <strong className="cartText">Subtotal</strong>
                <p className="cartPrice">${item.qty * item.price}</p>
              </div>
            </div>
          ))}
        </>
      )}

      <table className="orderTableInfo">
        <tbody>
          <tr>
            <td>
              <strong>Products</strong>
            </td>
            <td>${cart.itemsPrice}</td>
          </tr>
          <tr>
            <td>
              <strong>Shipping</strong>
            </td>
            <td>${cart.shippingPrice}</td>
          </tr>
          <tr>
            <td>
              <strong>Total</strong>
            </td>
            <td>${cart.totalPrice}</td>
          </tr>
        </tbody>
      </table>
      {cart.cartItems.length === 0 ? null : (
        <div className="orderButtonBlock">
          <button
            className="btn btn-primary placeOrderButton"
            onClick={placeOrderHandler}
          >
            Place Order
          </button>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
};

export default PlaceorderPage;
