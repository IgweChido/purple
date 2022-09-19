import React, { useState } from 'react'
import { NavLink , useLocation} from 'react-router-dom'

function DashComp() {
    const[isActive,setIsActive]= useState(false)
    const location = useLocation()
    console.log(location.pathname)
  return (
    <NavLink to='/' className='dash-comp1'>
   
        
        <div className='dash-comp'>
            <p className={location.pathname==='/'?'dash-word-active':'dash-word'}>Dashboard</p>
            <div className='dash-img'>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.5 6.75L9 0.75L1.5 6.75V8.25H3V15.75H6.75V12.75C6.75 12.1533 6.98705 11.581 7.40901 11.159C7.83097 10.7371 8.40326 10.5 9 10.5C9.59674 10.5 10.169 10.7371 10.591 11.159C11.0129 11.581 11.25 12.1533 11.25 12.75V15.75H15V8.25H16.5V6.75Z" fill={location.pathname==='/'?"#b66dff":'#beabc2'}/>
                </svg>

            </div>
        </div>
   
        
    </NavLink>
  )
}

export default DashComp