import logo from './logo.svg';
import './App.css';

import NavBar from './Component/NavBar/NavBar';
import ProfileContainer from './Component/Profile/ProfileContainer';
import Dialogs from "./Component/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import React from "react";
import News from "./Component/News/News";

import Settings from "./Component/Settings/Settings";
import DialogsConteiner from "./Component/Dialogs/DialogsConteiner";
import UsersConteiner from "./Component/Users/UsersConteiner";

import Musicc from "./Component/Redux/music";
import HeaderContainer from "./Component/Header/HeaderContainer";
import Login from "./Login/Login.";



function App(props) {

  return (
    <BrowserRouter>
                <div className='app-wrapper'>
              <HeaderContainer/>
              <NavBar/>


              <div className='app-wrapper-content'>
                  <Routes>
                      <Route path='profile' element={<ProfileContainer/>} >
                          <Route path=':userId' element={<ProfileContainer/>} />
                      </Route>
                      <Route path="/users" element={<UsersConteiner/> }/>
                        <Route path="/dialogs/*" element={<DialogsConteiner   />}/>
                      <Route path="/news" element={<News />}/>
                      <Route path="/music/" element={<Musicc/>}/>
                      <Route path="/settings" element={<Settings />}/>
                      <Route path="/login" element={<Login />}/>


                  </Routes>
              </div>
          </div>
      </BrowserRouter>
  );
}

export default App;
