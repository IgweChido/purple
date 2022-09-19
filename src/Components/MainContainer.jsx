import React from 'react'
import Head from './Head'
import MainPage from './MainPage'
import SideBar from './SideBar'
import '../Styles/MainContainer.css'
import SideBarSmall from './SideBarSmall'
import {useDispatch, useSelector} from 'react-redux'

function MainContainer() {
  const{smallSlice}= useSelector((state)=> state.small)

  return (
    <div className='main-cont'>
        { smallSlice?
          <SideBar/>
          :
          <SideBarSmall/>
        }
        <MainPage/> 
    </div>
  )
}

export default MainContainer