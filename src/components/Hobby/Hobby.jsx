import React from 'react';
import './Hobby.sass';

const Hobby = (props) => {
  const { name, passion, year } = props.hobby;
  const { userId } = props;
  console.log('userId', userId);
  return (
    <div className="hobby">
      <p className="passion">Passion: {passion}</p>
      <p className="name">{name}</p>
      <p className="year">Since {year} <span className="remove">X</span></p>
    </div>
  );
}
export default Hobby;