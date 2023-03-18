import React, { useState, useEffect } from 'react'
import { Room } from '../component/Room'
import axios from 'axios'

const API_PREFIX = 'http://localhost:8000/api/v1';


export const Ten = () => {
  const [topic, setTopic] = useState()
  async function get_sports() {
  }
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(API_PREFIX + `/topic/${"tennis"}`);
      setTopic(response.data)
    }
    fetchData()

  }, [])
  return (
    <div>
      <Room response={topic} />
    </div>
  )
}
