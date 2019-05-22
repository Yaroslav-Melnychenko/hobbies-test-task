import React from 'react';
import './Hobby.sass';

const Hobby = (props) => {
  const { name, passion, year, id } = props.hobby;
  const { userId, deleteHobby, userSelect } = props;

  const handleDeleteHobby = (userId, hobbyId) => {
    const confirm = window.confirm("Are you sure ?");
    if (confirm) {
      deleteHobby(userId, hobbyId).then(() => userSelect(userId));
    }
  }

  return (
    <div className="hobby">
      <p className="passion hobby-item">Passion: {passion}</p>
      <p className="name hobby-item">{name}</p>
      <p className="year hobby-item">Since {year} <span className="remove" onClick={() => handleDeleteHobby(userId, id)}>X</span></p>
    </div>
  );
}
export default Hobby;