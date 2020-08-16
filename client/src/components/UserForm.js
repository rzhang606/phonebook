import React, {useState} from 'react'
import FormField from './FormField'
import Togglable from './Togglable'
import { Form, Button } from 'react-bootstrap'
import userService from '../services/Users'

const UserForm = () => {
    const [ newName, setNewName ] = useState(''); 
    const [ newUsername, setNewUsername ] = useState(''); 
    const [ newPassword, setNewPassword ] = useState('');

    const [ visible, setVisible ] = useState(false);
    const toggleVisibility = () => {
        setVisible(!visible);
    }

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

        toggleVisibility();

    }
    
    return (
        <div>
            <Togglable buttonLabel='Create User Account' visible={visible} toggleVisibility={toggleVisibility}>
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