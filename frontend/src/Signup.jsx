import React from "react";
const Signup =()=>{

    return(
        <div className='d-flex jiustify-content-center align-items-center bg-primary vh-100'>
        <div className='bg-white rounded p-3 w-25'>
             <form>
                <h1>Sign up</h1>
                <div className="dat">
                    <label htmlFor="email"> Username: </label> 
                    <input id="username" type="text" placeholder="username"/>
                </div>
                <div className="dat">
                    <label htmlFor="email"> Email: </label> 
                    <input id="email" type="email" placeholder="enter email"/>
                </div>
                <div className="dat">
                    <label htmlFor="password"> password: </label> 
                    <input id="password" type="password" placeholder="enter password"/>
                </div>
                <div className="dat">
                    <label htmlFor="repeatpassword"> repeat password: </label> 
                    <input id="repeatpassword" type="repeatpassword" placeholder="repeat password"/>
                </div>
                <button type='' className='btn btn-defualt border'>Sign Up</button>
             </form>
         </div>
    </div>
    )
}
export default Signup