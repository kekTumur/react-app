import React from 'react';
import ReactDOM from 'react-dom';

import AppHeader from './components/app-header';
import SearchPanel from './components/search-panel';
import TodoList from './components/todo-list';


const App = () => {

  const toDoData = [
    {label: 'Drink Cofee', important: false, id: 1},
    {label: 'Make Awesome App', important: true, id: 2},
    {label: 'Have a lunch', important: false, id: 3}
  ];

  return (
    <div>
      <AppHeader></AppHeader>
      <SearchPanel></SearchPanel>
      <TodoList todos={toDoData}></TodoList>
    </div>
  );
};


ReactDOM.render(<App></App>, document.querySelector('#root'));