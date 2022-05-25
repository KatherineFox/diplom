import React from "react";
import "./Orders.css";
import { NavLink } from "react-router-dom";

const Orders = () => {
  return (
    <div className="ordersBlock">
      {/*<div className="alert text-center noOrders">No Orders</div>
      <NavLink className="shoppingLink" to="/categories">
        <button className="startButton">Start Shopping</button>
    </NavLink>*/}

      <div className="table-responsive">
        <table className="table ordersTable">
          <tr>
            <th>ID</th>
            <th>STATUS OF ORDER</th>
            <th>DATE OF ORDER</th>
            <th>PRICE</th>
            <th>UNKNOWN</th>
          </tr>

          <tr className={"alert-success"}>
            <td>1</td>
            <td>Paid</td>
            <td>20.05.2022</td>
            <td>100$</td>
            <td></td>
          </tr>
          <tr className={"alert-success"}>
            <td>2</td>
            <td>Paid</td>
            <td>20.05.2022</td>
            <td>50$</td>
            <td></td>
          </tr>
          <tr className={"alert-success"}>
            <td>3</td>
            <td>Paid</td>
            <td>20.05.2022</td>
            <td>70$</td>
            <td></td>
          </tr>
          <tr className={"alert-danger"}>
            <td>3</td>
            <td>Not Paid</td>
            <td>20.05.2022</td>
            <td>70$</td>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Orders;
