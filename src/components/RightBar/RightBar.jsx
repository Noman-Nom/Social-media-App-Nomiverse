import React from 'react'
import './RightBar.scss'

const RightBar = () => {
  return (
    <div className='rightBar'>

      <div className="container">
        <div className="item">
          <span>Suggestion For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://images.pexels.com/photos/4668513/pexels-photo-4668513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
              <span>M Noman</span>
            </div>
            <div className="buttons">
              <button>Follow</button>
              <button>Dismiss</button>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  )
}

export default RightBar