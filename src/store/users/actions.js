import axios from 'axios';

const initUsers = (users) => {
  return {
    type: 'INIT_USERS',
    users
  }
}

const createUser = (user) => {
  return {
    type: 'CREATE_USER',
    user
  }
}

export const fetchUsers = () => {
  return dispatch => {
    return axios.get('http://localhost:4000/users').then(responce => {
      dispatch(initUsers(responce.data))
    });
  }
}

export const createUserRequest = (userName) => {
  return dispatch => {
    return axios.post('http://localhost:4000/users', {
      "id": Math.random(),
      "name": userName,
      "hobbies": []
    }).then(responce => {
      dispatch(createUser(responce.data));
    })
  }
}