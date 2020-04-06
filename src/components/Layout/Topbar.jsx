import React from 'react';

function Topbar(props) {
    return (
        <div className="topbar">
            {props.children || "Hello Create React"}
        </div>
    )
}

export default Topbar;