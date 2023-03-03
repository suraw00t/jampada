import React from 'react'
import './Room.css'
import { Modal } from './Modal'

export const Room = () => {
  return (
    <div className="content">
        <Modal/>
      <div className="card">
      <div className="roombox">
        <h1>ว่าง</h1>
        
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            Post
        </button>

      </div>
      <div className="roombox">
        <h1></h1>
      </div>
      <div className="roombox">
        <h1></h1>
      </div>
      <div className="roombox">
        <h1></h1>
      </div>
      <div className="roombox">
        <h1></h1>
      </div>
      <div className="roombox">
        <h1></h1>
      </div>
      <div className="roombox">
        <h1></h1>
      </div>
      <div className="roombox">
        <h1></h1>
      </div>
      <div className="roombox">
        <h1></h1>
      </div>
      <div className="roombox">
        <h1></h1>
      </div>
      </div>
    </div>
  )
}
