import React from 'react';
import { Input, Spacer } from '@nextui-org/react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authAction';

export const Login = () => {
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    dispatch(login({ id, password }));
  };

  return (
    <div className='container h-100'>
      <div className='row align-items-center h-100'>
        <div className='col-3 mx-auto'>
          <Spacer y={5.6} />
          <Input
            width='100%'
            labelPlaceholder='Username'
            onChange={(e) => setId(e.target.value)}
          />
          <Spacer y={1.6} />
          <Input.Password
            width='100%'
            labelPlaceholder='Password'
            initialValue=''
            onChange={(e) => setPassword(e.target.value)}
          />
          <Spacer y={1} />
          <div className="d-flex justify-content-between">
          <Button variant='success' onClick={handleLogin}>
            Login
          </Button>
          <NavLink to='/Register'>
            <Button variant='success'>Register</Button>
          </NavLink>
          </div>
          <Spacer y={1} />
        </div>
      </div>
    </div>
  );
};
