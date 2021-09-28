import React from 'react';


function User ({user,setIsActive, setSelectedUser} ) {

    const handleClick = () => {
        setIsActive(true);
        setSelectedUser(user);
    }

    return (
         <div className="card" onClick={handleClick}>
            <div className="card-info">
                <div className="title">
                    <h2>{user.name}</h2>
                </div>

                <div className="content">
                    <p> Age:{user.age}</p>
                    <p>Gender:{user.gender}</p>
                    <p>Balance:{user.balance}</p>
                </div>
            </div>
            <div className="card-image">
                <img src={user.picture} alt="Img"/>
            </div>
        </div>
    );
}

export default User ;