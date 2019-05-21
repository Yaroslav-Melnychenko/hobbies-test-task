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

// const updateUser = (hobbies) => {
//   return {
//     type: 'UPDATE_USER',
//     hobbies
//   }
// }

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

export const addUserHobby = (userId, userHobby) => {
  return dispatch => {
    return axios.get(`http://localhost:4000/users/${userId}`).then(responce => {
      const { hobbies } = responce.data;
      hobbies.push(userHobby);
      return axios.patch(`http://localhost:4000/users/${userId}`, { "hobbies": hobbies }).then(responce => {
        // const { hobbies } = responce.data;
        // dispatch(updateUser(hobbies));
        return axios.get('http://localhost:4000/users').then(responce => {
          dispatch(initUsers(responce.data))
        });
      })
    });
  }
}