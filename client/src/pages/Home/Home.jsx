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

  useEffect(() => {
    const fetch_list = async () => {
      try{
        const movies = await axios.get("http://localhost:8000/api/list/")
        // setLists()
        console.log(movies)
      }
      catch(err){
        console.log(err)
      }
    }

    fetch_list()

  }, [])
  return (
    <div className='home'>
        <Navbar />
        <Featured type={type}/>
        <List />
        <List />
        <List />
        <List />

    </div>
  )
}

export default Home 