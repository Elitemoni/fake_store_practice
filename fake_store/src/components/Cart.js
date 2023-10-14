import React from 'react';
import ItemList from './ItemList';
import {Link} from 'react-router-dom';
import {useContext, useState} from 'react';
import Context from '../context/Context';

const Cart = () => {
  const {buy, totalPrice} = useContext(Context);

  return (
    <div className='Cart-root'>
      <div className='Cart-header'>Cart</div>
      <div className='Cart-box'>
        <ItemList/>
        <div className='Cart-question'>
          <div className='Cart-ask'>Total Price:<br/>${totalPrice}</div>
          <button className='Cart-buy-button' onClick={() => (buy())}>Buy now</button>
          <Link to='/' className='Cart-not-buy'>
            <div className='Cart-not-buy-text'>Look more</div>
          </Link>
        </div>  
      </div>
    </div>
  )
}

export default Cart;