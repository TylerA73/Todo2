import React, { Component } from 'react';
import AddBar from '../containers/add_bar';
import TodoList from '../containers/todo_list';

export default class App extends Component {
  render() {
    return (
      <div>
      	<AddBar/>
      	<TodoList/>
      </div>
    );
  }
}
