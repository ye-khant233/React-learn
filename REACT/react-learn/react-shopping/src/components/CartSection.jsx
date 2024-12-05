import React from 'react'
import products from '../data/products'
import Cart from './Cart'

const CartSection = () => {
    const carts = [{
        id:1,
        product:products[1],
        quantity :3,
        cost :66.9
    },
    {
        id:2,
        product:products[6],
        quantity :1,
        cost :99.9,
    },


    ]
  return (
   <>
   <div className="flex flex-col gap-5">
   {
    carts.map((cart) => <Cart key={cart.id} cart={cart} />)
   }
   </div>
   </>
  )
}

export default CartSection
