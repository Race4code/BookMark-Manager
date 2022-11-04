import React from 'react'
import './Navbar.css'
import { useSelector } from 'react-redux'
const Navbar = ({searchValue,setSearchValue,setSearchList}) => {
  
  const data=useSelector(state=>state.bookmark)

  const handleChange=(e)=>{
    console.log(e.target.value)
    if(e.target.value===""){
      setSearchValue("")
      setSearchList([])
    }else{
    const searchlist = data.filter(item=>item.title.toLowerCase().includes(e.target.value.toLowerCase()) 
                       || item.tags.toLowerCase().includes(e.target.value.toLowerCase())
                       || item.description.toLowerCase().includes(e.target.value.toLowerCase())
                       || item.date.includes(e.target.value))
    setSearchList(searchlist)
    setSearchValue(e.target.value)
    }
  }
 
  return (
    <div className='navbar'>
        <h1>Bookmark.io</h1>
        <input type="text" placeholder='search...' value={searchValue} onChange={handleChange}/>
    </div>
  )
}

export default Navbar