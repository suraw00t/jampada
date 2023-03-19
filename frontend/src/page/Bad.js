import React, { useState, useEffect } from 'react'
import { Room } from '../component/Room'
import axios from 'axios'

const API_PREFIX = 'http://localhost:8000/api/v1';


export const Bad = () => {
  const [topic, setTopic] = useState()
  const [user, setUser] = useState()
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(API_PREFIX + `/topic/${"badminton"}`);
      setTopic(response.data)
      const access_token = localStorage.getItem("access_token");
      const res = await axios.get(API_PREFIX + "/user/get?token=" + access_token);
      setUser(res.data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <Room response={topic} user_id={user} />
    </div>

  )
}
