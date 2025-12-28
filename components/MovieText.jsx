import React from 'react'

const MovieText = (props) => {
  return (
    <div>
      <h1 className={`z-0 movie1 ${props.animation}  absolute ${props.top} ${props.left} ${props.color} ${props.fontSize} font-extrabold font-sans`}>Movie App</h1>
    </div>
  )
}

export default MovieText
