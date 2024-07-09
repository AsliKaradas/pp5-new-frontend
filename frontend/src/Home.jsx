import React from "react"
import './Home.css'
import Sidenav from "./navigation/Sidenav"
import Timeline from "./timeline/Timeline"

function Home () {
    return(
        <div className="Home">
            <div className="home__nav">
            <Sidenav />
            </div>
            <div className="home__timeline">
            <Timeline />
            </div>
        </div>
    )
}

export default Home