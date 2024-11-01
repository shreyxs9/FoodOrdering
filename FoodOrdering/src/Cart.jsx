import React from 'react'
import { useSelector } from 'react-redux'
import CatItems from './CatItems'


const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className='w-1/2 mx-auto'> 
      <CatItems data={cartItems}/>
    </div>
  )
}

export default Cart
