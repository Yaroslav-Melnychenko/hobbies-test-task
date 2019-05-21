const addUser = (state = [], action) => {
  // console.log(action.users)
  switch (action.type) {
    case 'INIT_USERS':
      return {
        ...state,
        users: action.users
      }
    default:
      return state
  }
}
export default addUser;