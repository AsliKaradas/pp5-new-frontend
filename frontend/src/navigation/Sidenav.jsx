import React from "react"
import './Sidenav.css'
import HomeIcon from '@mui/icons-material/Home' 
import SearchIcon from '@mui/icons-material/Search';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function Sidenav () {
    return(
        <div className="sidenav">
            <h1 className="sidenav__logo">FRIE<span>AVEL</span></h1>
            <div className="sidenav__buttons">
                <button className="sidenav__button">
                    <HomeIcon />
                    <span>Home</span>
                </button>
                <button className="sidenav__button">
                    <SearchIcon />
                    <span>Search</span>
                </button>
                <button className="sidenav__button">
                    <ChatBubbleOutlineIcon />
                    <span>Messages</span>
                </button>
                <button className="sidenav__button">
                    <FavoriteBorderIcon />
                    <span>Notifications</span>
                </button>
                <button className="sidenav__button">
                    <AddCircleOutlineIcon />
                    <span>Create</span>
                </button>
            </div>
        </div>
    )
}

export default Sidenav