import React, { useEffect, useState } from 'react';
import './Room.css';
import { Modal } from './Modal';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from "react-router-dom"
import axios from 'axios';
import { useSelector } from 'react-redux';


export const Room = ({ response, user_id }) => {
  const { pathname } = useLocation();
  async function handleDelete(topic_id) {
    console.log(topic_id)
    await axios.delete("http://localhost:8000/api/v1/topic/delete?topic_id=" + topic_id)
    window.location.reload()
  }

  const [edit, setEdit] = useState([])
  async function handleEdit(topic_id, topic_type) {
    const res = await axios.get("http://localhost:8000/api/v1/topic/" + topic_type + "/" + topic_id)
    setEdit(res.data)
  }
  const resetForm = () => {
    setEdit("")
  }

  async function handleJoin(topic_type, topic_id) {
    const access_token = localStorage.getItem("access_token");
    const res = await axios.put("http://localhost:8000/api/v1/topic/join/" + topic_type + "/" + topic_id + "/", { token: access_token })
    window.location.reload(false)
  }

  async function handleUnjoin(topic_type, topic_id) {
    const access_token = localStorage.getItem("access_token");
    const res = await axios.put("http://localhost:8000/api/v1/topic/unjoin/" + topic_type + "/" + topic_id + "/", { token: access_token })
    window.location.reload(false)
  }

  const { auth } = useSelector(state => state)
  const navigate = useNavigate()
  // const location = useLocation();
  useEffect(() => {
    if (!auth.token) navigate("/Signin");
    // const referer = location.state && location.state.referer


  }, [auth.token, navigate])
  return (
    < div className='content' >
      <Modal typename={pathname.replace("/", "")} data={edit} />
      <div className='card'>
        {
          response?.length > 0 && response.map(it => (
            // <h1 key={it.id}>{it.id}</h1>
            <div className='roombox' key={it.id}>
              <div className='text-white'>
                <h5><span className='text-warning text-uppercase'>{it.name}</span></h5>
                <p>Level: {it.level}</p>
                <p>Player: {it.player}</p>
                <p>Time: {it.date_time}</p>
                <p>Place: {it.place}</p>
                <p>Detail: {it.detail ? it.detail : "-"}</p>
                <p>Joined: {it?.member.length}</p>
              </div>
              <div className='setButton d-flex justify-content-between'>
                <button
                  type='button'
                  className='btn btn-success'
                  data-toggle='modal'
                  data-target='#exampleModal'
                  onClick={() => handleEdit(it.id, it.type)}
                >
                  Edit
                </button>
                {it.member.map(it2 => (
                  it2 ? "" : ""
                )) && it.member.length > 0 ? <Button variant='btn btn-warning' onClick={() => handleUnjoin(it.type, it.id)}>Unjoin</Button> :
                  <Button variant='btn btn-info' onClick={() => handleJoin(it.type, it.id)}>Join</Button>
                }
                <Button variant='btn btn-danger' onClick={() => handleDelete(it.id)}>Delete</Button>
              </div>
            </div>
          ))
        }
        <div className='roombox'>
          <h1>สร้าง</h1>
          <button
            type='button'
            className='btn btn-secondary'
            data-toggle='modal'
            data-target='#exampleModal'
            onClick={() => resetForm()}
          >
            Post
          </button>
        </div>
      </div>
    </div >
  );
};
