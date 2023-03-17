import React from 'react';
import { Input, Spacer } from '@nextui-org/react';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { register } from '../redux/actions/authAction'
import { useDispatch } from 'react-redux';

export const Register = () => {
    const dispatch = useDispatch()
  const initialState = {
    email: '',
    username: '',
    password: '',
    first_name: '',
    last_name: '',
    phone: '',
  };
  const [userData, setUserData] = useState(initialState);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handlelogin = async (e) => {
    e.preventDefault();
    console.log(userData);
    dispatch(register({userData}))
  };
  return (
    <div className='container h-100'>
      <div className='row align-items-center h-100'>
        <Spacer y={2.6} />
        <div className='row mx-auto col-md-12'>
          <div className='col-md-6'>
            <Input
            bordered
              width='100%'
              labelPlaceholder='First Name'
              name='first_name'
              onChange={handleChangeInput}
            />
            <Spacer y={2} />
            <Input
            bordered
              width='100%'
              labelPlaceholder='Last Name'
              name='last_name'
              onChange={handleChangeInput}
            />
            <Spacer y={2} />
            <Input
            bordered
              width='100%'
              labelPlaceholder='Email'
              name='email'
              onChange={handleChangeInput}
            />
            <Spacer y={2} />

            <Spacer y={1} />
          </div>
          <div className='col-md-6'>
            <Input
            bordered
              width='100%'
              labelPlaceholder='Telephone'
              name='phone'
              onChange={handleChangeInput}
            />
            <Spacer y={2} />
            <Input
            bordered
              width='100%'
              labelPlaceholder='Username'
              name='username'
              onChange={handleChangeInput}
            />
            <Spacer y={2} />
            <Input.Password
            bordered
              width='100%'
              labelPlaceholder='Password'
              name='password'
              initialValue=''
              onChange={handleChangeInput}
            />
          </div>
        </div>
        <Spacer y={1.6} />
       <div className='mx-auto'>
       <Button variant='success' onClick={handlelogin}>
          Register
        </Button>
       </div>
      </div>
    </div>
  );
};
