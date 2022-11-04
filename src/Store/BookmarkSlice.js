import { createSlice } from "@reduxjs/toolkit";
// import { set } from "immer/dist/internal";

const initialState=[]

const bookmarkSlice = createSlice({
    name:"bookmark",
    initialState,
    reducers:{
        // initiate 
        initiate:(state,actions)=>{
            state = actions.payload
        },
        // adding bookmarks
        addBookmark:(state,{payload})=>{
            console.log(' slice addbookmark')
            state.push(payload)
        },
        // updating lis
        updateBookmark:(state,actions)=>{
            return state.map((item)=>{ 
                return item.id===actions.payload.id? actions.payload : item
            })
        },
        // delete a bookmark
        deleteBookmark:(state,actions)=>{
            return state.filter((item)=>{return item.id!==actions.payload})
        },
    }
})

export const {addBookmark,deleteBookmark,updateBookmark,initiate} = bookmarkSlice.actions
export default bookmarkSlice.reducer