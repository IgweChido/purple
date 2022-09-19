import React, { useState } from 'react'
import HiddenComp from './HiddenComp'

function DropComponent() {

    const [drop, setDrop] = useState(false)
    const[isActive, setIsActive]= useState(false)


  return (
    // {/* drop down comp */}
    <div className='drop-comp'>
        {/* shown */}
        <div className='drop-show'>
            <p className={isActive ?'drop-p-active':'drop-p'}>Basic UI Elements</p>
            <div className='arrow-img'>
                <div className={drop?'arrow-active':'arrow'} onClick={()=>{
                    drop?
                    setDrop(false)
                    :
                    setDrop(true)
                }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.2187 6.96973L8.999 10.1895L5.77925 6.96973L4.71875 8.03023L8.999 12.3105L13.2793 8.03023L12.2187 6.96973Z" fill={isActive?"#b66dff":'#beabc2'}/>
                    </svg>

                </div>
                
                <div className='target'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 11.25C10.2426 11.25 11.25 10.2426 11.25 9C11.25 7.75736 10.2426 6.75 9 6.75C7.75736 6.75 6.75 7.75736 6.75 9C6.75 10.2426 7.75736 11.25 9 11.25Z" fill={isActive?"#b66dff":'#beabc2'}/>
                        <path d="M9.75 3.05175V1.5H8.25V3.05175C6.93013 3.22001 5.70349 3.8218 4.76265 4.76265C3.8218 5.70349 3.22001 6.93013 3.05175 8.25H1.5V9.75H3.05175C3.21989 11.0699 3.82164 12.2966 4.76251 13.2375C5.70337 14.1784 6.93008 14.7801 8.25 14.9482V16.5H9.75V14.9482C11.0699 14.7801 12.2966 14.1784 13.2375 13.2375C14.1784 12.2966 14.7801 11.0699 14.9482 9.75H16.5V8.25H14.9482C14.78 6.93013 14.1782 5.70349 13.2374 4.76265C12.2965 3.8218 11.0699 3.22001 9.75 3.05175V3.05175ZM9 13.5C6.51825 13.5 4.5 11.4817 4.5 9C4.5 6.51825 6.51825 4.5 9 4.5C11.4817 4.5 13.5 6.51825 13.5 9C13.5 11.4817 11.4817 13.5 9 13.5Z" fill={isActive?"#b66dff":'#beabc2'}/>
                    </svg>

                </div>
            </div>
        </div>

        {/* hidden */}
        <div className={drop ?' showdem':'drop-hidden'}>
            <HiddenComp setIsActive={setIsActive}/>
           

        </div>
    </div>
  )
}

export default DropComponent