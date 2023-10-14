import React from 'react';
import {useContext} from 'react';
import Context from '../context/Context';

const Delete = ({item}) => {
  const {deleteCartItem} = useContext(Context);

  return (
    <div className='Delete-root'>
      <button className='Delete-button' onClick={() => deleteCartItem(item)}>X</button>
    </div>
  )
}

export default Delete;