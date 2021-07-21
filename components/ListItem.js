import React from 'react';

function ListItem(props) {


    return(
        <div>
            <h3>{props.name}</h3>
            <h4>{props.priority}</h4>
        </div>
    )
}

export default ListItem