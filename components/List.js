import React from 'react';
import ListItem from './ListItem';

function List(props) {


    return(
        <div>
            <h2>{props.name}</h2>
            <ListItem name='This App' priority='Pretty low tbh'/>
            <ListItem name='My Actual Work' priority='Come the fuck on' />
        </div>
    )
}

export default List