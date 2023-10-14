import React from 'react';
import {useContext, useEffect} from 'react';
import Context from '../context/Context';
import StoreItem from './StoreItem';

const ItemGrid = () => {
  const {displayItems, search, addToCart} = useContext(Context);

  // useEffect(() => {
  //   console.log('items below');
  //   console.log(displayItems);
  //   console.log(JSON.stringify(displayItems));
  // },[])

  return (
    <div className='ItemGrid-root'>
      {displayItems.map((item) => ((item.name).toLowerCase().includes(search.toLowerCase()) ? 
      <StoreItem item={item}/> : <></>
      ))}
    </div>
  );
}

export default ItemGrid;