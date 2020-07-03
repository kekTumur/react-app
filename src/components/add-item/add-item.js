import React, { Component } from 'react';
import './add-item.css';

export default class AddItem extends Component {

    state = {
        label: ''
    };

    onLabelChange = event => {
        this.setState({
            label: event.target.value.replace(/[^0-9]/g, '') 
        });
    };

    onSubmit = event => {
        event.preventDefault();
        this.props.onAdded(this.state.label);
        this.setState({
            label: ''
        });
    };

    render() {
        return (
            <form className="add-item-form"
                  onSubmit={ this.onSubmit }>
                <input 
                value={this.state.label}
                type="text" 
                className="add-item-input" 
                placeholder="type to add new note"
                onChange={this.onLabelChange}
                ></input>
                <button 
                className="add-item-btn btn btn-outline-secondary"
                >ADD</button>
            </form>
        );
    }
}