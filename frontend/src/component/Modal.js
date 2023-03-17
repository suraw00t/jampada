import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTopic } from '../redux/actions/topicAction';

export const Modal = () => {
  const dispatch = useDispatch();
  const [level, setLevel] = useState('');
  const [player, setPlayer] = useState('');
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');
  const [info, setInfo] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    console.log('render time', time, level, player, place, info);
    dispatch(createTopic({ time, level, player, place, info }));
  };
  return (
    <div>
      <div
        className='modal fade'
        id='exampleModal'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='exampleModalLabel'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title' id='exampleModalLabel'>
                สร้างกระทู้
              </h5>
              <button
                type='button'
                className='close'
                data-dismiss='modal'
                aria-label='Close'
              >
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>

            <div className='modal-body'>
              <form onSubmit={onSubmit}>
                <select
                  className='form-select'
                  aria-label='Default select example'
                  onChange={(e) => setLevel(e.target.value)}
                >
                  <option>Level</option>
                  <option value='Beginner'>Beginner</option>
                  <option value='Intermediate'>Intermediate</option>
                  <option value='Pro'>Pro</option>
                  <option value='Experd'>Experd</option>
                </select>{' '}
                <br />
                <br />
                <select
                  defaultValue='1'
                  className='form-select'
                  aria-label='Default select example'
                  onChange={(e) => setPlayer(e.target.value)}
                >
                  <option>Player</option>
                  <option value='2 player'>2 player</option>
                  <option value='3 player'>3 player</option>
                  <option value='4 player'>4 player</option>
                  <option value='More than 4 player'>More than 4 player</option>
                </select>{' '}
                <br />
                <br />
                <div className='mb-3'>
                  <label htmlFor='Time' className='form-label'>
                    Time
                  </label>
                  <input
                    type='time'
                    className='form-control'
                    id='Time'
                    aria-describedby='emailHelp'
                    onChange={(e) => setTime(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='Place' className='form-label'>
                    Place
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='Place'
                    aria-describedby='emailHelp'
                    onChange={(e) => setPlace(e.target.value)}
                  />
                </div>
                <div className='mb-3'>
                  <label htmlFor='Info' className='form-label'>
                    รายละเอียดเพิ่มเติม
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='Info'
                    aria-describedby='emailHelp'
                    onChange={(e) => setInfo(e.target.value)}
                  />
                  <div id='emailHelp' className='form-text'>
                    กรุณากรอกข้อมูลให้ครบ
                  </div>
                </div>
                <button type='submit' className='btn btn-primary'>
                  สร้าง
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
