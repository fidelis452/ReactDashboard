import React from "react";
import "./Topbar.css"
import {NotificationsNone, Language, Settings} from '@material-ui/icons';

export default function Topbar () {
    return(
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">StarrAdmin</span>
                </div>
                    <div className="topRight">
                        <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                        </div>
                        <div className="topbarIconContainer">
                        <Language />
                        <span className="topIconBadge">2</span>
                        </div>
                        <div className="topbarIconContainer">
                        <Settings />
                        </div>
                        <img src="https://imgs.search.brave.com/ElJrhjTjqN5P0l-OdOpVsa2wN8BX1abBDtDqUtZj5tE/rs:fit:550:866:1/g:ce/aHR0cHM6Ly93d3cu/YmFybm9yYW1hLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8wNC9iZWF1dGlm/dWxfMjguanBn" alt="" className="topavatar"/>
                    </div>
            </div>
        </div>
    )
}