import {compose as lens, lensIndex as i, lensProp as p, remove, set} from 'ramda';

const ADD_TODO = 'ADD_TODO';
const DELETE_TODO = 'DELETE_TODO';
const EDIT_TODO = 'EDIT_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const COMPLETE_ALL = 'COMPLETE_ALL';
const CLEAR_COMPLETED = 'CLEAR_COMPLETED';

export const todoItemsReducer = (todoItems = [], action) => {
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
