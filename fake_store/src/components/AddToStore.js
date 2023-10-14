import React from 'react';
import {useContext, useState} from 'react';
import Context from '../context/Context';

const AddToStore = ({name, img, desc, quantity, price}) => {
  const {addToStore} = useContext(Context);

  return (
    <div className='AddToStore-root'>
      <button className='AddToStore-button' onClick={() => (addToStore({
        id: 4,
        name: name,
        img: img,
        desc: desc,
        quantity: quantity,
        price: price
      }))}>Sell</button>
    </div>
  )
}

export default AddToStore;