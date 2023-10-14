import React from 'react';

const ItemBox = ({item}) => {
  return (
    <div className='ItemBox-root' key={item.id}>
      <div className='ItemBox-flex-row'>
        <div className='ItemBox-quantity'>{item.quantity}</div>
        <div className='ItemBox-name'>{item.name}</div>
      </div>
      <img className='ItemBox-img' src={item.img}/>
      <div className='ItemBox-flex-row'>
        <div className='ItemBox-description'>{item.desc}</div>
      </div>
      <div className='ItemBox-flex-row'>
        <div className='ItemBox-price'>${item.price}</div>
      </div>
    </div>
  );
}

export default ItemBox