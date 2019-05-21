import { connect } from 'react-redux';
import { addUserHobby } from '../../store/users/actions';
import User from './User';

// const mapStateToProps = (state) => {
//   // console.log('mapStateToProps', state)
//   return {
    
//   };
// };

const mapDispatchToProps = (dispatch) => {
  return {
    addUserHobby: (userId, userHobby) => dispatch(addUserHobby(userId, userHobby))
  };
};

export default connect(null, mapDispatchToProps)(User);