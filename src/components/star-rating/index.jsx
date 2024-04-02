import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import './style.css'

export function StarRating ({ nStars = 5 }) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  const handleClick = (getIndex) => {
    setRating(getIndex)
  }

  const handleMouseEnter = (getIndex) => {
    setHover(getIndex)
  }
  const handleMouseLeave = () => {
    setHover(rating)
  }

  return (
    <div className='star-rating'>
      {
    [...Array(nStars)].map((_, index) => {
      index += 1

      return (
        <FaStar
          key={index}
          className={index <= (hover || rating) ? 'active' : 'inactive'}
          onClick={() => handleClick(index)}
          onMouseMove={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
          size={40}
        />
      )
    })
}
    </div>
  )
}
