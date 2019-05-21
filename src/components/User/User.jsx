import React, { Component } from 'react';
import Hobby from '../../components/Hobby';
import './User.sass';

class User extends Component {

  state = {
    passion: 'Low',
    year: null,
    name: null
  }

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendUserHobby = () => {
    const { addUserHobby, id, userSelect } = this.props;
    addUserHobby(id, { id: Math.random(), ...this.state }).then(() => userSelect(id))
  }

  render() {

    const { id, hobbies } = this.props;

    return (
      <div className="user">
        <div className="add-user">
          <select onChange={this.inputChange} name="passion">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="Hight">Hight</option>
            <option value="Very-Hight">Very-Hight</option>
          </select>
          <input onChange={this.inputChange} placeholder="Enter user hobby" type="text" name="name" />
          <input onChange={this.inputChange} placeholder="Enter year" type="text" name="year" />
          <button onClick={this.sendUserHobby}>Add</button>
        </div>
        <div className="user-hobbies">
          {
            hobbies && hobbies.map(hobby => <Hobby key={hobby.id} hobby={hobby} userId={id} />)
          }
        </div>
      </div>
    );
  }
}
export default User;