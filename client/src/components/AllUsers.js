import React from 'react'
import Togglable from './Togglable'
import store from '../reducers/store'


const AllUsers = () => {

    const users = store.getState().users;
    console.log("Users: ", users)

    return (
        <Togglable buttonLabel='All Users'>
            <ul>
                {users.map((user) =>
                    <li key={user.username}>{user.name}: {user.username}</li>
                )}
            </ul>
        </Togglable>
    )
}

export default AllUsers