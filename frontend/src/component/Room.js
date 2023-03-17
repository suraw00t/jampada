import React from 'react';
import './Room.css';
import { Modal } from './Modal';
import Button from 'react-bootstrap/Button';

export const Room = () => {
  return (
    <div className='content'>
      <Modal />
      <div className='card'>
        <div className='roombox'>
          <h1>ว่าง</h1>
          <button
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#exampleModal'
          >
            Post
          </button>
          <div className='setButton'>
            <Button variant='outline-danger'>Delete</Button>
          </div>
        </div>
        <div className='roombox'>
         <div className='text-white'>
          <h5>Level: <span className='text-warning text-uppercase'>Beginner</span></h5>
          <p>Player: 5</p>
          <p>Time: 12:14:00</p>
          <p>Price: 12$</p>
          <p>Detail: ไม่มี</p>
         </div>
          <div className='setButton'>
            <Button variant='outline-danger'>Delete</Button>
          </div>
        </div>
        <div className='roombox'>
          <h1>ว่าง</h1>
          <button
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#exampleModal'
          >
            Post
          </button>
          <div className='setButton'>
            <Button variant='outline-danger'>Delete</Button>
          </div>
        </div>
        <div className='roombox'>
          <h1>ว่าง</h1>
          <button
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#exampleModal'
          >
            Post
          </button>
          <div className='setButton'>
            <Button variant='outline-danger'>Delete</Button>
          </div>
        </div>
        <div className='roombox'>
          <h1>ว่าง</h1>
          <button
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#exampleModal'
          >
            Post
          </button>
          <div className='setButton'>
            <Button variant='outline-danger'>Delete</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
