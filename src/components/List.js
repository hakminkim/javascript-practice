import React from 'react';
import Item from './Item';
import './List.css';


class List extends React.Component {
    
    render(){
        
        return (
        <div class='row'>
                <div className="title">
                    <input type="text" placeholder="To do?" />
                </div>
                <Item />
                </div>
        )
    }
}
    
export default List;