import React, { Component } from 'react';
import User from '../../components/User';
import './hobies.sass';

class Hobies extends Component {

  state = {
    name: '',
    selected: null
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  inputChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  addUser = () => {
    const { name } = this.state;
    if (name.length !== 0 ) {
      this.props.addUser(name);
    } else {
      alert('Your name is empty');
    }
    this.setState({
      name: ''
    });
  }

  userSelect = (id) => {
    const { users } = this.props;
    const [ user ] = users.filter((user) => user.id === id);
    // console.log(...user);
    this.setState({
      selected: user
    })
  }

  render() {
    
    const { users } = this.props;
    const { selected } = this.state;
    // console.log(users);

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
              {
                users && users.map((user) => (
                  <li key={user.id} onClick={() => this.userSelect(user.id)}>{user.name}</li>
                ))
              }
            </ul>
          </div>
          <div className="users-info">
            { selected !== null ? <User {...selected} userSelect={this.userSelect} /> : null }
          </div>
        </div>
      </div>
    )
  }
}
export default Hobies;