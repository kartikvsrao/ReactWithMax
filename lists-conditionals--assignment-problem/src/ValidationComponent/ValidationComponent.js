import React from 'react';

const ValidationComponent = (props) => {
    if(props.length > 4)
    {
        return(<p>Text long enough</p>)
    }
    else
    {
        return(<p>Text too short</p>)
    }

} 

export default ValidationComponent;