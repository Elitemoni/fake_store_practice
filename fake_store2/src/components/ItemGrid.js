import React from 'react';
import {useContext, useEffect} from 'react';
import Context from '../context/Context';
import StoreItem from './StoreItem';

const ItemGrid = () => {
  const {displayItems, search, addToCart} = useContext(Context);

  return (
    <div className='ItemGrid-root'>
      {displayItems.map((item) => ((item.name).toLowerCase().includes(search.toLowerCase()) ? 
      <StoreItem item={item}/> : <></>
      ))}
    </div>
  );
}

export default ItemGrid;