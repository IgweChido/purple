import React from 'react'
import menu from '../Images/menu.svg'
import {useDispatch, useSelector} from 'react-redux'
import SmallSideSlice, { ShowSmall } from '../Reducers/SmallSideSlice'

function HeadRLeft() {

    const dispatch = useDispatch()
    const{smallSlice}= useSelector((state)=> state.small)

  return (
    // {/* left */}
    <div className='hr-left'>

        {/* menu */}
        <div className='menu' onClick={()=>{
            if(smallSlice){
                 dispatch(ShowSmall(false))
                 console.log(smallSlice)
            }
           
            else{
                dispatch(ShowSmall(true))
                console.log(smallSlice)
            }
           
        }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z" fill="#9c9fa6"/>
        </svg>

        </div>

        {/* search */}
        <div className='search'>
            {/* image */}
            <div className='search-img'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5785 19L12.8115 14.234C11.7706 14.9207 10.5119 15.1967 9.27921 15.0085C8.04651 14.8204 6.92747 14.1815 6.13881 13.2156C5.35015 12.2497 4.94798 11.0255 5.01018 9.78004C5.07237 8.53461 5.59451 7.35657 6.47549 6.47404C7.35785 5.59274 8.53589 5.07025 9.78143 5.00779C11.027 4.94532 12.2514 5.34732 13.2175 6.13592C14.1836 6.92453 14.8227 8.04361 15.0109 9.27642C15.1992 10.5092 14.9232 11.768 14.2365 12.809L19.0015 17.577L17.5785 19ZM10.0355 7.01404C9.23453 7.01351 8.46617 7.33118 7.89944 7.89716C7.3327 8.46315 7.01402 9.23109 7.01349 10.032C7.01296 10.833 7.33062 11.6014 7.89661 12.1681C8.46259 12.7348 9.23053 13.0535 10.0315 13.054C10.4281 13.0543 10.8208 12.9764 11.1873 12.8249C11.5538 12.6734 11.8869 12.4512 12.1675 12.1709C12.4482 11.8907 12.6708 11.5579 12.8228 11.1916C12.9748 10.8253 13.0532 10.4326 13.0535 10.036C13.0537 9.63945 12.9759 9.24669 12.8244 8.88018C12.6728 8.51368 12.4506 8.18061 12.1704 7.89999C11.8901 7.61937 11.5573 7.3967 11.191 7.24469C10.8247 7.09268 10.4321 7.0143 10.0355 7.01404V7.01404Z" fill="#9c9fa6"/>
            </svg>



            </div>
            {/* input */}
            <div className='search-input'>
                <input 
                    type='text'
                    placeholder='Search Projects'
                ></input>
            </div>
        </div>

    </div>
  )
}

export default HeadRLeft