import React from 'react';
import ItemBox from './ItemBox';
import AddToCart from './AddToCart';

const StoreItem = ({item}) => {
  return (
    <div className='StoreItem-root'>
      <ItemBox key={item.id} item={item}/>
      <AddToCart item={item}/>
    </div>
  )
}

export default StoreItem;