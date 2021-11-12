import React, { useEffect, useState } from 'react';
import ToDoItem from '../../components/todoItems';

const Dashboard = () => {
  const [noteInput, setNoteInput] = useState('');
  const [items, setItems] = useState([]);
  // const [data, setData] = useState({
  //   username: '',
  // })
  let _inputElement = null;

  const addNew = () => {
    // console.log(_inputElement.value);
    // _inputElement.style.height = '50px';
    if (_inputElement.value) {
      const newItem = {
        title: _inputElement.value,
        key: new Date().toISOString()
      }
      // setItems(prevState => prevState.concat(newItem));
      setItems(prevState => [...prevState, newItem]);
    }
  };

  const onClick = (date) => {
    console.log(date);
  }

  const deleteNote = (key) => {
    setItems(prevState => prevState.filter(item => item.key !== key));
  }

  useEffect(() => {
    console.log(items);
  }, [items]);

  return (
    <div className='flex flex-col justify-start items-center w-full min-h-screen bg-green-900'>
      <h1 className='text-white text-3xl my-4'>This is My Dashboard</h1>
      <div className='my-5'>
        <input
          type='text'
          id='note'
          placeholder='Add Note'
          className='w-80 p-1 rounded text-center'
          ref={(a) => (_inputElement = a)}
        />
        <button
          onClick={addNew}
          type='button'
          className='mx-4 bg-white border p-1 rounded'
        >
          Add Note
        </button>
      </div>

      <div className='my-4 w-full flex flex-col items-center justify-center'>
        {items.map(item => (
          <ToDoItem title={item.title} key={item.key} date={item.key} onClick={onClick} deleteNote={deleteNote}/>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
