import { connect } from 'react-redux';
import { fetchUsers, createUserRequest } from '../../store/users/actions';
import Hobbies from './hobbies';

const mapStateToProps = ({ users }) => {
  return {
    ...users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
    addUser: (userName) => dispatch(createUserRequest(userName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hobbies);