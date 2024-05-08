import React from 'react'
import { useState } from 'react';
import './cartItems.css';
import { Context } from '../../../utils/context';
import { useContext } from 'react';
function CartItems() {
  let { handleRemoveToCart, cartItems, handleCartQunatity } = useContext(Context);
  let [count, setCount] = useState(0);
  console.log(cartItems)
  return (
    <div className="cart-products">
      {
        cartItems.map(item => {
          console.log(item)
          return (
            <div className="cart-product">
              <div className="cart-prod-img">
                <img src={import.meta.env.REACT_APP_DEV_URL + item?.attributes?.img?.data?.attributes?.url} alt="cart-img" />
              </div>
              <div className="cart-prod-detail">
                <div className="cart-prod-detail-header">
                  <span className="prod-name">{item?.attributes?.title}</span>
                </div>

                <div className="increment-container">
                  <div className="inc-btn" onClick={() => handleCartQunatity('dec', item)}>-</div>
                  <input type="text" value={count} readOnly />
                  <div className="inc-btn" onClick={() => handleCartQunatity('inc', item)}>+</div>
                </div>
                <div className="prod-quantity-show">
                  <span>{item?.attributes?.quantity}</span>
                  <span>x</span>
                  <span className='prod-quntity-amount'>&#8377;{item?.attributes?.price * item?.attributes?.quantity}</span>
                </div>
              </div>
              <div> <span className='close-btn' onClick={() => {
                handleRemoveToCart(item);
              }}>&#10005;</span></div>
            </div>
          )

        })
      }
    </div>
  )
}

export default CartItems