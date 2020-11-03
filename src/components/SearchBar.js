import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search-bar">
        <p>Search</p>
        <form>
          <input
            name="productName"
            type="text"
            //   checked={}
            //   onChange={}
          />
          <label>
            <input
              name="isOnStock"
              type="checkbox"
              //   checked={}
              //   onChange={}
            />{' '}
            Only show products on stock
          </label>
        </form>
      </div>
    );
  }
}

export default SearchBar;
