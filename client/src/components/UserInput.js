import React, { useState } from 'react';

const UserInput = (props) => {
    const onUserUpdate = (e) => {
        props.setUser(e.target.value);
    }

    return (
        <div>
            <label htmlFor="user">User:</label>
            <br />
            <input 
                id="user" 
                name="user"
                value={props.user}
                onChange={onUserUpdate} />
            <br/>            
        </div>
    )
};

export default UserInput;