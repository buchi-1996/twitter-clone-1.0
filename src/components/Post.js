import React from 'react'
import { Avatar } from '@material-ui/core';
import './Post.css';
import { MoreHorizOutlined } from '@material-ui/icons';
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';

const Post = ({userName, text, twitterHandle, verified, image}) => {
    return (
        <div className="post">
            <Avatar src="" className="post__avatar">B</Avatar>
            <div className="post__details">
                <div className="post__detailsHeader">
                    <div className="post__detailsUser">
                    <h4>{userName}</h4>
                  {verified &&   <VerifiedUserIcon  className="post__verifyIcon"/>}
                    <span>{twitterHandle}</span>
                    </div>
                    <MoreHorizOutlined className="postMoreIcon" />
                </div>
                <div className="post__main">
                    <p>{text}</p>
                </div>
                <div className="post__image">
                    <img src={image} alt=""/>
                </div>
                <div className="post__buttons">
                    <ChatBubbleOutlineIcon className="chatBtn" fontSize="small" />
                    <RepeatIcon className="retweetBtn" fontSize="small" />
                    <FavoriteBorderIcon className="likeBtn" fontSize="small" />
                    <PublishIcon className="publishBtn" fontsize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post
