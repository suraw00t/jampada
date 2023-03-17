import { postDataAPI } from '../../utils/fetch';

export const createTopic = (data) => async (dispatch) => {
  try {
    console.log(data);
    // const res = await postDataAPI('topic/create', data);

    // dispatch({
    //   type: "CREATE_TOPIC",
    //   payload: { token: res.data.access_token, user: res.data.user },
    // });
    // localStorage.setItem('loggedIn', true);
    // localStorage.setItem("rf_token",  res.data.refresh_token);

    
  } catch (err) {
    console.error(err.response.data.msg);
  }
};