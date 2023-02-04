// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from 'react';
import ReactDom from 'react-dom';

// import AppHeader from './components/app-header/app-header';
// import AppSearch from './components/app-search/app-search';
// import TodoList from './components/todo-list/todo-list';
// import ItemStatusFilter from './components/item-status/item-status-filter';
// import App from './components/app/'


import App from './components/app/app';

ReactDom.render(<App />,
                 document.getElementById('root'))