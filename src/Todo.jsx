/* @flow */
import React, {PropTypes} from 'react';

type TodoArgs = {text: string, completed: boolean, onClick: Function};
export const Todo = ({text, completed, onClick}: TodoArgs): Object => (
  <li
    onClick={onClick}
    style={{
      textDecoration: completed ? 'line-through' : 'none'
    }}
  >
    {text}
  </li>
);

Todo.propTypes = {
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Todo;
