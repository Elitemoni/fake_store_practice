import React from 'react';

const MerchForm = ({text,setValue}) => {
  return (
    <form className="MerchForm">
      <input className="MerchBar"
        id="search"
        type="text"
        placeholder={text}
        autoComplete="off"
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  )
}

export default MerchForm;