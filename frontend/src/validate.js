import React from "react"
const validate =(value)=>{
let err = { };
// const email_patterns = /^[^\s@]+@[^\s@]+\.[^\s@] +$/
// const password_pattern = /^(?=.*\d)(?=.*[A-Z])[a-zA-z0-9]{8,}$/

if(value.email == ""){
    err.email = "Name should not be empty"
}
// else if(!email_patterns.test(value.email)) {
//     err.email = "Email Didn't match"
// }
else{
    err.email = ""
}
if(value.password == ""){
    err.password = "Password should not be empty"
}
// else if(!password_pattern.test(value.pasword)){
// err.password = "password didn't match"
// }
else{
    err.password = ""
}
return err;
}

export default validate