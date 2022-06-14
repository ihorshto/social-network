import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App(props) {



  return (
      <BrowserRouter>
        <div className='app-wrapper'>
          <Header/>
          <Navbar/>
          <div className='app-wrapper-content'>
              <Routes>
                <Route path='/profile' element={<Profile posts={props.posts} />} />
                <Route path='/dialogs/*' element={<Dialogs dialogs={props.dialogs} messages={props.messages}/>} />
                <Route path='/news' element={<News/>} />
                <Route path='/music' element={<Music/>} />
                <Route path='/settings' element={<Settings/>} />
              </Routes>
          </div>
        </div>
      </BrowserRouter>
  );  
}


export default App;   
