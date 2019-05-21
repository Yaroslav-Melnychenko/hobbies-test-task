import { connect } from 'react-redux';
import { fetchUsers, createUserRequest } from '../../store/users/actions';
import Hobies from './hobies';

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

export default connect(mapStateToProps, mapDispatchToProps)(Hobies);