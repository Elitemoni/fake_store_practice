import React from 'react';
import {useContext} from 'react';
import Context from '../context/Context';
import CartItem from './CartItem';

const ItemList = () => {
  const {cartItems} = useContext(Context);

  return (
    <div className='ItemList-root'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem}/>
      ))}
    </div>
  )
}

export default ItemList;