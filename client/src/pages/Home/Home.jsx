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
        const movies = await axios.get(`http://localhost:8000/api/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, 
        {
          headers : {
            token : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYTBiYWFkZmY1YTEyOTg0ZmY5YjgwYSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5Mzc2NTA2NiwiZXhwIjoxNjk0MTk3MDY2fQ.u6lQJRmn56bWI2OQUinCg-iX3RbLZXoHN9optEpyGrM"
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