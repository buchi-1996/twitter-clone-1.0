import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MailOutlinedIcon from '@material-ui/icons/MailOutlined';
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import MoreHorizOutlinedIcon from '@material-ui/icons/MoreHorizOutlined';
import './Sidebar.css';
import SidebarOption from './SidebarOption';
import { Avatar, Button } from '@material-ui/core';


const SideBar = () => {
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon" />

            <SidebarOption active Icon={HomeOutlinedIcon} text="Home" />
            <SidebarOption Icon={SearchOutlinedIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNoneOutlinedIcon} text="Notifications" />
            <SidebarOption Icon={MailOutlinedIcon} text="Messages" />
            <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />
            <SidebarOption Icon={ListAltOutlinedIcon} text="Lists" />
            <SidebarOption Icon={PermIdentityOutlinedIcon} text="Profile" />
            <SidebarOption Icon={MoreHorizOutlinedIcon} text="More" />

            <Button className="sidebar__tweetBtn" variant="contained" color="primary">
                Tweet
            </Button>
            <div className="sidebar__user">
                <div className="sidebar__userDetails">
                 <Avatar alt="Remy Sharp" src="">B</Avatar>
                   <div className="sidebar__userNames">
                   <h4>Buchi_Nigeria</h4>
                    <span>@godwinco9</span>
                   </div>
                </div>
                <MoreHorizOutlinedIcon className="sidebar__moreIcon" />
            </div>
        </div>
    )
}

export default SideBar
