import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost} from './redux/state';
import {updateNewPostText} from './redux/state';
import {addMessage} from './redux/state';
import {updateNewTextMessage} from './redux/state';
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App state={state} 
        addPost={addPost} 
        updateNewPostText={updateNewPostText}
        addMessage={addMessage}
        updateNewTextMessage={updateNewTextMessage}/>
      </BrowserRouter>
    </React.StrictMode>
  );
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();