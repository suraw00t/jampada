import React from 'react'
import { useState } from 'react';

export const Modal = () => {
const [time, setTime] = useState('');
console.log('render time',time);

const onSubmit = (e) => {
    e.preventdefault();

    const payload = {
        time
    }
}

  return (
    <div>


<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">สร้างกระทู้</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      
      <div className="modal-body"> 
        <form onSubmit={onSubmit}>
            <select class="form-select" aria-label="Default select example">
                <option selected>Level</option>
                <option value="1">Beginner</option>
                <option value="2">Intermediate</option>
                <option value="3">Pro</option>
                <option value="4">Experd</option>
            </select> <br/><br/>
            <select class="form-select" aria-label="Default select example">
                <option selected>Player</option>
                <option value="1">2 player</option>
                <option value="2">3 player</option>
                <option value="3">4 player</option>
                <option value="4">More than 4 player</option>
            </select> <br/><br/>

            <div class="mb-3">
                <label for="Time" class="form-label">Time</label>
                <input type="time" class="form-control" id="Time" aria-describedby="emailHelp" onChange={(e) => setTime(e.target.value)}/>
            </div>
            <div class="mb-3">
                <label for="Place" class="form-label">Place</label>
                <input type="text" class="form-control" id="Place" aria-describedby="emailHelp"/>
            </div>
            <div class="mb-3">
                <label for="Info" class="form-label">รายละเอียดเพิ่มเติม</label>
                <input type="text" class="form-control" id="Info" aria-describedby="emailHelp"/>
                <div id="emailHelp" class="form-text">กรุณากรอกข้อมูลให้ครบ</div>
            </div>
            <button type="submit" class="btn btn-primary">สร้าง</button>
        </form>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
