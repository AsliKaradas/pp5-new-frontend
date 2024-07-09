import React, { useState } from "react"
import Post from "./posts/Post"
import './Timeline.css'
import Suggestions from "./Suggestions"

function Timeline () {
    const [posts, setPosts] = useState([
        {
            user:"seline",
            postImage: "",
            likes: 12,
            timestamp: "2d",
        },
        {
            user:"edi",
            postImage: "",
            likes: 12,
            timestamp: "2d",
        },
        {
            user:"mark",
            postImage: "",
            likes: 12,
            timestamp: "2d",
        },
        {
            user:"brand",
            postImage: "",
            likes: 12,
            timestamp: "2d",
        },
    ]);
    return(
        <div className="timeline">
            <div className="timeline__left">
                <div className="timeline__posts">
                    {posts.map((post) => (
                        <Post 
                         user={post.user} 
                         postImage={post.postImage} 
                         like={post.likes} 
                         timestamp={post.timestamp}
                         />
                    ))}
                </div>
            </div>
            <div className="timeline__right">
                <Suggestions />    
            </div>
        </div>
    )
}

export default Timeline