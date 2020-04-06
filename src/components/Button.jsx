import React, { Fragment } from "react";

function Button() {
    return ( 
        <Fragment>
            <label htmlFor="User"></label>
            <input type="text" id="User" />
            <button>送出</button>
        </Fragment>
    )
}

export default Button;