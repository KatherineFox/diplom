import "./App.css";
import Main from "./components/Main/Main";
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
  Router,
} from "react-router-dom";
import logo from "./Logo.png";
import Footer from "./components/Footer/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./components/Login/Login";
import Products from "./components/Products/Products";
import CartPage from "./components/CartPage/CartPage";
import Product from "./components/Product/Product";
import Register from "./components/Register/Register";
import { useDispatch, useSelector } from "react-redux";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { logout } from "./Redux/Actions/userActions";
import ShippingPage from "./components/ShippingPage/ShippingPage";
import PlaceorderPage from "./components/PlaceorderPage/PlaceorderPage";
import ScrollToTop from "./components/ScrollToTop.js";

function App(props) {
  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <BrowserRouter>
      <div className="App">
        <div className="nav">
          <ul className="navbar">
            <li className="logo">
              <NavLink to="/diplom">
                <img className="logotype" src={logo} alt="logo"></img>
              </NavLink>
            </li>
            <li>
              <NavLink className="appLink" to="/diplom">
                MAIN
              </NavLink>
            </li>
            <li>
              <NavLink className="appLink" to="products">
                PRODUCTS
              </NavLink>
            </li>
            <li>
              {userInfo ? (
                <div className="dropdown">
                  <button class="dropButton"> Hi, {userInfo.name}</button>
                  <div class="dropContent">
                    <NavLink className="linkAccount" to="/cart">
                      MY CART
                    </NavLink>
                    <NavLink
                      className="linkAccount"
                      to="#"
                      onClick={logoutHandler}
                    >
                      LOGOUT
                    </NavLink>
                  </div>
                </div>
              ) : (
                <li>
                  <div className="dropdown">
                    <button class="dropButton">
                      <FontAwesomeIcon icon={faUser} size="2x" color="white" />
                    </button>
                    <div class="dropContent">
                      <NavLink className="linkAccount" to="/login">
                        LOGIN
                      </NavLink>
                      <NavLink className="linkAccount" to="/register">
                        REGISTER
                      </NavLink>
                    </div>
                  </div>
                </li>
              )}
            </li>
            {/*<li>
              <form className="searchBlock">
                <input
                  type="search"
                  className="form-control rounded search"
                  placeholder="Search"
                />{" "}
                <button type="submit" className="search-button">
                  search
                </button>
              </form>
            </li>*/}
          </ul>
        </div>
        <ScrollToTop>
          <Routes>
            <Route path="/diplom" element={<Main />} />
            <Route exact path="products" element={<Products />} />
            <Route exact path="/products/:id" element={<Product />} />
            <Route path="/cart/:id" element={<CartPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route exact path="/login/shipping" element={<ShippingPage />} />
            <Route exact path="/placeorder" element={<PlaceorderPage />} />
          </Routes>
        </ScrollToTop>
        <div>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
