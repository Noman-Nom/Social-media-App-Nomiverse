import React from 'react'
import './Login.scss'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1><span>Digital </span>World.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ducimus veniam amet, assumenda obcaecati velit facere dolores ipsam laboriosam ab at! Magnam.</p>
          <span>Create New Account </span>
          <Link to='/register'>
          <button>Register</button>
          </Link>

        </div>
        <div className="right">
              <h1>Login</h1>
              <form>
                <input type="text" placeholder='Enter Name' />
                <input type="password" placeholder='Enter password' />
                <button>Login</button>
              </form>
        </div>
      </div>
    
    
    </div>
  )
}

export default Login