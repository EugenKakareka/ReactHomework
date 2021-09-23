import React from 'react';
import User from './User';

function UsersList(props) {
    return ( 
        <div className="users-container">
            <div className="user">
                {props.users.map(user => <User user={user} key={user._id}/>)}
            </div>
        </div>
     );
}

export default UsersList;