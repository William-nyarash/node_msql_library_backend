// import React from "react";
// eslint-disable-next-line no-unused-vars
import React ,{useState} from 'react'
import Signup from './Signup'
import validate from './validate'
const Login =()=> {
    const[value,setValue] = useState({
        email:'',
        password:''
})
const [err,setErr] = useState('');

const handleInputChange =(event)=>{
 setValue(prev=> ({...prev, [event.target.name]: [event.target.value]}))
}

const handleSubmit =(event)=>{
    event.preventDefault();
     setErr(validate(value));
}
   return (
    <div className='d-flex jiustify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white rounded p-3 w-25'>
             <form action='' onSubmit={handleSubmit}>
                <h1>Log in</h1>
                <div className="dat">
                    <label htmlFor="email"> Email: </label> 
                    <input id="email" onChange={handleInputChange} name='email' type="email" placeholder="enter email"/>
                    {err.email && <span>{err.email}</span>}
                </div>
                <div className="dat">
                    <label htmlFor="password"> password: </label> 
                    <input id="password" onChange={handleInputChange} name='password' type="password" placeholder="enter password"/>
                    {err.password && <span>{err.password}</span>}
                </div>

                <button type="submit" className='btn btn-succes'>Log in</button>
                <p>you agree to our terms and condition</p>
                <button type='' className='btn btn-defualt border'><a href={Signup}>Sign Up</a></button>
             </form>
         </div>
         <Signup/>
    </div>
   )
}
export default Login