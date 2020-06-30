import React from 'react';

const SearchPanel = () => {
    const searchText = 'search panel';
    const searchStyle = {
      fontSize: '20px'
    };
    return <input
      style={searchStyle}
      placeholder={searchText}
      ></input>;
}; // React-компонент

export default SearchPanel;