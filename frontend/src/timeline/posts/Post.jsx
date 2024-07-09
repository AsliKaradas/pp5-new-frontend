import React from "react"
import './Post.css'
import { Avatar } from "@mui/material"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Post({user, postImage, likes, timestamp}) {
    return(
        <div className="post">
            <div className="post__header">
                <div className="post__headerAuthor">
                <Avatar>{user.charAt(0).toUpperCase()}</Avatar>
                {user} . <span>{timestamp}</span>
                </div>
            </div>
            <div className="post__image">
                <img src="https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600" alt=""/>
            </div>
            <div className="post__footer">
                <div className="post__footerIcons">
                    <div className="post__iconsMain">
                        <FavoriteBorderIcon className="postIcon" />
                        <ChatBubbleOutlineIcon className="postIcon" />
                    </div>
                    <div className="post__iconSave">
                        <BookmarkBorderIcon className="postIcon" />
                    </div>
                </div>
                Liked by 21 people.
            </div>
        </div>
    )
}

export default Post