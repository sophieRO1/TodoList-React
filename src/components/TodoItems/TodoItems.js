import React from 'react'
import './TodoItems.css';
const TodoItems = (props) => {
    const {items} = props;
    const ListItems = items.map(item => {
        return (
            <div key={item.id}>
            <span>{item.name}</span>
            <span>{item.age}</span>
            <span>&times;</span>
            </div>
        )
    })
    return (
        <div className="ListItems">
            <div>Name</div>
            <div>Age</div>
            <div>Action</div>
            {ListItems}
        </div>
    )
}

export default TodoItems