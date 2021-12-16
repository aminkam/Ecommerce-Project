import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import "./Register.css"
import { Link } from "react-router-dom";
import { Redirect } from "react-router";
import { RegisterUser } from '../../../redux/Actions/RegisterActions';
const Register = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()
    const {users} = useSelector(state => state.registerUser)

    const addUser =(e) => {
        e.preventDefault()
        dispatch(RegisterUser({name,email,password}))
    }
    return (
        <div>
            <div className="body">
       {
           users ? (
<Redirect to="/login" />
           ) : (
               
            <div className="wrapper">
            <div className="title">
                Register Form
            </div>
            <form action="#">
            <div className="field">
                    <input type="text" required  onChange={(e)=> setName(e.target.value)} value={name} />
                    <label >FullName</label>
                </div>
                <div className="field">
                    <input type="email" required onChange={(e)=> setEmail(e.target.value)} value={email}  />
                    <label >Email Adress</label>
                </div>
                <div className="field">
                    <input type="password" required onChange={(e)=> setPassword(e.target.value)} value={password} />
                    <label >Password</label>
                </div>
              <div className="field">
                    <input type="submit" value="Register"  onClick={addUser}/>
              </div>
              <div className="field">
                    <Link to="/login"><input type="submit" value="Login ?" /></Link>
              </div>
                
            </form>
          </div>
           )
       }
    </div>
        </div>
    ) 
}

export default Register
