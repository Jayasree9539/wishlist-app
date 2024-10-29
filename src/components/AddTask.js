"use client"
import { useState } from 'react';
import { useTasksDispatch } from './TasksContext.js';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <>
    <div className='space-x-4'>
      <input className='border border-black text-sm placeholder:p-1 '
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className=' w-10 border border-black bg-gray-200 text-sm mb-5 mt-5' onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        }); 
      }}>Add</button>
      </div>
    </>
  );
}

let nextId = 3;
