import React from 'react';
import PhotoOutlinedIcon from '@material-ui/icons/PhotoOutlined';
import IconButton from '@material-ui/core/IconButton';

const GalleryButton = ({ setImage }) => {
    
    const handleChange = (e) => {
        setImage(e.target.files[0]);
    }

    return (
        <div>
            <input  onChange={handleChange} accept="image/*" id="icon-button-file" type="file" style={{display: "none"}}/>
            <label htmlFor="icon-button-file">
                <IconButton color="primary" aria-label="upload picture" component="span">
                    <PhotoOutlinedIcon />
                </IconButton>
            </label>
        </div>
    )
}

export default GalleryButton
