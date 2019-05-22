import { connect } from 'react-redux';
import { deleteHobby } from '../../store/users/actions';
import Hobby from './Hobby';

const mapDispatchToProps = (dispatch) => {
  return {
    deleteHobby: (userId, hobbyId) => dispatch(deleteHobby(userId, hobbyId))
  };
};

export default connect(null, mapDispatchToProps)(Hobby);