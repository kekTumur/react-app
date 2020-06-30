import React from 'react';
import TodoListItem from './todo-list-item';

const TodoList = ({todos}) => { // React-компонент

  const elements = todos.map(item => {
    const { id, ...itemProps} = item;

    return (
      <li key={id}><TodoListItem {...itemProps}></TodoListItem></li>
    );
  });

    return (
      <ul>
        { elements }
      </ul>
    );
};

export default TodoList;