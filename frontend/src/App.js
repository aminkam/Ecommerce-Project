import "./App.css";
import Landing from "./components/Home/landingPage/Landing";
import Login from "./components/Home/login/Login";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Register from "./components/Home/register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
// import Cart from "./components/Home/cart/Cart";
import { useSelector } from "react-redux";
import AdminPage from "./components/adminPage/AdminPage";
import AddProducts from "./components/adminPage/AddProducts";
import EditProducts from "./components/adminPage/EditProducts";
import CartScreen from "./components/Home/cart/CartScreen";

function App() {
  const { isAdmin } = useSelector((state) => state.loginReducer);
  const token = localStorage.getItem("token");
  const isAdminLocStor = localStorage.getItem("isAdmin") === "true";
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route
            path="/admin"
            render={() =>
              Boolean(isAdmin || (token && isAdminLocStor)) === true ? (
                <AdminPage />
              ) : (
                <Redirect to="/login" />
              )
            }
          />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/" exact component={Landing} />
          <Route path="/cart" exact component={CartScreen} />
          <Route path="/AddProducts" exact component={AddProducts} />
          <Route path="/editproduct" exact component={EditProducts} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
