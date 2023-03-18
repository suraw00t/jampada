import React, { useState, useEffect } from 'react';
import { Input, Spacer } from '@nextui-org/react';
import Button from 'react-bootstrap/Button';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authAction';
import { useSelector } from 'react-redux';

export const Login = () => {
  const navigate = useNavigate()
  const { auth } = useSelector(state => state)
  useEffect(() => {
    if (auth.token) navigate("/");
  }, [auth.token, navigate]);
  const dispatch = useDispatch();
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    dispatch(login({ data: { username: id, password } }));
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
