import React from 'react';
import './SidebarOption.css';

const SidebarOption = ({Icon, text, active}) => {
    return (
        <div className="sidebarOption">
           <div className={`sidebarOption__inner ${active ? 'sidebarOptionActive' : ''}`}>
           <Icon />
            <h3>{text}</h3>
           </div>
        </div>
    )
}

export default SidebarOption
