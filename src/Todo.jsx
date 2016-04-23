/* @flow */
import React from 'react';

type TodoArgs = {text: string, completed: boolean, onClick: Function};
export default class Todo extends React.Component {
  props: TodoArgs;

  constructor(props: TodoArgs) {
    super(props);
  }

  render() {
    return (
      <li
        onClick={this.props.onClick}
        style={{
          textDecoration: this.props.completed ? 'line-through' : 'none'
        }}
      >
        {this.props.text}
      </li>
    );
  }
}
