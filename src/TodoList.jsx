/* @flow */
import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import Todo from './Todo';
import type {TodoItems} from './reducers/todo-items-reducer';

type TodoListArgs = {todos: TodoItems, onTodoClick: Function};
export const TodoList = ({todos, onTodoClick}: TodoListArgs): Object => (
  <ul>
    {
      todos.map((todo, index) =>
      <Todo
        key={index}
        {...todo}
        onClick={() => onTodoClick(index)}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

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
