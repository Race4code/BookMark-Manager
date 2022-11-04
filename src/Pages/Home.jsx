import React,{useState,useEffect} from 'react'
import './Home.css'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'
import CreatePopUp from '../Components/CreatePopUp'
import UpdatePopUp from '../Components/UpdatePopUp'
import {useSelector,useDispatch} from 'react-redux'
import { initiate } from '../Store/BookmarkSlice'


const getLocalIBookmark = ()=>{
  let localItem = localStorage.getItem('bookmarkList')
  console.log(localItem)
  if(localItem){
    return JSON.parse(localStorage.getItem('bookmarkList'))
  }else{
    return []
  }
}
const Home = () => {
  // Tooglers for update and create
    const [createToggle,setCreateToggle] = useState(false)
    const [updateToggle,setUpdateToggle] = useState(false)
    // searchlist for searachfilter 
    const [searchList,setSearchList]=useState([])
    // id to update a particular item in array
    const [id,setId] = useState(null)
    // value entered in search box
    const [searchValue,setSearchValue] = useState("")
    // bookmark list array 
    const bookmarkList =  useSelector(state=>state.bookmark)
    const dispatch = useDispatch()
    dispatch(initiate(getLocalIBookmark()))

    useEffect(()=>{
      localStorage.setItem('bookmarkList',JSON.stringify(bookmarkList))
    },[bookmarkList])

    console.log('home page bookmarklist')
    console.log(`list`)
    console.log(bookmarkList)
    console.log(`searchlist`)
    console.log(searchList)

    const handleClick = ()=>{
      document.body.style.width="100%"
      document.body.style.position="fixed"
      setCreateToggle(pre=>!pre)
    }
    // console.log(bookmarkList)
  return (
    <div>
        <Navbar setSearchValue={setSearchValue} searchValue={searchValue} setSearchList={setSearchList}/>
        <div className='popUp'>
        {createToggle && <CreatePopUp setCreateToggle={setCreateToggle}/>}
        {updateToggle && <UpdatePopUp setSearchValue={setSearchValue} setSearchList={setSearchList} setUpdateToggle={setUpdateToggle} id={id} />}
        </div>
        <div className='homePage'>
        {!searchValue && <button onClick={handleClick}>Create Bookmark</button>}
        <div className='bookmarkCardsDisplay'>
          {searchValue!=="" && searchList.length===0 && <h1>No result</h1>}
            {searchValue!=="" ?
            searchList.map((item)=>{
              return <Card 
                              key={item.id} 
                              item={item} 
                              searchValue={searchValue}
                              setSearchValue={setSearchValue}
                              // setBookmarkList={setBookmarkList}
                              setSearchList={setSearchList}
                              setUpdateToggle={setUpdateToggle}
                              setId={setId}
                            />
            })
            : bookmarkList &&
                bookmarkList.map((item)=>{
                    return <Card 
                              key={item.id} 
                              item={item} 
                              setId={setId}
                              searchValue={searchValue}
                              setSearchList={setSearchList}
                              setUpdateToggle={setUpdateToggle}
                            />
                })
            }
        </div>
        {/* <div className='footer'>
          @bookmark.io allrightreserved
        </div> */}
        </div>
    </div>
  )
}

export default Home
