import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const CartFallback = () => {
    return (
        <>
        <div className='cartfallback'>
            <FontAwesomeIcon icon={faCartShopping} size='5x' fade speed='2s' />
            <div>
                <p>
                    Looks like you haven’t made your choice yet.
                </p>
            </div>
            <div className='btn'>
                <NavLink to='/'>
                    <button>Browse RESTAURANTS</button>
                </NavLink>
            </div>
        </div>
        
        </>
    )
}

export default CartFallback