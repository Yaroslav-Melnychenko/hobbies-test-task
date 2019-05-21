import { connect } from 'react-redux';
import { fetchUsers } from '../../store/users/actions';
import Hobies from './hobies';

const mapStateToProps = ({ users }) => {
  return {
    ...users
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: (data) => dispatch(fetchUsers(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Hobies);