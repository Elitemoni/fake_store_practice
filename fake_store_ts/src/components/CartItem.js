import React from 'react';
import ItemBox from './ItemBox';
import Delete from './Delete';

const CartItem = ({item}) => {
  return (
    <div className='CartItem-root' key={item.id}>
      <ItemBox key={item.id} item={item}/>
      <Delete item={item}/>
    </div>
  )
}

export default CartItem;