import axios from 'axios';

const initUsers = (users) => {
  return {
    type: 'INIT_USERS',
    users
  }
}

export const fetchUsers = () => {
  return dispatch => {
    return axios.get('http://localhost:4000/users').then(responce => {
      dispatch(initUsers(responce.data))
    });
  }
}