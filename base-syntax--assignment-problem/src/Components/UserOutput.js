import React from 'react';
import './UserOutput.css';
const UserOutput = (props) => {

    return(
        <div className='UserOutput'>
            <p>
                Hi {props.username}
            </p>
            <p>
                Wassup
            </p>
        </div>
    )
};

export default UserOutput;