import React, { useState, useEffect } from 'react';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import GalleryButton from './GalleryButton';
import Post from './Post';
import { Avatar, Button, IconButton } from '@material-ui/core';
import './Feed.css';
import db from '../firebase';

const Feed = () => {
    const [image, setImage] = useState('');
    const [tweetInput, setTweetIput] = useState('');
    const [posts, setPosts] = useState([]);


    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
    }, []);

    

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            userName: "Buchi_Nigeria",
            text: tweetInput,
            image: (window.URL || window.webkitURL).createObjectURL(image),
            twitterHandle: '@godwinco96',
            verified: true
        })
        console.log(image);
        console.log(tweetInput);
        setImage('');
        setTweetIput('');
    }

    return (
        <div className="feed">
            <div className="feed__header">
                <h3>Home</h3>
                <IconButton>
                    <StarOutlineIcon className="feed__headerIcon" />
                </IconButton>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="feed__tweetBox">
                    <Avatar className="feed__tweetBoxAvatar" alt="Remy Sharp" src="">B</Avatar>
                    <div className="feed__tweetBoxInput">
                        <input type="text" value={tweetInput} placeholder="Whats Happening?" onChange={e => setTweetIput(e.target.value)} className="feed__tweetInput" />
                        <div className="feed__input">
                            <GalleryButton setImage={text => setImage(text)} />
                            <Button className="feed__inputBtn" type="submit" color="primary" variant="contained">Tweet</Button>
                        </div>
                    </div>
                </div>
            </form>
            {posts.map(post => (
                <Post userName={post.userName} text={post.text} verified={post.verified} image={post.image} twitterHandle={post.twitterHandle} />
            ))}

        </div>
    )
}

export default Feed
