import React from 'react'
import './CreatePopUp.css'
import { useDispatch,useSelector } from 'react-redux'
import {v4 as uuidv4} from 'uuid'

import { addBookmark } from '../Store/BookmarkSlice'

const CreatePopUp = ({setCreateToggle}) => {
    const list = useSelector(state=>state.bookmark)
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{
        console.log('submmit')
        e.preventDefault()
        setCreateToggle(pre=>!pre)
        let data = {}
        data['title'] = e.target[0].value
        data['link'] = e.target[1].value
        data['description'] = e.target[2].value
        data['tags'] = e.target[3].value
        data['date'] = e.target[4].value
        data['id'] = uuidv4()
        data['imageId']=list.length+1;
        dispatch(addBookmark(data))
        document.body.style.width="100%"
        document.body.style.position="static"
    }

    const handleClose=()=>{
        setCreateToggle(pre=>!pre)
        document.body.style.width="100%"
        document.body.style.position="static"
    }
  return (
    <div className='container'>
        <div className='outerForm'>
        <div className='header'>
            <h3>BookMark</h3>
            <button onClick={handleClose}>&times;</button>
        </div> 
        <div className='form'>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" placeholder='title' required={true} maxLength="10"/>
                <label>Link</label>
                <input type="url" placeholder='https://google.com'/>
                <label>Description</label>
                <textarea type="text" placeholder='description' required={true} />
                <label>Tags</label>
                <input type="text" placeholder='separate tags by , ' required={true}/>
                <label>Date</label>
                <input type="date" placeholder='date' required={true}/>
                <button type="submit">Create</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default CreatePopUp