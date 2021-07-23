import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { axiosWithAuth } from "../utils/axiosWithAuth";

const initialValues  = {
    username: '',
    password: ''
}

 function Login(props){

    const [loginValues,setLoginValues] = useState(initialValues);
   
    const inputChange = (e) => {
    setLoginValues({...loginValues,[e.target.name]:e.target.value})
    }
    
    const submitLogin = (e) => {
        e.preventDefault();

        axios
        .post("https://https://use-my-tech-1.herokuapp.com/login",
        `grant_type=password&username=${loginValues.username}&password=${loginValues.password}`,
        {
            headers: {
        
          Authorization: `Basic ${btoa("lambda-client:lambda-secret")}`,
          "Content-Type": "application/x-www-form-urlencoded" 
            }
        })
        .then(res => {
            localStorage.setItem("token", res.data.access_token);
            axiosWithAuth()
            .get("/getroleinfo")
            .then(res => {
                
                if(res.data === "owner")
                {
                props.history.push("/owner")
                }
                else if(res.data === "renter")
                {
                props.history.push("/renter")
    }
            })
            .catch(err => {
                console.log(err.response)
            })
        })
        .catch(err => {
            console.log(err.response);
        })

           
    }
 

    return(
        <form onSubmit = {submitLogin} className="form-group">
            <label>
                Username<br/>
                <input
                type = "text"
                name="username"
                value={loginValues.username}
                onChange={inputChange}
                />
            </label> 
            <br/>

            <label>
                Password<br/>
                <input
                type = "password"
                name="password"
                value={loginValues.password}
                onChange={inputChange}
                />
            </label> 
            <br/>
            
            <button className="btn btn-success">Login</button>
           
            <br/><br/>

            <Link to="/signup">Create account</Link>
        </form>
    )
}

export default Login