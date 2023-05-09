import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Cartitemdata() {
  return (
    <div className='cart'>
        <FontAwesomeIcon icon={faCartShopping} size='5x' fade/>
        <h4>Cart Is Empty</h4>
    </div>
  )
}
