import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Featured from '../../components/Featured/Featured'
import List from '../../components/List/List'
import Navbar from '../../components/Navbar/Navbar'
import axios from "axios"
import "./home.scss"

const Home = ({type}) => {
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)

  useEffect(() => {
    const fetch_list = async () => {
      try{
        const movies = await axios.get(`http://localhost:8000/api/list${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, 
        {
          headers : {
            token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTBiYThjZmY1YTEyOTg0ZmY5YjgwNiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NTg1MDc5NDUsImV4cCI6MTY1ODkzOTk0NX0.FMl5z5PQBySSQaqzrq9gw-fpYpYcrlJdQ5Ka1jE13js"
        }
        })
        setLists(movies.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetch_list()
  }, [type])



  return (
    <div className='home'>
        <Navbar />
        <Featured type={type}/>

        {lists.map((list, index) => (
          <List list={list} key={index}/>
        ))}
    </div>
  )
}

export default Home 