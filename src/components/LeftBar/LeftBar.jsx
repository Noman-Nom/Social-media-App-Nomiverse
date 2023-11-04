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
        <hr />
      <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={images.image6} alt="Eventsimage" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={images.image7} alt="Gamingimage" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={images.image8} alt="Galleryimage" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={images.image9} alt="videosimage" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={images.image10} alt="Messages" />
            <span>Messages</span>
          </div>
      </div>
      <hr />
      <div className="menu">
          <span>Others</span>
          <div className="item">
            <img src={images.image11} alt="Fundraiser" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={images.image12} alt="Tutorials" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={images.image13} alt="Courses" />
            <span>Courses</span>
          </div>
          
          
      </div>
      </div>
    </div>
  )
}

export default LeftBar