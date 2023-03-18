import axios from 'axios';
import { postDataAPI } from '../../utils/fetch';

export const login = ({ data }) => async (dispatch) => {
  try {
    console.log(data);
    const res = await postDataAPI('user/login', data);

    dispatch({
      type: "AUTH",
      payload: { token: res.data.access_token, user: res.data.user },
    });
    console.log(res)
    localStorage.setItem('loggedIn', true);
    localStorage.setItem("access_token", res.data.access_token);


  } catch (err) {
    console.error(err.response.data.msg);
  }
};

export const refreshToken = () => async (dispatch) => {
  const loggedIn = localStorage.getItem('loggedIn');
  const access_token = localStorage.getItem("access_token");
  if (loggedIn) {
    try {
      const res = await postDataAPI('user/refresh_token', { token: access_token });
      dispatch({
        type: "AUTH",
        payload: { token: res.data.access_token, user: res.data.user },
      });

    } catch (err) {
      console.error(err.response.data.msg);
    }
  }
};

export const register = ({ data }) => async (dispatch) => {
  try {
    const res = await postDataAPI('user/create', {
      ...data,
    });
    dispatch({
      type: "AUTH",
      payload: {
        token: res.data.access_token,
        user: res.data.user,
      },
    });

    localStorage.setItem('loggedIn', true);
    localStorage.setItem("access_token", res.data.access_token);
  } catch (err) {
    console.error(err.response.data.msg);
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem("access_token");
    // await postDataAPI('logout');
  } catch (err) {
    console.error(err.response.data.msg);
  }
  window.location.reload(false);
};