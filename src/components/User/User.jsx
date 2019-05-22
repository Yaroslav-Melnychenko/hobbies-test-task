import React, { Component } from 'react';
import Hobby from '../../components/Hobby';
import './User.sass';

class User extends Component {

  state = {
    passion: 'Low',
    year: '',
    name: ''
  }

  inputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  sendUserHobby = () => {
    if (this.state.year === '' || this.state.name === '') {
      alert('Values should not be empty');
    } else {
      const { addUserHobby, id, userSelect } = this.props;
      addUserHobby(id, { id: Math.random(), ...this.state }).then(() => {
        userSelect(id);
        this.setState({
          passion: 'Low',
          year: '',
          name: ''
        })
      })
    }
  }

  render() {

    const { id, hobbies, userSelect } = this.props;
    const { year, name  } = this.state;

    return (
      <div className="user">
        <div className="add-user">
          <select className="form-item" onChange={this.inputChange} name="passion">
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="Hight">Hight</option>
            <option value="Very-Hight">Very-Hight</option>
          </select>
          <input className="form-item" onChange={this.inputChange} placeholder="Enter user hobby" type="text" name="name" value={name} />
          <input className="form-item" onChange={this.inputChange} placeholder="Enter year" type="text" name="year" value={year} />
          <button className="form-item" onClick={this.sendUserHobby}>Add</button>
        </div>
        <div className="user-hobbies">
          {
            hobbies && hobbies.map(hobby => <Hobby key={hobby.id} hobby={hobby} userId={id} userSelect={userSelect} />)
          }
        </div>
      </div>
    );
  }
}
export default User;