import React, { Component } from 'react';
import Hobby from '../../components/Hobby';
import './User.sass';

class User extends Component {
  render() {
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
          <Hobby />
          <Hobby />
          <Hobby />
          <Hobby />
          <Hobby />
          <Hobby />
          <Hobby />
        </div>
      </div>
    );
  }
}
export default User;