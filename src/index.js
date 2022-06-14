import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

    let posts = [
      { id: 1, message: "Hi! What's is your name?", likesCount: 12 },
      { id: 2, message: "Hello my name is Ihor!", likesCount: 1 },
      { id: 3, message: "What's up man?", likesCount: 46 },
      { id: 4, message: "Yeahhh goood!!!", likesCount: 57 }
    ];

    let dialogs = [
      { id: 1, name: "Ihor" },
      { id: 2, name: "Zenuk" },
      { id: 3, name: "Tolik" },
      { id: 4, name: "Masha" },
      { id: 5, name: "Olga" }
    ];

    let messages = [
      { id: 1, message: "Hi" },
      { id: 2, message: "Yo IT komasutra" },
      { id: 3, message: "Nice stuff" }
    ];


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
