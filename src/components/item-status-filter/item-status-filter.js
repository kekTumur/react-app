import React, { Component } from 'react';

import './item-status-filter.css';

export default class ItemStatusFilter extends Component {

  state = {
    filter: 'all'
  }
  
  buttons = [
    {name: 'all', label: 'All'},
    {name: 'active', label: 'Active'},
    {name: 'done', label: 'Done'},
  ]


  filtered = event => {
    const target = event.target;
    if (target && target.tagName === 'BUTTON') {
      const filter = target.textContent.toLowerCase();
      this.setState({ filter });
      this.props.onFilter(filter);
    }
  };

  render() {
    const { filter } = this.props;
    const buttons = this.buttons.map(({name, label}) => {
      const isActive = filter === name;
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';
      return (
        <button 
        type="button"
        className={`btn ${clazz}`}
        key={name}
        >{label}</button>
      );
    });


    return (
      <div
      onClick={ this.filtered } 
      className="btn-group">
        { buttons }
      </div>
    );
  }
}


