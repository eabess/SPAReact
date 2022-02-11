import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settingss/Settings';

const App = (props) => {
  // debugger;
  return (
    <div className = 'app-wrapper'>
      <Header />
      <Navbar ava = { props.state.siteBar } />
      <div className = 'app-wrapper-content'>
        <Routes>
          <Route path = '/profile'
            element = {<Profile 
              profilePage = { props.state.profilePage }
              dispatch = { props.dispatch } />}/>
          <Route path = '/dialogs' 
            element = {<Dialogs 
              // dialogsPage = { props.state.dialogsPage }
              // dispatch = { props.dispatch } 
              store = { props.store } />}/>
          <Route path = '/news' element = {<News />}/>
          <Route path = '/music' element = {<Music />}/>
          <Route path = '/settings' element = {<Settings />}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;