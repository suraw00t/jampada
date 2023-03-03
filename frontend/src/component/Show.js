import React from 'react'
import { useState } from 'react';

export const Show = () => {
    const [message, setMessage] = useState('');

    const [updated, setUpdated] = useState(message);
  
    const handleChange = (event) => {
      setMessage(event.target.value);
    };
  
    const handleClick = () => {
      // 👇 "message" stores input field value
      setUpdated(message);
    };
  
    return (
      <div>
        <input
          type="text"
          id="message"
          name="message"
          onChange={handleChange}
          value={message}
        />
  
        <h2>Message: {message}</h2>
  
        <h2>Updated: {updated}</h2>
  
        <button onClick={handleClick}>Update</button>
      </div>
    );
  }