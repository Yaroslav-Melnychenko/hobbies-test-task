import React from 'react';
import { shallow } from 'enzyme';
import Head from './components/Head';
import App from './App';
import combineReducers from './store/reducers'

describe('App component', () => {
  it('Verify app can be created', () => {
    const app = shallow(<App />);
    expect(app != null).toEqual(true);
  });
});

describe('Reducers', () => {
  it('Verify reducers fetch users', () => {
    const reducers = combineReducers({users: [ {'id': 1,  "Name": "User 1"}, {'id': 2,  "Name": "User 2"}] }, 'INIT_USERS')
    expect(reducers.users.length).toEqual(2);
  });
});

describe('Head component', () => {
  it('Correct title in header', () => {
    const wrapper = shallow(<Head />);    
    const text = wrapper.find('div').text();
    expect(text).toEqual('User hobbies');
  });
});
