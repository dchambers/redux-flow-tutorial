/* global document */
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {todoItemsReducer} from './reducers/todo-items-reducer';
import TodoList from './TodoList';

const store = createStore(todoItemsReducer);
const appElem = document.createElement('div');
appElem.id = 'app';

store.dispatch({type: 'ADD_TODO', text: 'Do stuff.'});
store.dispatch({type: 'ADD_TODO', text: 'Do more stuff.'});
store.dispatch({type: 'TOGGLE_TODO', index: 0});

document.body.appendChild(appElem);

render(
  <Provider store={store}>
    <TodoList />
  </Provider>,
  appElem
);
