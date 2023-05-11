// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './style/index.css';
// //import App from './App';
// import reportWebVitals from './reportWebVitals';
// import reactLogo from './react.svg';

// const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <div>
//   <h1>Hello from React application</h1>
//   <img src={reactLogo} className="logo react" alt="React logo" />
//   </div>

// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
import React from "react";
import ReactDOM from "react-dom/client";
import TodoApp from './components/TodosApp.jsx';

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>
);

