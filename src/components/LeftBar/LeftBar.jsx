import React from 'react'
import './LeftBar.scss'
import { images } from '../../Constants'
const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src="/user.jpg" alt="" />
            <span>M Noman</span>
          </div>
          <div className="item">
            <img src={images.friend} alt="userimage" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default LeftBar