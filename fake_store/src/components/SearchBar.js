import React, {useContext} from 'react';
import Context from '../context/Context';

const SearchBar = () => {
  const {setSearch} = useContext(Context);

  return (
    <div className="SearchBar-root">
      <form className="SearchBar-form" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search"></label>
        <input className="SearchBar-bar"
          id="search"
          type="text"
          placeholder="Search Product"
          autoComplete="off"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  )
}

export default SearchBar