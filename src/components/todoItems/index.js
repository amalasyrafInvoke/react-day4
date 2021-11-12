import React from 'react';

const ToDoItem = (props) => {

  // const deleteNote = () => {
  //   props.setItems(prevState => prevState.filter(item => item.key !== props.date));
  // }

  return (
    <div
      onClick={() => props.onClick(props.date)}
      className='text-white bg-red-400 p-6 m-6 rounded w-92 flex items-center justify-evenly'
    >
      <div className='mx-3'>
        <h1>{props.title}</h1>
        <p>{props.date}</p>
      </div>
      <div
        onClick={() => props.deleteNote(props.date)}
        className='border border-white p-2 rounded bg-yellow-300 mx-1'
      >
        <h5>Delete</h5>
      </div>
    </div>
  );
};

export default ToDoItem;
