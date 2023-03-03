import React from 'react'
import { Input, Spacer } from "@nextui-org/react";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';

export const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    
    const handlelogin =()=> {
        console.log('render time',id,password)
        fetch(`https://jsonplaceholder.typicode.com/posts`,{id,password})
        .then((response) => response.json())
        .then((actualData) => console.log(actualData));
    }
  return (
    <div className="container h-100">
    <div className="row align-items-center h-100">
        <div className="col-3 mx-auto">
                <Spacer y={1.6} />
                <Input width="100%" labelPlaceholder="NextUI" onChange={(e) => setId(e.target.value)}/>
                <Spacer y={1.6} />
                <Input.Password width="100%" labelPlaceholder="Password" initialValue="" onChange={(e) => setPassword(e.target.value)}/>
                <Spacer y={1} />
                <Button variant="success" onClick={handlelogin}>Success</Button>
                <Spacer y={1} />
                <Button variant="warning" onClick={handlelogin}>Google Login</Button>
                
        </div>
    </div>
    </div>


  )
}
