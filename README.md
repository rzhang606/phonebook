# Phonebook - Started from fullstackopen course

Prod Site: https://serene-sands-63313.herokuapp.com/

This project was started from the fullstackopen course, with added features afterwards.


### Backend Structure:
The backend is located in the root directory, where frontend files are under client
 - controllers
    - where all the endpoints are located
    - login
        - handles logging in and token
    - people
        - phonebook entries
    - users
        - handles different user accounts
 - models
    - mongoose schemas, stores objects that will be stored in MongoDB
 - utils
    - config
        - loads the environment variables from .env (this file is gitignored) for use
        - contains values like port, mongodb url, secret for passwords
    - logger
        - centralized logging
    - middleware
        - utilizes morgan for http request logging
        - checks for unknown endpoints -> 404
        - error handling

### Frontend Structure
Located under client/src
 - components
    - Component defintions
 - handlers
    - handlers are created for objects that require more complex logic than simply using the services
    - acts as a middleman, ex: button => handler => service call
 - reducers
    - using redux to handle state
 - services
    - performs HTTP requests
