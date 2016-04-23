/* @flow */
import React from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';
import type {TodoItems} from './reducers/todo-items-reducer';

type TodoListArgs = {todos: TodoItems, onTodoClick: Function};
export class TodoList extends React.Component {
  props: TodoListArgs;

  constructor(props: TodoListArgs) {
    super(props);
  }

  render() {
    return (
      <ul>
        {
          this.props.todos.map((todo, index) =>
          <Todo
            key={index}
            {...todo}
            onClick={() => this.props.onTodoClick(index)}
          />
        )}
      </ul>
    );
  }
}

export const TodoListHOC = connect(
  (state) => ({
    todos: state
  }),
  (dispatch) => ({
    onTodoClick: (index) => {
      dispatch({type: 'TOGGLE_TODO', index});
    }
  })
)(TodoList);

export default TodoListHOC;
