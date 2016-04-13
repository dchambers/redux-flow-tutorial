import {todoItemsReducer} from './todo-items-reducer';
import {describe, it} from 'mocha';
import {expect} from 'chai';

describe('todo-items-reducer', () => {
  const initialTodoItems = [
    {text: 'Do stuff.', completed: true},
    {text: 'Do more stuff.', completed: false}
  ];

  it('allows items to be added', () => {
    const todoItems = todoItemsReducer(undefined, {type: 'ADD_TODO', text: 'Do stuff.'});
    expect(todoItems).to.deep.equal([{text: 'Do stuff.', completed: false}]);
  });

  it('allows items to be removed', () => {
    const todoItems = initialTodoItems;
    const updatedTodoItems = todoItemsReducer(todoItems, {type: 'DELETE_TODO', index: 0});
    expect(updatedTodoItems).to.deep.equal([
      {text: 'Do more stuff.', completed: false}
    ]);
  });

  it('allows items to be edited', () => {
    const todoItems = initialTodoItems;
    const editedTodoItems = todoItemsReducer(todoItems, {type: 'EDIT_TODO', index: 0, text: 'Do some stuff.'});
    expect(editedTodoItems).to.deep.equal([
      {text: 'Do some stuff.', completed: true},
      {text: 'Do more stuff.', completed: false}
    ]);
  });

  it('allows items to be marked as completed', () => {
    const todoItems = initialTodoItems;
    const modifiedTodoItems = todoItemsReducer(todoItems, {type: 'TOGGLE_TODO', index: 1});
    expect(modifiedTodoItems).to.deep.equal([
      {text: 'Do stuff.', completed: true},
      {text: 'Do more stuff.', completed: true}
    ]);
  });

  it('allows completed items to be marked as uncompleted', () => {
    const todoItems = initialTodoItems;
    const modifiedTodoItems = todoItemsReducer(todoItems, {type: 'TOGGLE_TODO', index: 0});
    expect(modifiedTodoItems).to.deep.equal([
      {text: 'Do stuff.', completed: false},
      {text: 'Do more stuff.', completed: false}
    ]);
  });

  it('allow all items to be completed at once', () => {
    const todoItems = initialTodoItems;
    const modifiedTodoItems = todoItemsReducer(todoItems, {type: 'COMPLETE_ALL'});
    expect(modifiedTodoItems).to.deep.equal([
      {text: 'Do stuff.', completed: true},
      {text: 'Do more stuff.', completed: true}
    ]);
  });

  it('allows completed items to be removed', () => {
    const todoItems = initialTodoItems;
    const modifiedTodoItems = todoItemsReducer(todoItems, {type: 'CLEAR_COMPLETED'});
    expect(modifiedTodoItems).to.deep.equal([
      {text: 'Do more stuff.', completed: false}
    ]);
  });
});
