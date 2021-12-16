import { IconButton } from "@material-ui/core";
import Button from "react-bootstrap/Button";
import "../Home/navBarr/NavBarr.css";
import { AiOutlineHome } from "react-icons/ai";
import { FiLogIn } from "react-icons/fi";

import { AiOutlineApple } from "react-icons/ai";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import { logout } from "../../redux/Actions/LoginActions";

import { useDispatch } from "react-redux";

const NavBarrAdmin = ({ text, setText }) => {
  const dispatch = useDispatch();
  const loggout = () => {
    dispatch(logout());
  };
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
          <IconButton
            className="second-btn"
            to="/LoginIcon"
            aria-label="LoginIcon"
            onClick={loggout}
          >
            <FiLogIn style={{ color: "#ececec" }} />
          </IconButton>
          <Button variant="dark" style={{ cursor: "pointer" }}>
            Admin Page
          </Button>{" "}
        </div>
      </header>
    </>
  );
};

export default NavBarrAdmin;
