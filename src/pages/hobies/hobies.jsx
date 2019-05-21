import React, { Component } from 'react';
import User from '../../components/User';
// import axios from 'axios';
import './hobies.sass';

class Hobies extends Component {

  state = {
    name: ''
  }

  componentDidMount() {
    // getUsers()
  }

  inputChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  addUser = () => {
    // create new user
    console.log('create new user', this.state);
    this.setState({
      name: ''
    });
  }

  render() {
    return (
      <div className="container">
        <div className="head"><h2>User hobies</h2></div>
        <div className="main-block">
          <div className="users">
            <div className="search">
              <input onChange={this.inputChange} name="user" type="text" placeholder="Enter user name" value={this.state.name} />
              <button onClick={this.addUser} type="submit">Add</button>
            </div>
            <ul className="users-list">
              <li>John</li>
              <li>Peter</li>
              <li>Markus</li>
            </ul>
          </div>
          <div className="users-info">
            <User />
          </div>
        </div>
      </div>
    )
  }
}
export default Hobies;