import React from 'react'
import { MdOutlineRoomService } from 'react-icons/md'

const Cards = () => {
  return (
    <div className='Cards'>
    <div className="card">
      <MdOutlineRoomService color=' #BC9060' size={60} />
      <p>Magical <span>Atmosphere</span> </p>
      <p>Our establishment has a magical <br /> atmosphere
        filled with delicious flavors</p>
    </div>
    <div className="card">
      <MdOutlineRoomService color=' #BC9060' size={60} />
      <p>Best Quality  <span>Food</span> </p>
      <p>The quality of our  <br />
        The food is excellent!</p>
    </div>
    <div className="card">
      <MdOutlineRoomService color=' #BC9060' size={60} />
      <p>Inexpensive <span>Food </span> </p>
      <p>The cost of our Food
        depends <br /> only   on its
        quantity.  The quality  <br />
        is always on top!</p>
    </div>
  </div>
  )
}

export default Cards