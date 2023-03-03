import React from 'react'
import { Input, Spacer } from "@nextui-org/react";
import Button from 'react-bootstrap/Button';
import { useState } from 'react';


export const Register = () => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [email, setEmail] = useState('');

    const handlelogin =()=> {
        console.log('render time',id,password,cpassword,email)
        fetch(`https://jsonplaceholder.typicode.com/posts`,{id,password,cpassword,email})
        .then((response) => response.json())
        .then((actualData) => console.log(actualData));
    }
    return (
        <div className="container h-100">
        <div className="row align-items-center h-100">
            <div className="col-3 mx-auto">
                    <Spacer y={1.6} />
                    <Input width="100%" labelPlaceholder="Username" onChange={(e) => setId(e.target.value)}/>
                    <Spacer y={1} />
                    <Input.Password width="100%" labelPlaceholder="Password" initialValue="" onChange={(e) => setPassword(e.target.value)}/>
                    <Spacer y={1} />
                    <Input.Password width="100%" labelPlaceholder="Comfirm Password" initialValue="" onChange={(e) => setCpassword(e.target.value)}/>
                    <Spacer y={1} />
                    <Input width="100%" labelPlaceholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <Spacer y={1.6} />
                    <Button variant="success" onClick={handlelogin}>Register</Button>
                    <Spacer y={1} />
                    
                    
            </div>
        </div>
        </div>
    
    
      )
    }
    