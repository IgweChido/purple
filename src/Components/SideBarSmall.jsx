import React, { useState } from 'react'
import { NavLink , useLocation} from 'react-router-dom'
import '../Styles/SideBarSmall.css'

function SideBarSmall() {
    const location = useLocation()
    const [hover, setHover]=useState(false)
    const [hover1, setHover1]=useState(false)

  return (
    <div className='side-small'>
        {/* image comp */}
        <div className='image-comp' onMouseOver={()=>{
            setHover(true)
        }}  onMouseLeave={()=>{
            setHover(false)
        }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.5 6.75L9 0.75L1.5 6.75V8.25H3V15.75H6.75V12.75C6.75 12.1533 6.98705 11.581 7.40901 11.159C7.83097 10.7371 8.40326 10.5 9 10.5C9.59674 10.5 10.169 10.7371 10.591 11.159C11.0129 11.581 11.25 12.1533 11.25 12.75V15.75H15V8.25H16.5V6.75Z" fill={location.pathname==='/'?"#b66dff":'#beabc2'}/>
            </svg>
            {/* hover */}
            <div className={hover?'hover-active image-hover':'image-hover'}>
                <NavLink to='/' className='ih-nav'>
                    <p className={location.pathname==='/'?'ih-p-active':'ih-p'}>Dashboard</p>
                </NavLink>
                
            </div>
        </div>

        {/* image comp */}
        <div className='image-comp' onMouseOver={()=>{
            setHover1(true)
        }}  onMouseLeave={()=>{
            setHover1(false)
        }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z" fill={location.pathname==='/basic-ui-elements'?"#b66dff":'#beabc2'}/>
                <path d="M9.75 3.05175V1.5H8.25V3.05175C6.93013 3.22001 5.70349 3.8218 4.76265 4.76265C3.8218 5.70349 3.22001 6.93013 3.05175 8.25H1.5V9.75H3.05175C3.21989 11.0699 3.82164 12.2966 4.76251 13.2375C5.70337 14.1784 6.93008 14.7801 8.25 14.9482V16.5H9.75V14.9482C11.0699 14.7801 12.2966 14.1784 13.2375 13.2375C14.1784 12.2966 14.7801 11.0699 14.9482 9.75H16.5V8.25H14.9482C14.78 6.93013 14.1782 5.70349 13.2374 4.76265C12.2965 3.8218 11.0699 3.22001 9.75 3.05175V3.05175ZM9 13.5C6.51825 13.5 4.5 11.4817 4.5 9C4.5 6.51825 6.51825 4.5 9 4.5C11.4817 4.5 13.5 6.51825 13.5 9C13.5 11.4817 11.4817 13.5 9 13.5Z" fill={location.pathname==='/basic-ui-elements'?"#b66dff":'#beabc2'}/>
            </svg>

            {/* hover */}
            <div className={hover1?'image-hover hover-active1':'image-hover'}>
                <p className={location.pathname==='/basic-ui-elements'?'ih-p-active1':'ih-p1'}>Basic UI Elements</p>
                <NavLink to='/basic-ui-elements' className='ih-nav1'>
                    <div className='chevron'>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3 5.99999C3 5.90053 3.03951 5.80515 3.10984 5.73482C3.18016 5.66449 3.27554 5.62499 3.375 5.62499H7.71975L6.1095 4.01549C6.03908 3.94507 5.99953 3.84957 5.99953 3.74999C5.99953 3.6504 6.03908 3.5549 6.1095 3.48449C6.17991 3.41407 6.27542 3.37451 6.375 3.37451C6.47458 3.37451 6.57009 3.41407 6.6405 3.48449L8.8905 5.73449C8.92542 5.76932 8.95313 5.8107 8.97203 5.85626C8.99094 5.90182 9.00067 5.95066 9.00067 5.99999C9.00067 6.04931 8.99094 6.09815 8.97203 6.14371C8.95313 6.18927 8.92542 6.23065 8.8905 6.26549L6.6405 8.51549C6.57009 8.5859 6.47458 8.62546 6.375 8.62546C6.27542 8.62546 6.17991 8.5859 6.1095 8.51549C6.03908 8.44507 5.99953 8.34957 5.99953 8.24999C5.99953 8.1504 6.03908 8.0549 6.1095 7.98449L7.71975 6.37499H3.375C3.27554 6.37499 3.18016 6.33548 3.10984 6.26515C3.03951 6.19482 3 6.09944 3 5.99999Z" fill="#888"/>
                        </svg>
                    </div>
                
                    <p className={location.pathname==='/basic-ui-elements'?'hide-p-active':'hide-p'}>Buttons</p>
                </NavLink>
              
                
            </div>
        </div>
    </div>
  )
}

export default SideBarSmall