import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { addPost } from './redux/state';

function App(props) {

  return (
        <div className='app-wrapper'>
          <Header/>
          <Navbar state = {props.state.sidebar}/>
          <div className='app-wrapper-content'>
              <Routes>
                <Route path='/profile' element={<Profile 
                  state = {props.state.profilePage} addPost={props.addPost}/>} / >
                <Route path='/dialogs/*' element={<Dialogs 
                  state={props.state.dialogsPage} addMessage={props.addMessage}/>} / >
                <Route path='/news' element={<News/>} />
                <Route path='/music' element={<Music/>} />
                <Route path='/settings' element={<Settings/>} />
              </Routes>
          </div>
        </div>

  );  
}


export default App;   
