import React from 'react';
import {useContext, useEffect} from 'react';
import Context from '../context/Context';

const AddToCart = ({item}) => {
  const {addToCart} = useContext(Context);

  return (
    <div className='AddToCart-root'>
      <button className='AddToCart-button' onClick={() => addToCart(item)}>Add</button>
    </div>
  )
}

export default AddToCart;