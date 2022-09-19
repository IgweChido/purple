import React from 'react'
import '../Styles/MainPage.css'
import DashComp from './DashComp'
import DropComponent from './DropComponent'
import ProfileComp from './ProfileComp'

function SideBarPhone() {

    
  return (
    <div className='side-phone'>
      <ProfileComp/>
      
        {/* dash comp */}
        <DashComp/>

        {/* drop comp */}
        <DropComponent/>

        

    </div>
  )
}

export default SideBarPhone
