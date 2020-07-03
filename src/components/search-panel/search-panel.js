import React, { Component } from 'react';

import './search-panel.css';

export default class SearchPanel extends Component {

  labelFilter = event => {
    this.props.onSearchFilter(event.target.value);
  };

  render() {
    const { todos } = this.props;
    return (
      <input type="text"
                className="form-control search-input"
                placeholder="type to search" 
                onChange={ this.labelFilter }
                />
    );
  }
}
