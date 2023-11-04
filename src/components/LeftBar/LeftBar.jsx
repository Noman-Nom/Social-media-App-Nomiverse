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
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={images.image2} alt="groupimage" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={images.image3} alt="marketimage" />
            <span>Market</span>
          </div>
          <div className="item">
            <img src={images.image4} alt="watchimage" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={images.image5} alt="memories" />
            <span>Memories</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default LeftBar