import React from 'react';
import './Hobby.sass';

const Hobby = () => {
  return (
    <div className="hobby">
      <p className="passion">Passion: Medium</p>
      <p className="name">Playing football</p>
      <p className="year">Since 2014 <span className="remove">X</span></p>
    </div>
  );
}
export default Hobby;