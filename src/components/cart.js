import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CartauthFallback from './CartauthFallback'
import CartFallback from './CartFallback'
import useItemTotal from '../utils/useTotalbill'
import { addItems, removeItem } from '../utils/CartSlice'

export const Cartui = () => {
  const cartdata = useSelector((store) => store.cart.items)
  { console.log(cartdata) }
  const getItemTotal = useItemTotal();
  const dispatch = useDispatch();
  return (
    <>
      <div className='cartmenu'>
        <h3 style={{ textAlign: 'center' }}>cart Details</h3>
        <div className='cartmenu_box'>
          {Object.values(cartdata).map((itemdata) => {
            return (
              <div  className='cartmenu_data'>
                <div className='cartmenu_brandname'>
                  <h3>{itemdata.brand_display_name}Ovenstory</h3>
                </div>
                <div className='cartmenu_itemname'>
                  <p>{itemdata.product_name}</p>

                </div>
                <div className='cartmenu_pricelist'>
                  <p>{"₹ " + (itemdata.display_price) * itemdata.quantity}</p>
                  <div className='cartmenu_btn'>
                    <button
                      onClick={() => {
                        dispatch(removeItem(itemdata.product_id));
                      }}
                      className="text-xl"
                    >
                      -
                    </button>
                    &nbsp;{itemdata.quantity}&nbsp;
                    <button
                      className="hover:scale-110 delay-100 transition-all "
                      onClick={() => {
                        dispatch(addItems(itemdata));
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>)
          })
          }
        </div>
        <h3>To pay {"₹ " + getItemTotal()}</h3>
      </div>
    </>

  )
}

export default Cart = () => {
  const cartdata = useSelector((store) => store.cart.items)

  return (Object.values(cartdata).length) > 0 ? (
    <div className='cart_page'>
      <CartauthFallback />
      <Cartui />
    </div>
  ) : (
    <CartFallback />
  )
}
