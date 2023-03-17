import React, { useState} from 'react'
import { Room } from '../component/Room'

export const Bad = () => {
  const initialState = {
    level: "beginner",
    player: 5,
    Time: "12.43.12",
    price: "10$",
    detail: "bla bla",
  }
  return (
    <div>
      <Room/>
    </div>
    
  )
}
