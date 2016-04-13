/* @flow */
import {compose as lens, lensIndex as i, lensProp as p, remove, set} from 'ramda';

export type TodoItems = Array<TodoItem>;
type TodoItem = {
  text: string,
  completed: boolean
};

type TodoAction = AddTodoAction | DeleteTodoAction | EditTodoAction |
  ToggleTodoAction | CompleteAllAction | ClearCompletedAction;
type AddTodoAction = {
  type: 'ADD_TODO',
  text: string
};
type DeleteTodoAction = {
  type: 'DELETE_TODO',
  index: number
};
type EditTodoAction = {
  type: 'EDIT_TODO',
  index: number,
  text: string
};
type ToggleTodoAction = {
  type: 'TOGGLE_TODO',
  index: number
};
type CompleteAllAction = {
  type: 'COMPLETE_ALL'
};
type ClearCompletedAction = {
  type: 'CLEAR_COMPLETED'
};

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const COMPLETE_ALL = 'COMPLETE_ALL';
const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const todoItemsReducer = (todoItems: TodoItems = [], action: TodoAction): TodoItems => {
  switch(action.type) {
    case ADD_TODO: {
      const newTodoItem = {text: action.text, completed: false};
      return [...todoItems, newTodoItem];
    }

    case DELETE_TODO: {
      return remove(action.index, 1, todoItems);
    }

    case EDIT_TODO: {
      return set(lens(i(action.index), p('text')), action.text, todoItems);
    }

    case TOGGLE_TODO: {
      const completed = todoItems[action.index].completed;
      return set(lens(i(action.index), p('completed')), !completed, todoItems);
    }

    case COMPLETE_ALL: {
      return todoItems.map((todoItem) => ({...todoItem, completed: true}));
    }

    case CLEAR_COMPLETED: {
      return todoItems.filter((todoItem) => !todoItem.completed);
    }

    default: {
      return todoItems;
    }
  }
};
