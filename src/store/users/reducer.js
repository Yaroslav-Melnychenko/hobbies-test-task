const addUser = (state = [], action) => {
  // console.log(action)
  switch (action.type) {
    case 'INIT_USERS':
      return {
        users: action.users
      }
    case 'CREATE_USER':
      return {
        users: [...state.users, action.user]
      }
    // case 'UPDATE_USER':
    //     return {
          
    //     }
    default:
      return state
  }
}
export default addUser;