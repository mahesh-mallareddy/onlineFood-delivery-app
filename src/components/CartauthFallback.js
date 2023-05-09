import { useUserAuth } from '../utils/context/userAuthcontext'
import React, { useState } from 'react'
import { useUserAuth } from '../utils/context/userAuthcontext'
import { NavLink } from 'react-router-dom'

const CartauthFallback = () => {
    const addlocation = "near apple store -perimeter RD"
    const { stateuser } = useUserAuth();
    const [clicked, setclicked] = useState()
    const handleBtn = () => {
        setclicked("display_bolck")
        addlocation
    }
    return stateuser ?  (
        <div className='order_cart'>
            <div className='order'>
                <div className="order_location">
                    <p>select your location</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.3325395304414!2d-122.01116148467422!3d37.33463524513264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb59127ce078f%3A0x18e1c3ce7becf1b!2sApple%20Park!5e0!3m2!1sen!2sin!4v1637309850935!5m2!1sen!2sin"
                        width="300"
                        height="300"
                        style={{ border: "0" }}
                        allowfullscreen=""
                        loading="lazy"
                    ></iframe>
                </div>
                <div className='order_btn'>
                    <div className='btn'>
                        <button className='location_btn' onClick={handleBtn}>Add location</button>
                    </div>
                    <p>Delivery location <br/> {clicked ? addlocation : null} </p>
                    <button className={clicked ? 'display_bolck pay_btn' : ' display_non '}>continue Payment & place order</button>
                </div>
            </div>
        </div>
    ) : (
        <>
            <div className='login_box'>
                <div className='cart_login'>
                    <div className='login_content'>
                        <h3>Login/Sign Up</h3>
                        <p>To place your order now, log in to your account or sign up.</p>
                        <div className='lgin_btn'>
                            <NavLink to='/login'>
                            <button>LOGIN</button>
                            </NavLink>
                        </div>
                    </div>
                    <h4>OR</h4>
                    <div className='lgin_btn'>
                        <NavLink to='/signup'>
                        <button>SIGNUP</button>
                        </NavLink>
                    </div>
                </div>
            </div>

        </>
    )

}

export default CartauthFallback