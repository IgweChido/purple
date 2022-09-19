import {configureStore} from '@reduxjs/toolkit'

import SmallSideSlice from './SmallSideSlice'




const Store = configureStore({

    reducer:{
      
       
      
        small: SmallSideSlice,
    }
})

export default Store