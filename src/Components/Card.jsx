import React from 'react'
import './Card.css'
import images from '../Images'
import { useDispatch,useSelector } from 'react-redux'
import { deleteBookmark } from '../Store/BookmarkSlice'
const Card = ({item,searchValue,setSearchValue,setUpdateToggle,setSearchList,setId}) => {
    const data = useSelector(state=>state.bookmark)
    const dispatch = useDispatch()
    const handleUpdate=()=>{
        setUpdateToggle(pre=>!pre)
        document.body.style.width="100%"
        document.body.style.position="fixed"
        setId(item.id)
    }
    const handleDelete=()=>{
        // yaha se delete method dispatch hoga
        console.log('deleted')
        dispatch(deleteBookmark(item.id))
        // console.log(id)
        if(searchValue!==""){
            setSearchList([])
            setSearchValue("")
        }else{
           const searchlist = data.filter(item=>item.title.toLowerCase().includes(searchValue.toLowerCase()) 
                             || item.tags.toLowerCase().includes(searchValue.toLowerCase())
                             || item.description.toLowerCase().includes(searchValue.toLowerCase())
                             || item.date.includes(searchValue))
            setSearchList(searchlist)
            setSearchValue(searchValue)
        }
    }
    return (
    <div className='card'>
        <div className='image'>
            {console.log(item.imageId)}
            <img src={images[0][item.imageId%10+1]} alt="" style={{cursor:"pointer"}} title={item.title}/>
        </div>
        <h2 style={{background:"rgba(0,0,0,0.2)",marginTop:"-4px"}}>{item.tags}
                {/* {
                    item.tags.map((tag)=>{
                        return <span>{tag}</span>
                    })
                } */}
            </h2>
        <div className='content'>
            <span>Title</span>
            <a href={item.link} rel="noreferrer" target="_blank"><h3>{item.title}</h3></a>
            <span>Date</span><h3>{item.date}</h3>
            <span>Description</span>
            <h3>{item.description}</h3>
        </div>
        <div className='buttons'>
            <button  className='delete' onClick={handleDelete}>delete</button>
            <button className='update' onClick={handleUpdate}>update</button>
        </div>
    </div>
  )
}

export default Card