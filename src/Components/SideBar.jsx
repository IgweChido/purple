import React from 'react'

import '../Styles/SideBar.css'
import DashComp from './DashComp'
import DropComponent from './DropComponent'
import ProfileComp from './ProfileComp'
function SideBar() {
  return (
    <div className='side-bar'>
      <ProfileComp/>
      
        {/* dash comp */}
        <DashComp/>

        {/* drop comp */}
        <DropComponent/>

        

    </div>
  )
}

export default SideBar