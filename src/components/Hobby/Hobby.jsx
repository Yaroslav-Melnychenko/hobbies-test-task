import React from 'react';
import './Hobby.sass';

const Hobby = (props) => {
  const { name, passion, year, id } = props.hobby;
  const { userId, deleteHobby, userSelect } = props;

  // console.log(fetchUsers);

  const handleDeleteHobby = (userId, hobbyId) => {
    deleteHobby(userId, hobbyId).then(() => userSelect(userId));
  }

  return (
    <div className="hobby">
      <p className="passion">Passion: {passion}</p>
      <p className="name">{name}</p>
      <p className="year">Since {year} <span className="remove" onClick={() => handleDeleteHobby(userId, id)}>X</span></p>
    </div>
  );
}
export default Hobby;