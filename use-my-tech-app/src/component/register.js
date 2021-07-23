import axios from "axios";
import React,{useEffect, useState} from "react";

import * as yup from "yup";
import schema from "../validation/schema.js";

const credentials = {
    username: '',
    password: '',
    email: '',
    role: ''
}

const initErrors = {
    username:'',
    password: '',
    email: '',
    role: ''
}
const Register = (props) => {

    const [newUser,setNewUser] = useState(credentials);
    const [errors,setErrors] = useState(initErrors);
    const [disabled, setDisabled] = useState(true);

    const handleChange = (e) => {
       const{name,value} = e.target; 

       yup.reach(schema,name)
       .validate(value)
       .then(()=>{
           setErrors({...errors,[name]: ''})
       })
       .catch(err => {
           setErrors({...errors,[name]:err.errors[0]})
       })

    setNewUser({...newUser,[name]:value})
    }

    const postMember = (user) =>{

        axios
        .post("https://use-my-tech-1.herokuapp.com/register",user)
        .then((res) => {
         props.history.push("/login");
        })
        .catch((err) => console.log(err.response))
    }

    const submit = (e) => {

        e.preventDefault();
        const newMember = {
            username: newUser.username.trim(),
            password: newUser.password.trim(),
            email: newUser.email.trim(),
            role: newUser.role
        };

        postMember(newMember);
        setNewUser(credentials);

    }

    useEffect(() => {
        schema.isValid(newUser).then((valid)=> setDisabled(!valid));
    },[newUser])

    return(
        <form onSubmit = {submit} className = "form-group">
            <label>
                Username &nbsp;
             <input  
            type="text"
            name="username"
            placeholder="username"
            value = {newUser.username}
            onChange = {handleChange}
            />
            </label>
            <p>{errors.username}</p>
          <br/>
          <label>
              Password&nbsp;
            <input
            type="password"
            name="password"
            placeholder="password"
            value={newUser.password}
            onChange = {handleChange}
            />
            </label>
            <p>{errors.password}</p>
<br/>
           <label>
               Email&nbsp;
            <input
            type="email"
            name="email"
            placeholder="email"
            value={newUser.email}
            onChange = {handleChange}
            />
            </label>
            <p>{errors.email}</p>
      
            <input
            type = "radio"
            id = "owner"
            name = "role"
            checked = {newUser.role === "owner"}
            value = "owner"
            onChange = {handleChange}
            />
            <label htmlFor="owner">&nbsp;Owner</label><br/>
          
            <input
            type = "radio"
            id = "renter"
            name = "role"
            checked = {newUser.role === "renter"}
            value = "diner"
            onChange = {handleChange}
            />
            <label htmlFor="renter">&nbsp;Renter</label><br/>

             <p>{errors.role}</p>
            
            <button className='btn btn-success' disabled = {disabled}>Submit</button>
        </form>
    )

}

export default Register;