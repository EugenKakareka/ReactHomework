import React, { useState } from 'react';
import {userData} from './userData';
import './styles/App.css';
import UsersList from './components/UsersList'

function App() {
    const [users, setUsers] = useState(userData)

    return (
        <div className = 'App'>
            <UsersList users = {users}/>
        </div>
    );
    }

    export default App;