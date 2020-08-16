import React, {useState} from 'react'
import FormField from './FormField'
import Togglable from './Togglable'
import { Form, Button } from 'react-bootstrap'
import userService from '../services/Users'

const UserForm = () => {
    const [ newName, setNewName ] = useState(''); 
    const [ newUsername, setNewUsername ] = useState(''); 
    const [ newPassword, setNewPassword ] = useState('');

    const handleNameChange = (event) => {
        setNewName(event.target.value);
    }

    const handleUsernameChange = (event) => {
        setNewUsername(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setNewPassword(event.target.value);
    }

    const createUser = (event) => {
        event.preventDefault();
        
        userService.addUser({
            name: newName,
            username: newUsername,
            password: newPassword
        });

        setNewName('');
        setNewUsername('');
        setNewPassword('');

    }
    
    return (
        <div>
            <Togglable buttonLabel='Create User Account'>
                <h2>Create new user</h2>
                <Form onSubmit={createUser}>
                    <FormField title="Name" input={newName} inputHandler={handleNameChange} />
                    <FormField title="Username" input={newUsername} inputHandler={handleUsernameChange} />
                    <FormField title="Password" input={newPassword} inputHandler={handlePasswordChange} />  
                    <Button type="submit">add</Button>
                </Form>
            </Togglable>
        </div>
        
    )
}

export default UserForm