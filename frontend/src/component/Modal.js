import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createTopic } from '../redux/actions/topicAction';
import axios from 'axios';

export const Modal = ({ typename, data }) => {
  const dispatch = useDispatch();
  const [level, setLevel] = useState('');
  const [name, setName] = useState('');
  const [player, setPlayer] = useState('');
  const [time, setTime] = useState('');
  const [place, setPlace] = useState('');
  const [info, setInfo] = useState('');
  const [levelChoice, setLevelChoice] = useState("")
  const [playerChoice, setPlayerChoice] = useState("")

  const API_PREFIX = "http://localhost:8000/api/v1"

  const onSubmit = async (e) => {
    const loggedIn = localStorage.getItem('loggedIn');
    const access_token = localStorage.getItem("access_token");
    e.preventDefault();
    const response = await axios.post(API_PREFIX + "/topic/create?access_token=" + access_token, { name, date_time: time, level, player, detail: info, place, type: typename })
    console.log('render time', name, time, level, player, place, info);
    console.log(response)
    // window.location.href("/" + typename)
    // window.location.replace("/" + typename)
    window.location.reload(false);
  };

  const onEdit = async (e) => {
    e.preventDefault();
    const response = await axios.put(API_PREFIX + "/topic/edit/" + data.type + "/" + data.id, { name, date_time: time, level, player, detail: info, place, type: typename })
    console.log('render time', name, time, level, player, place, info);
    console.log(response)
    // dispatch(createTopic({ time, level, player, place, info }));
    // window.location.href("/" + typename)
    // window.location.replace("/" + typename)
    window.location.reload(false);
  };
  useEffect(() => {
    setPlayerChoice(data.player)
    setLevelChoice(data.level)
    setTime(data.date_time)
    setInfo(data.detail)
    setPlace(data.place)
    setName(data.name)

  }, [data.level, data.player, data.date_time, data.name, data.detail, data.place])
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
                แก้ไขกระทู้
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
              <form onSubmit={data ? onEdit : onSubmit}>
                <div className='mb-3'>
                  <label htmlFor='Place' className='form-label'>
                    Name
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    id='Name'
                    aria-describedby='emailHelp'
                    disabled={data ? true : false}
                    onChange={(e) => setName(e.target.value)}
                    defaultValue={data ? data.name : ""}
                  />
                </div>
                {"Level: "}
                <select
                  value={levelChoice}
                  className='form-select'
                  aria-label='Default select example'
                  onChange={(e) => {
                    setLevel(e.target.value)
                    setLevelChoice(e.target.value)
                  }}
                >
                  <option>Level</option>
                  <option value='Beginner'>Beginner</option>
                  <option value='Intermediate'>Intermediate</option>
                  <option value='Pro'>Pro</option>
                  <option value='Experd'>Experd</option>
                </select>{' '}
                <br />
                <br />
                {"Player: "}
                <select
                  className='form-select'
                  aria-label='Default select example'
                  onChange={(e) => {
                    setPlayer(e.target.value)
                    setPlayerChoice(e.target.value)
                  }}
                  value={playerChoice}
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
                    type='datetime-local'
                    className='form-control'
                    id='Time'
                    aria-describedby='emailHelp'
                    onChange={(e) => setTime(e.target.value)}
                    defaultValue={data ? data.date_time : ""}
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
                    defaultValue={data ? data.place : ""}
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
                    defaultValue={data ? data.detail : ""}
                  />
                  <div id='emailHelp' className='form-text'>
                    กรุณากรอกข้อมูลให้ครบ
                  </div>
                </div>
                <button type='submit' className={data ? "btn btn-success" : "btn btn-primary"}>
                  {data ? "แก้ไข" : "สร้าง"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

