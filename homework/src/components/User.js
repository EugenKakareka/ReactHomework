import React from 'react';


function User (props) {
    return (
        <div className="card">
            <div className="card-info">
                <div className="title">
                    <h2>{props.user.name}</h2>
                </div>

                <div className="content">
                    <p> Age:{props.user.age}</p>
                    <p>Gender:{props.user.gender}</p>
                    <p>Balance:{props.user.balance}</p>
                </div>
            </div>
            <div className="card-image">
                <img src={props.user.picture} alt="Img"/>
            </div>
        </div>
    );
}

export default User ;