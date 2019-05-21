import React, { Component } from 'react';
import Hobby from '../../components/Hobby';
import './User.sass';

class User extends Component {
  render() {

    const { id, hobbies } = this.props;
    // console.log(id);

    return (
      <div className="user">
        <div className="add-user">
          <select>
            <option>Low</option>
            <option>Medium</option>
            <option>Hight</option>
            <option>Very-Hight</option>
          </select>
          <input placeholder="Enter user hobby" type="text" />
          <input placeholder="Enter year" type="text" />
          <button>Add</button>
        </div>
        <div className="user-hobbies">
          {
            hobbies && hobbies.map(hobby => <Hobby key={hobby.name} hobby={hobby} userId={id} />)
          }
        </div>
      </div>
    );
  }
}
export default User;