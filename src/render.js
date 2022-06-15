import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost} from './redux/state';
import {addMessage} from './redux/state';
import { BrowserRouter} from 'react-router-dom';


 export let rerenderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <BrowserRouter >
        <App state={state} 
        addPost={addPost} 
        addMessage={addMessage}/>
      </BrowserRouter>
    </React.StrictMode>
  );
}

