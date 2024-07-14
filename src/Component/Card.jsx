import React from 'react'

const CardDiv = ({innertext, image}) => {
  return (
    <div className= 'cardDiv bg-white content-center text-center'>
        <div className='imgdiv content-center text-center'>
          <img src={image} alt="" />
        </div>
    </div>
  )
}

export default CardDiv