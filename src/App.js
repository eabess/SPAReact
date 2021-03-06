import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settingss/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {
  // debugger;
  return ( 
    <div className = 'app-wrapper'>
      <HeaderContainer />
      <Navbar />
      <div className = 'app-wrapper-content'>
        <Routes>
          {/* <Route path = '/profile/' element = {<ProfileContainer />}/> 
          <Route path = '/profile/:userId' element = {<ProfileContainer />}/> */}
          <Route path="/profile/*" element={<ProfileContainer />}/>
          {/* <Route path='/profile/:userId' element={<ProfileContainer />}/> */}
          <Route path = '/dialogs' element = {<DialogsContainer />}/>
          <Route path = '/users' element = {<UsersContainer />}/>
          <Route path = '/news' element = {<News />}/>
          <Route path = '/music' element = {<Music />}/>
          <Route path = '/settings' element = {<Settings />}/>
        </Routes>
      </div>
    </div>
  );
};

export default App;