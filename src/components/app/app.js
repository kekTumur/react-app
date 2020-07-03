import React, { Component } from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import AddItem from '../add-item';

import './app.css';

export default class App extends Component {

  maxId = 100;

  state = {
    todoData: [
      this.createTodoItem('Drink Cofee'),
      this.createTodoItem('Make Awesome App'),
      this.createTodoItem('Have a lunch')
    ]
  };

  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      hide: false,
      id: this.maxId++
    };
  }

  deleteItem = (id) => {
    this.setState(({ todoData }) => {
      const idx = todoData.findIndex(el => el.id === id);

      const newArray = [
        ...todoData.slice(0, idx), 
        ...todoData.slice(idx + 1)
      ];

      return {
        todoData: newArray
      };
    });
  };

  addItem = (text) => {
    const newItem = this.createTodoItem(text);
    
    this.setState(({ todoData }) => {
      const newArray = [
        ...todoData,
        newItem
      ];

      return {
        todoData: newArray
      };

    });
  };

  toggleProperty(arr, id, propNaeme) {
    const idx = arr.findIndex(el => el.id === id);

    const oldItem = arr[idx];
    const newItem = {...oldItem, 
      [propNaeme]: !oldItem[propNaeme]};

      return [
        ...arr.slice(0, idx),
        newItem,
        ...arr.slice(idx + 1)
      ];
  }

  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      };
    });
  };

  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      };
    });
  };

  onSearchFilter = text => {
    this.setState(({ todoData }) => {
      let newArray = [...todoData];
      console.log(newArray);
      for (let i = 0; i < newArray.length; i++) {
        if (newArray[i].label.match(text)) {
          // newArray =  [
          //   ...newArray.slice(0, i),
          //   ...newArray.slice(i)
          // ];
          console.log(newArray[i].label.match(text));
        }
      }
      console.log(newArray);

      // return {
      //   todoData: newArray
      // };
    });
  };

  

  render() {
    const { todoData } = this.state;
    const doneCount = todoData
                      .filter(el => el.done).length;

    const todoCount = todoData.length - doneCount;

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel onSearchFilter={ this.onSearchFilter }/>
          <ItemStatusFilter />
        </div>
  
        <TodoList todos={this.state.todoData}
        onDeleted={ this.deleteItem }
        onToggleImportant={ this.onToggleImportant }
        onToggleDone={ this.onToggleDone }/>
        <AddItem 
        onAdded={ this.addItem }
        todos={ this.state.todoData }
        ></AddItem>
      </div>
    );
  }
}
