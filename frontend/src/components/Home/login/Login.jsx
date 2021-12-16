import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css"
import {LoginUser} from "../../../redux/Actions/LoginActions"
import { Redirect } from "react-router";
import { Link } from "react-router-dom";
const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {users,isAdmin} = useSelector(state => state.loginReducer)
    const dispatch = useDispatch()

    const Login = (e)=> {
        e.preventDefault()
        dispatch(LoginUser({email,password}))
    }
  return (
    <div className="body">
        {isAdmin ?(
            <Redirect to="/admin" />
        ) :
            users ? (
                <Redirect to="/"/>
            ) :(
                <div className="wrapper">
      <div className="title">
          Login Form
      </div>
      <form action="#">
          <div className="field">
              <input type="email" required  onChange={(e)=> setEmail(e.target.value)} value={email}/>
              <label >Email Adress</label>
          </div>
          <div className="field">
              <input type="password" required onChange={(e) => setPassword(e.target.value)} value={password}/>
              <label >Password</label>
          </div>
          <div className="pass-link">
              <a href > Forgot password ?</a>
          </div>
          <div className="field">
              <input type="submit"  value="Login" onClick={Login}/>
          </div>
          <div className="signup-link">
              Not a member? <Link to="/register"><span className="register-now">Register now </span></Link>
          </div>
      </form>
    </div>
            )
        }
    </div>
  );
};

export default Login;
