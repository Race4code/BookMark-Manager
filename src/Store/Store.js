import {configureStore} from '@reduxjs/toolkit'
import reducer from './BookmarkSlice'


const store = configureStore({
    reducer:{
        bookmark:reducer,
    },
})

export default store