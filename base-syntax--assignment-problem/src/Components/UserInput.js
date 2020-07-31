import React from 'react';

const UserInput = (props) => {
    const style = {
        backgroudColor: 'white',
        font: 'inherit',
        padding: '8px',
        cursor: 'pointer'
      };
    return(
        <div >
            <input style ={style}type="text" onChange={props.click} value={props.name} ></input>
        </div>
    )
};

export default UserInput;