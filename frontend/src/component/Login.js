import React from 'react'
import { Input, Spacer } from "@nextui-org/react";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { Register } from '../page/Register';
import { NavLink,Link } from 'react-router-dom'

export const Login = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    
    const handlelogin =()=> {
        console.log('render time',id,password)
        fetch(`https://jsonplaceholder.typicode.com/posts`,{id,password})
        .then((response) => response.json())
        .then((actualData) => console.log(actualData));
    }
    const toRegister =()=> {
        <Link to="/Signin"></Link>
    }
  return (
    <div className="container h-100">
    <div className="row align-items-center h-100">
        <div className="col-3 mx-auto">
                <Spacer y={1.6} />
                <Input width="100%" labelPlaceholder="Username" onChange={(e) => setId(e.target.value)}/>
                <Spacer y={1.6} />
                <Input.Password width="100%" labelPlaceholder="Password" initialValue="" onChange={(e) => setPassword(e.target.value)}/>
                <Spacer y={1} />
                <Button variant="success" onClick={handlelogin}>Login</Button>
                <h> </h>
                <NavLink activeclassname="active" to="/Register">
                    <Button variant="success">Register</Button>
                </NavLink>
                <Spacer y={1} />
                <Button variant="warning" onClick={toRegister}>Google Login</Button>
                
        </div>
    </div>
    </div>


  )
}


                