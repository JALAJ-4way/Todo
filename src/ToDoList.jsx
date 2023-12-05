import React from 'react'

function ToDoList(props) {
    return (
    <>
       <div className='todo_style'>
            <button className='fa fa-times' aria-hidden='true' onClick={() => {props.onSelect(props.id)}}/>
            <li> {props.text} </li>
       </div>
    </>
    
    ) ;
}

export default ToDoList