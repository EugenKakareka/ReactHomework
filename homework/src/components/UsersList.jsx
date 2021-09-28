import React from 'react';
import User from './User';

function UsersList({users,setIsActive,setSelectedUser}) {
    return ( 
        <div className="users-container">
            <div className="user">
                {users.map(user => <User user={user} key={user._id} setIsActive={setIsActive} setSelectedUser={setSelectedUser}/>)}
            </div>
        </div>
     );
}

export default UsersList;