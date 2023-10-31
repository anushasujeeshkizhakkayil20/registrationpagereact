import React, { useState } from 'react'
import './Style.css'

function Register_form() {

const[inputs,setInput]=useState({
     username : '',
     email:'',
     password :'',
     cpassword:'',
})

const[focus , setFocus] = useState({
  errName :false,
  errEmail :false,
  errPass : false,
  errCpass :false


})

const handleSubmit =(e)=>{
   e.preventDefault();
} 
  const handleChange = (e) =>{
    const name=e.target.name;
    const value=e.target.value;
    setInput({...inputs,[name] : value})

  }




  return (
    <div className="container col-5 p-4">
        <h1 style={{textAlign:'center'}}>Register here</h1>
        <form onsubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="type" pattern="^[A-Za-z0-9].{2,16}" className="form-control" id="name" placeholder="user name"  name='username' value={inputs.username} onChange={handleChange} onBlur={()=>setFocus({...focus,errName : true})} focus={focus.errName.toString()} required/>
          <span>should have 3-16 character</span>

        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text"  className="form-control" id='email' placeholder="enter your email" name="email" value={inputs.email} onChange={handleChange}  onBlur={()=>setFocus({...focus,errEmail : true})}focus={focus.errEmail.toString()} required/>
          <span>enter email address</span>
        </div>
        <div className="form-group">
          <label htmlFor="password" >Password</label>
          <input type="type" pattern="(?=^.{8,16}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$" className="form-control" id="password"  placeholder="Enter Your Password" name='password' value={inputs.password} onChange={handleChange}  onBlur={()=>setFocus({...focus,errPass : true})}focus={focus.errPass.toString()} required/>
          <span>password must have a minimum 8 character and  include atleast 1 uppercase ,digit and 1 special character</span>

        </div>
        <div  className="form-group">
          <label htmlFor="cpassword">Confirm Password</label>
          <input type="type" password={inputs.password} className="form-control" id="cpassword" placeholder="Enter Your confirm Password" name='cpassword' value={inputs.cpassword} onChange={handleChange}  onBlur={()=>setFocus({...focus,errCpass : true})} focus={focus.errCpass.toString()} required/>
          <span>password not matching</span>

        </div>
        </form>
        <div>
         <button type="submit" className="btn btn-primary">
         Submit
         </button>
        </div>
        </div>
        


  )
}

export default Register_form