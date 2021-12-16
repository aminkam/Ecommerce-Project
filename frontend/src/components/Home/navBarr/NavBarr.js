import { Badge, IconButton } from "@material-ui/core";

import "./NavBarr.css";
import { AiOutlineHome } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";
import { HiShoppingCart } from "react-icons/hi";
import { AiOutlineApple } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/Actions/LoginActions";
// import { searching } from "../../../redux/Actions/ProductsActions";

const NavBarr = ({ text, setText }) => {
  const { users } = useSelector((state) => state.loginReducer);
  const itemsInCart = useSelector((state) => state.getTotalItemsInCart);

  const dispatch = useDispatch();
  const loggout = () => {
    dispatch(logout());
  };
  console.log(setText);

  return (
    <>
      <header>
        <div className="header-left">
          <IconButton>
            <AiOutlineApple
              className="apple-icon"
              style={{ color: "#ececec" }}
            />
            <h3 style={{ color: "#ececec" }}>Apple Store</h3>
          </IconButton>
        </div>
        <div className="header-right">
          <form className="search-box">
            <input
              type="search"
              className="search"
              placeholder="Search a Product ..."
              onChange={(e) => setText(e.target.value)}
              value={text}
            />
          </form>
          <Link to="/">
            <IconButton className="first-btn" aria-label="Home" to="/">
              <AiOutlineHome style={{ color: "#ececec" }} />
            </IconButton>
          </Link>
          {users ? (
            <Link className="nav-link" to="/" onClick={loggout}>
              <input type="text" className="login-input" placeholder="Logout" />
            </Link>
          ) : (
            <Link to="/login">
              <IconButton
                className="second-btn"
                to="/LoginIcon"
                aria-label="LoginIcon"
              >
                <FiLogIn style={{ color: "#ececec" }} />
              </IconButton>
            </Link>
          )}
          {users ? (
            <Link to="/cart">
              <IconButton
                className="third-btn"
                aria-label="Shopping Cart"
                to="/cart"
              >
                <Badge color="secondary" badgeContent={itemsInCart}>
                  <HiShoppingCart style={{ color: "#ececec" }} />
                </Badge>
              </IconButton>
            </Link>
          ) : (
            <></>
          )}
        </div>
      </header>
    </>
  );
};

export default NavBarr;
