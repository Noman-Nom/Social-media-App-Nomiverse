import React from 'react'
import './Register.scss'

const Register = () => {
  return (
    <div className='register'>
    <div className="card">
     
      <div className="right">
            <h1>Register</h1>
            <form>
              <input type="text" placeholder='Enter Name' />
              <input type="email" placeholder='Enter Email' />
              <input type="password" placeholder='Enter password' />
              <button>Register</button>
            </form>
      </div>
      <div className="left">
        <h1><span>Digital </span>World.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ducimus veniam amet, assumenda obcaecati velit facere dolores ipsam laboriosam ab at! Magnam.</p>
        <span> you have an account ?  </span>
        <button>Login</button>
      </div>
    </div>
  
  
  </div>
  )
}

export default Register