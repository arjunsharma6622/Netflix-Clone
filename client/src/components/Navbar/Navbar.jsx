import React from 'react'
import "./navbar.scss"
import {ArrowDropDown, Notifications, Person, Search} from "@material-ui/icons"
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset <= 200 ? false : true)
        return () => (window.onscroll = null)
    }


  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
        <div className="container">
            <div className="left">
                <img src="./logo.png" alt="" />

                <Link to={"/"} className="link">
                    <span>Homepage</span>
                </Link>
                <Link to={"/series"} className="link">
                    <span>Series</span>
                </Link>
                <Link to={"/movies"} className="link">
                    <span>Movies</span>
                </Link>
                <span>New and popular</span>
                <span>My list</span>

            </div>
            <div className="right">
                <Search className='icon'/>
                <span>KID</span>
                <Notifications className='icon'/>
                <Person className='icon'/>
                <div className="profile">
                    <ArrowDropDown className='icon'/>
                    <div className="options">
                        <span>Settings</span>
                        <span>LogOut</span>
                    </div>

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Navbar