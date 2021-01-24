import React from 'react'
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from 'react-twitter-embed';
import './Widgets.css';

const Widgets = () => {
    return (
        <div className="widgets">
             <div className="widgets__header">
                 <div className="widgets__searchBar">
                <SearchOutlinedIcon className="widgets__sideBarIcon" />
                <input type="search" className="widgets__searchBarInput" placeholder="Search Twitter" />
            </div>
             </div>
            {/* searchBar */}
           <div className="widgets__inner">

            {/* tweet embed */}
            <div className="widgets__twitterEmbed">
                <h3>Trends For you</h3>
                <TwitterTweetEmbed tweetId={"1348946179980222467"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="godwinco96"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://facebook.com/cleverprogrammer"}
                    options={{ text: "#reactjs is awesome", via: "Let's go!!" }}
                />
            </div>
           </div>

        </div>
    )
}

export default Widgets
