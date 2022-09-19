import React from 'react'
import '../Styles/MainPage.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard';
import BasicUIElements from './BasicUIElements';
import SideBar from './SideBar';
import SideBarPhone from './SideBarPhone';
import {useDispatch, useSelector} from 'react-redux'


function MainPage() {
  const{smallSlice}= useSelector((state)=> state.small)
  return (
    <div className='main-page'>
      {/* phone navigation */}
     { 
     smallSlice&&
      <div className='phone-nav'>
          <SideBarPhone/>
        </div>
      }
        <Routes>
            <Route   path=''  exact element={<Dashboard/>} />
            <Route  path='basic-ui-elements' exact element={<BasicUIElements/>} />
            
          </Routes>
    </div>
  )
}

export default MainPage