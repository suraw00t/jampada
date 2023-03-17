import { postDataAPI } from '../../utils/fetch';

export const login = (data) => async (dispatch) => {
  try {
    console.log(data);
    // const res = await postDataAPI('login', data);

    // dispatch({
    //   type: "AUTH",
    //   payload: { token: res.data.access_token, user: res.data.user },
    // });
    // localStorage.setItem('loggedIn', true);
    // localStorage.setItem("rf_token",  res.data.refresh_token);

    
  } catch (err) {
    console.error(err.response.data.msg);
  }
};

export const refreshToken = () => async (dispatch) => {
  const loggedIn = localStorage.getItem('loggedIn');
  const rf_token = localStorage.getItem("rf_token");
  if (loggedIn) {
    try {
      const res = await postDataAPI('refresh_token', {rf_token});
      dispatch({
        type: "AUTH",
        payload: { token: res.data.access_token, user: res.data.user },
      });

    } catch (err) {
        console.error(err.response.data.msg);
    }
  }
};

export const register = (data) => async (dispatch) => {
  try {
    console.log(data);
    // const res = await postDataAPI('register', {
    //   ...data,
    // });
    // dispatch({
    //   type: "AUTH",
    //   payload: {
    //     token: res.data.access_token,
    //     user: res.data.user,
    //   },
    // });

    // localStorage.setItem('loggedIn', true);
    // localStorage.setItem("rf_token",  res.data.refresh_token);
  } catch (err) {
    console.error(err.response.data.msg);
  }
};

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem('loggedIn');
    localStorage.removeItem("rf_token");
    await postDataAPI('logout');
  } catch (err) {
    console.error(err.response.data.msg);
  }
};