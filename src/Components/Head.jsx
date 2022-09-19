import React from 'react'
import '../Styles/Head.css'
import logo from '../Images/logo.svg'
import HeadRLeft from './HeadRLeft'
import HeadRRight from './HeadRRight'
import small from '../Images/logo-small.svg'
import {useDispatch, useSelector} from 'react-redux'


function Head() {
  const{smallSlice}= useSelector((state)=> state.small)


  return (
    <div className='head'>
        {/* left */}
       { 
       smallSlice?
       <div className='head-left'>
            <div className='hl-image'>
                <img src={logo} alt=''></img>
            </div>
            

        </div>
        :

        <div className='head-left1'>
            <div className='hl-image1'>
                <img src={small} alt=''></img>
            </div>
            

        </div>}

        <div className='head-left2'>
            <div className='hl-image2'>
                <img src={small} alt=''></img>
            </div>
            

        </div>

        {/* right */}
        <div className='head-right'>

            <HeadRLeft/>
            <HeadRRight/>

           

        </div>

    </div>
  )
}

export default Head