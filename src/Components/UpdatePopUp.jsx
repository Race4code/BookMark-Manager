import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import './UpdatePopUp.css'
import {updateBookmark} from '../Store/BookmarkSlice'
const UpdatePopUp = ({setSearchValue,setSearchList,setUpdateToggle,id}) => {
    const dispatch = useDispatch()
    const data = useSelector(state=>state.bookmark)
    const list = data.filter((item)=>item.id===id)
    console.log(list)
    const handleClose = ()=>{
        console.log('close')
        setUpdateToggle(pre=>!pre)
        setSearchList("")
        setSearchValue("")
        document.body.style.width="100%"
        document.body.style.position="static"
    }
    const handleSubmit=(e)=>{
        console.log('submit')
        e.preventDefault()
        setUpdateToggle(pre=>!pre)
        let data = {}
        data['title'] = e.target[0].value
        data['link'] = e.target[1].value
        data['description'] = e.target[2].value
        data['tags'] = e.target[3].value
        data['date'] = e.target[4].value
        data['id'] = id
        dispatch(updateBookmark(data))
        setSearchList("")
        setSearchValue("")
        document.body.style.width="100%"
        document.body.style.position="static"
    }
  return (
    <div className='container'>
        <div className='outerForm'>
        <div className='header'>
            <h3>Update</h3>
            <button onClick={handleClose}>&times;</button>
        </div> 
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" placeholder='title' defaultValue={list[0].title}/>
                <label>Link</label>
                <input type="text" placeholder='https://google.com' defaultValue={list[0].link}/>
                <label>Description</label>
                <textarea type="text" placeholder='description' defaultValue={list[0].description}/>
                <label>tags</label>
                <input type="text" placeholder='tags'defaultValue={list[0].tags}/>
                <label>Date</label>
                <input type="date" placeholder='date'defaultValue={list[0].date}/>
                <button type="submit">Update</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default UpdatePopUp