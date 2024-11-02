import React from 'react';
import './UserCardComponent.css';

function UserCard({ name, handle }) {
  return (
    <div className="user-card">
      <img
        src="#"
        alt={`${name} avatar`}
        className="user-avatar"
      />
      <div className="user-info">
        <h4>{name}</h4>
        <p>{handle}</p>
      </div>
    </div>
  );
}

export default UserCard;
