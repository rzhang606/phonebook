import React, { useState } from 'react';
import { Button } from 'react-bootstrap'

const Togglable = (props) => {

    //inline css
    const hideWhenVisible = { display: props.visible ? 'none' : ''}
    const showWhenVisible = { display: props.visible ? '' : 'none'}


    return (
        <div>
            <div style={hideWhenVisible}>
                <Button onClick={props.toggleVisibility}>{props.buttonLabel}</Button>
            </div>
            <div style={showWhenVisible}>
                {props.children}
                <Button onClick={props.toggleVisibility}>Cancel</Button>
            </div>
        </div>
    )
}

export default Togglable;